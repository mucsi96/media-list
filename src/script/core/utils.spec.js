/* global describe, it */
describe('utils', function () {
  var utils = $.require('utils')

  describe('match', function () {
    it('should return true if provided criteria is an empty object', function () {
      utils.match({ a: 1, b: 2 }, {}).should.equal(true)
    })

    it('should return true if an object match provided criteria', function () {
      utils.match({ a: 1, b: 2 }, { a: 1 }).should.equal(true)
    })
  })

  describe('objectEquals', function () {
    it('should return true if both object has same properties and values', function () {
      utils.objectEquals({ a: 1, b: 2 }, { b: 2, a: 1 }).should.equal(true)
    })

    it('should return false if both object has not the same properties and values', function () {
      utils.objectEquals({ a: 1, b: 2 }, { b: 2, a: 3 }).should.equal(false)
    })
  })

  describe('compareByOrder', function () {
    it('should return 1 if a > b for ascending order', function () {
      var compare = utils.compareByOrder({ a: 'ASC' })
      compare({ a: 2 }, { a: 1 }).should.equal(1)
    })

    it('should return -1 if a < b for ascending order', function () {
      var compare = utils.compareByOrder({ a: 'ASC' })
      compare({ a: 2 }, { a: 3 }).should.equal(-1)
    })

    it('should return 0 if a = b for ascending order', function () {
      var compare = utils.compareByOrder({ a: 'ASC' })
      compare({ a: 2 }, { a: 2 }).should.equal(0)
    })

    it('should return -1 if a > b for descending order', function () {
      var compare = utils.compareByOrder({ a: 'DESC' })
      compare({ a: 2 }, { a: 1 }).should.equal(-1)
    })

    it('should return 1 if a < b for descending order', function () {
      var compare = utils.compareByOrder({ a: 'DESC' })
      compare({ a: 2 }, { a: 3 }).should.equal(1)
    })

    it('should return 0 if a = b for descending order', function () {
      var compare = utils.compareByOrder({ a: 'DESC' })
      compare({ a: 2 }, { a: 2 }).should.equal(0)
    })
  })
})
