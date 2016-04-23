/* global describe, it */
describe('Module', function () {
  it('should allow to define and require modules', function () {
    $.define('AlphaModule', function (module) {
      function print () {
        return 'hello from AlphaModule'
      }

      module.exports = { print: print }
    })

    $.require('AlphaModule').print().should.equal('hello from AlphaModule')
  })
})
