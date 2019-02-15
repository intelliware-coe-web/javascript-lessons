describe('ES6 generators', () => {
  const FILL_IN_THE_BLANK = '🤔';

  describe('introduction', () => {

    it('should return a result when called', () => {
      const fixture = function* () {
        yield 'Hello';
        yield 'World';
      };

      const actual = fixture();

      expect(actual.next()).toBe(FILL_IN_THE_BLANK);
    });

  });

});