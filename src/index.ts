function returnsPromise(): Promise<number> {
  return Promise.resolve(1)
}

returnsPromise()

