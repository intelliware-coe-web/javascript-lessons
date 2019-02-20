describe('ES6 generators', () => {
  const FILL_IN_THE_BLANK = null

  describe('introduction', () => {
    const fixture = function* () {
      yield 'Hello'
      yield 'World'
    }

    it('should return a result when called', () => {
      const actual = fixture()
      expect(actual.next()).toEqual({value: 'Hello', done: false})
    })

    it('should return ??? when called twice', () => {
      const actual = fixture()
      actual.next()
      expect(actual.next()).toEqual(FILL_IN_THE_BLANK)
    })

    it('should return ??? when called thrice', () => {
      const actual = fixture()
      actual.next()
      actual.next()
      expect(actual.next()).toEqual(FILL_IN_THE_BLANK)
    })
  })

  describe('Forcing behaviour', () => {
    const generator = function* () {
      yield 1
      yield 2
      yield 3
    }

    it('should return the external value with return', () => {
      const actual = generator()
      actual.next()
      expect(actual.return('foo')).toEqual(FILL_IN_THE_BLANK)
    })

    it('should return ??? when return is called', () => {
      const actual = generator()
      actual.next()
      actual.return('foo')
      expect(actual.next()).toEqual(FILL_IN_THE_BLANK)
    })

    it('should throw the external exception with throw', () => {
      const actual = generator()
      actual.next()
      expect(() => actual.throw('foo')).toThrowError('foo')
      expect(actual.next()).toEqual(FILL_IN_THE_BLANK)
    })
  })

  describe('Challenge: create a generator function that will create a range of numbers from min to max', () => {
    function* range(min, max) {
      // FILL_IN_THE_BLANK
    }

    it('should create an infinite range', () => {
      const min = 0
      const max = 10
      const actual = range(min, max)
      for (let i = min; i < max; i++) {
        expect(actual.next().value).toEqual(i)
      }
    })
  })

  describe('Passing message in', () => {
    const TRY_PUTTING_A_VALUE_HERE = undefined

    function* inputOutput() {
      const x = yield
      const y = yield
      yield x + y
    }

    it('should return the sum of the inputs', () => {
      const actual = inputOutput()
      expect(actual.next(TRY_PUTTING_A_VALUE_HERE)).toEqual({value: undefined, done: false})
      expect(actual.next(TRY_PUTTING_A_VALUE_HERE)).toEqual({value: undefined, done: false})
      expect(actual.next()).toEqual({value: FILL_IN_THE_BLANK, done: false})
    })
  })
})