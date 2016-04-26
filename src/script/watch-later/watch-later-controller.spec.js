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

  it('should provide model items', function () {
    var listNode = $('<div>')
    var model = new WatchLaterModel()
    var view = new WatchLaterView(model, {
      list: listNode
    })
    var controller = new WatchLaterController(model, view)
    sinon.stub(model, 'getItems')
    controller.getItems()
    model.getItems.should.have.been.called
  })

  it('should be capable to remove media items from watch later', function () {
    var listNode = $('<div>')
    var items = [{ id: 1, title: 'alpha', type: 'recorded' }, { id: 2, title: 'bravo', type: 'recorded' }]
    var itemToRemove = { id: 2, title: 'bravo', type: 'recorded' }
    var model = new WatchLaterModel()
    var view = new WatchLaterView(model, {
      list: listNode
    })
    var controller = new WatchLaterController(model, view)
    controller.addItem({ id: 1, name: 'charlie' })
    controller.addItem({ id: 2, name: 'bravo' })
    controller.addItem({ id: 4, name: 'delta' })
    controller.updateItems(items)
    var callback = sinon.spy()
    sinon.stub(model, 'removeItem')
    controller.removeFromWatchLater.subscribe(callback)
    view.removeFromWatchLater.publish(itemToRemove)
    callback.should.have.been.called
    model.removeItem.should.have.been.calledWith(itemToRemove)
  })
})
