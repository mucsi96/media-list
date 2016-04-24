/* global describe, it */
describe('utils', function() {
  var utils = $.require('utils')

  describe('match', function() {
    it('should return true if provided criteria is an empty object', function () {
      utils.match({ a: 1, b: 2 }, {}).should.equal(true)
    });

    it('should return true if an object match provided criteria', function () {
      utils.match({ a: 1, b: 2 }, { a: 1 }).should.equal(true)
    });
  });
});
