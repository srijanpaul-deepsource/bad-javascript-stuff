export default function act(room) {
  // mark initial time
  const t0 = Game.cpu.getUsed()

  room.__actType = this.roomActType(room)
  const [roomControllers, consumingControllers] = this.roomControllersFind(room)

  if (roomControllers.length === 0 && consumingControllers.length === 0) {
    console.log('No controllers found for room [' + room.name + ']')
    return
  }

  secutiryProcess.work(room)
  roomInfoProcess.work(room)
  towerProcess.work(room)

  // STRATEGY don't execute certain processes too often and on the same tick / all rooms
  const processKey = (room.memory.intl + Game.time) % 12

  if (processKey === 0 ||
      processKey === 6 ||
      room.__threatEscalated) {
    spawnProcess.work(room)
  }

  if (processKey === 3) {
    linkProcess.work(room)
  }

  const roomCreeps = room.getRoomControlledCreeps()

  if (roomCreeps.length > 0) {
    // clean up controllers
    this.roomControllersPrepare(roomControllers, room)
    this.roomControllersPrepare(consumingControllers, room)

    // loop 1 - pre-act
    for (const creep of roomCreeps) {
      // migrate creeps into room of registration
      if (creep.memory.crum !== creep.room.name) {
        creep.__roomChange = true

        if (creep.getActiveBodyparts(MOVE) > 0) {
          const posInDestRoom = bootstrap.centerRoomPosition(creep.memory.crum)
          const rangeInDestRoom = posInDestRoom.offBorderDistance()

          creep.moveToWrapper(
            posInDestRoom,
            {
              range: rangeInDestRoom,
              reusePath: _.random(3, 5)
            }
          )
        }

        continue
      }

      // do pass-by chores that consume something into creep
      const consumingRc = this.consumingControllersControl(consumingControllers, room, creep)
      if (consumingRc !== OK) {
        if (_.some(controllersFreeCapacity, _.matches(creep.memory.ctrl))) {
          bootstrap.unassignCreep(creep)
        }
      }
    }

    // loop 2 - act and mark creeps that hold position
    for (const creep of roomCreeps) {
      if (creep.__roomChange) continue

      if (bootstrap.creepAssigned(creep)) {
        creep.__target = creep.target()

        if (creep.__target) {
          if (creep.pos.inRangeTo(creep.__target, creep.memory.dact)) {
            const keep = this.roomControllersAct(creep.__target, creep)

            if (keep) {
              creep.__atTarget = true
              creep.blockPosition()
            } else {
              creep.__target = undefined
              bootstrap.unassignCreep(creep)
            }
          }
        }
      }
    }

    // loop 3 - movement within room
    for (const creep of roomCreeps) {
      if (creep.__roomChange) continue
      if (creep.__target === undefined) continue
      if (creep.__atTarget) continue

      // state - there is a target not in range

      if (creep.getActiveBodyparts(MOVE) === 0) {
        creep.blockPosition()
        creep.__target = undefined
        bootstrap.unassignCreep(creep)
        continue
      }

      if (creep.fatigue > 0) {
        creep.fatigueWrapper()
        continue
      }

      // STRATEGY creep movement, main CPU sink

      let stroke = 'green'

      // first move by cached path
      let rc = creep.moveToWrapper(
        creep.__target,
        {
          noPathFinding: true,
          reusePath: _.random(3, 5)
        }
      )

      // no movement, see if pathfinding is possible and within CPU
      if (rc === ERR_NOT_FOUND) {
        if (bootstrap.hardCpuUsed(t0) <= room.__cpuLimit) {
          stroke = 'yellow'
          rc = creep.moveToWrapper(
            creep.__target,
            {
              costCallback: mapUtils.costCallback_costMatrixForRoomActivity,
              ignoreCreeps: false, // if original path has to be re-made, be aware
              maxRooms: 1,
              range: creep.memory.dact,
              rememberStop: true,
              reusePath: _.random(3, 5)
            }
          )
        } else {
          // keep assignment
          stroke = 'red'
          rc = OK
        }
      }

      if (rc === OK) {
        if (_.some(controllersBlockStop, _.matches(creep.memory.ctrl))) {
          creep.blockStop()
        }
        this.roomControllersObserveOwn(creep)
      } else {
        stroke = 'purple'
        creep.__target = undefined
        bootstrap.unassignCreep(creep)
      }

      room.visual.circle(creep.pos.x, creep.pos.y, { fill: 'transparent', radius: 0.55, stroke })
    }

    const unassignedCreeps = _.filter(
      roomCreeps,
      function (creep) {
        if (creep.__target) return false

        // plunders with empty cargo will be taken away
        if (creep.shortcut === 'plunder' && upgradeController._isEmpty(creep)) {
          return false
        }

        return true
      }
    )

    if (unassignedCreeps.length > 0) {
      const standing = this.roomControllersControl(roomControllers, room, unassignedCreeps)
      for (const creep of standing) {
        creep.blockPosition()
      }

      // move unassigned creeps off the border
      // relevant for plunders
      for (const creep of unassignedCreeps) {
        const pos = creep.pos

        if (pos.x === 0) creep.moveWrapper(RIGHT)
        else if (pos.x === 49) creep.moveWrapper(LEFT)
        else if (pos.y === 0) creep.moveWrapper(BOTTOM)
        else if (pos.y === 49) creep.moveWrapper(TOP)
      }
    }
  }

  if (bootstrap.hardCpuUsed(t0) <= room.__cpuLimit) {
    autobuildProcess.work(room)
  }

  if (processKey === 9 && bootstrap.hardCpuUsed(t0) <= room.__cpuLimit) {
    terminalProcess.work(room)
  }
} // end of act method
