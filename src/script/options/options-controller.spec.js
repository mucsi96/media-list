/* global describe, it, sinon */
describe('OptionsController', function () {
  var OptionsModel = $.require('OptionsModel')
  var OptionsView = $.require('OptionsView')
  var OptionsController = $.require('OptionsController')

  it('should publish @refreshIntervalChanged if refresh interval changes', function () {
    var refreshIntervalNode = $('<ul>')
    var model = new OptionsModel()
    var view = new OptionsView(model, {
      refreshInterval: refreshIntervalNode
    })
    var controller = new OptionsController(model, view)
    var callback = sinon.spy()
    controller.refreshIntervalChanged.subscribe(callback)
    model.setRefreshInterval(1000)
    callback.should.have.been.called
  })

  it('should provide the active refresh interval', function () {
    var refreshIntervalNode = $('<ul>')
    var model = new OptionsModel()
    var view = new OptionsView(model, {
      refreshInterval: refreshIntervalNode
    })
    var controller = new OptionsController(model, view)
    model.setRefreshInterval(1000)
    controller.getRefreshInterval().should.deep.equal(1000)
  })
})
