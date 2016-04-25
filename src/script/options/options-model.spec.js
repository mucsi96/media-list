/* global describe, it, sinon */
describe('OptionsModel', function () {
  var OptionsModel = $.require('OptionsModel')

  it('should store refresh interval', function () {
    var model = new OptionsModel()
    model.setRefreshInterval(1000)
    model.getRefreshInterval().should.equal(1000)
  })

  it('should publish @refreshIntervalChanged event if refresh interval changes', function () {
    var model = new OptionsModel()
    var callback = sinon.spy()
    model.refreshIntervalChanged.subscribe(callback)
    model.setRefreshInterval(2000)
    callback.should.have.been.called
  })
})
