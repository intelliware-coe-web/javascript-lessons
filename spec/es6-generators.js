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

  describe('Generator', () => {
    const generator = function* () {
      yield 1
      yield 2
      yield 3
    }

    it('should return ??? when return is called', () => {
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
  })

})