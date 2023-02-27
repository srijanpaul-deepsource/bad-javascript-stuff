import { Inject } from "some-module"

// doc
export class C {
  param: number
  constructor(@Inject("SEQUELIZE") private readonly param: number) {}
}

