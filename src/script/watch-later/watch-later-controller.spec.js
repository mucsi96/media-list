/* global describe, it, sinon */
describe('WatchLaterController', function () {
  var WatchLaterModel = $.require('WatchLaterModel')
  var WatchLaterView = $.require('WatchLaterView')
  var WatchLaterController = $.require('WatchLaterController')

  it('should be capable to update model items', function () {
    var listNode = $('<div>')
    var items = [{ id: 1, title: 'alpha', type: 'recorded' }, { id: 2, title: 'bravo', type: 'recorded' }]
    var model = new WatchLaterModel()
    var view = new WatchLaterView(model, {
      list: listNode
    })
    var controller = new WatchLaterController(model, view)
    sinon.stub(model, 'updateItems')
    controller.updateItems(items)
    model.updateItems.should.have.been.calledWith(items)
  })

  it('should be capable to add items', function () {
    var item = { id: 1, title: 'alpha', type: 'recorded' }
    var listNode = $('<div>')
    var model = new WatchLaterModel()
    var view = new WatchLaterView(model, {
      list: listNode
    })
    var controller = new WatchLaterController(model, view)
    sinon.stub(model, 'addItem')
    controller.addItem(item)
    model.addItem.should.have.been.calledWith(item)
  })
})
