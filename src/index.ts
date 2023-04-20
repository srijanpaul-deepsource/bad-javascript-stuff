function returnsPromise(): Promise<number> {
  return Promise.resolve(1)
}

returnsPromise() // <- JS-0328 should be raised here.


