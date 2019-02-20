describe('ES6 generators', () => {
  describe('introduction', () => {
    const fixture = function* () {
      yield 'Hello'
      yield 'World'
    }

    it('should return a result when called', () => {
      const actual = fixture()
      expect(actual.next()).toEqual({value: 'Hello', done: false})
    })

    it('should return the second value when called twice', () => {
      const actual = fixture()
      actual.next()
      expect(actual.next()).toEqual({value: 'World', done: false})
    })

    it('should return the done flag when called thrice', () => {
      const actual = fixture()
      actual.next()
      actual.next()
      expect(actual.next()).toEqual({value: undefined, done: true})
    })
  })

  describe('Forcing behaviour', () => {
    const generator = function* () {
      try {
        yield 1
        yield 2
        yield 3
      } catch (e) {
        throw 'Oops'
      }
    }

    it('should return the external value with return', () => {
      const actual = generator()
      actual.next()
      expect(actual.return('foo')).toEqual({value: 'foo', done: true})
    })

    it('should return done when next is called after return', () => {
      const actual = generator()
      actual.next()
      actual.return('foo')
      expect(actual.next()).toEqual({value: undefined, done: true})
    })

    it('should throw the external exception with throw', () => {
      const actual = generator()
      actual.next()
      expect(() => actual.throw('foo')).toThrow('Oops')
      expect(actual.next()).toEqual({value: undefined, done: true})
    })
  })

  describe('Challenge: create a generator function that will create a range of numbers from min to max', () => {
    function* range(min, max) {
      for (let i = min; i < max; i++) {
        yield i
      }
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

})