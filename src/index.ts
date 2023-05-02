// some doc comment
function returnsPromise(): Promise<number> {
  return Promise.resolve(1)
}

// Why isn't the issue being raised here!?
returnsPromise() // <- JS-0328 should be raised here.


