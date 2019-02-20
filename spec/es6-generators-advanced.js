describe('Advanced', () => {
  describe('delegation', () => {
    function* sum() {
      const a = yield
      const b = yield
      return a + b
    }

    function* sum4() {
      const a = yield* sum()
      const b = yield* sum()
      yield a + b
    }

    it('should sum 1 + 2 + 3 + 4 values', () => {
      const actual = sum4()
      // fill in the blanks here
      expect(actual.next().value).toEqual(10)
    })
  })

  describe('Callback Hell', () => {
    const webServiceCall = new Promise((resolve) =>
      setTimeout(() =>
        resolve(4), 200))
      .then((fulfillment) => new Promise((resolve) =>
        setTimeout(() =>
          resolve(fulfillment + 8), 200)))

    it('should return 12', (done) => {
      webServiceCall.then((result) => {
        expect(result).toBe(12)
        done()
      })
    })
  })

  describe('Coroutines', () => {
    // DON'T USE THIS IN PRODUCTION!!!!
    function coroutine(ctor) {
      let generator = ctor()
      let doNext = (data) => {
        let next = generator.next(data)
        if (!next.done) {
          return next.value.then(doNext)
        }
      }
      doNext()
    }

    it('should return 12', (done) => {
      coroutine(
        function* main() {
          const firstCall = yield new Promise((resolve) => setTimeout(() => resolve(4), 200))
          const secondCall = yield new Promise((resolve) => setTimeout(() => resolve(firstCall + 8), 200))
          expect(secondCall).toBe(12)
          done()
        }
      )
    })

    it('ES7 has this built in!', (done) => {
      (async function test() {
        const firstCall = await new Promise((resolve) => setTimeout(() => resolve(4), 200))
        const secondCall = await new Promise((resolve) => setTimeout(() => resolve(firstCall + 8), 200))
        expect(secondCall).toBe(12)
        done()
      })()
    })
  })
})