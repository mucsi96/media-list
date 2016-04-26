/* global describe, it, sinon */
describe('MediaListController', function () {
  var MediaListModel = $.require('MediaListModel')
  var MediaListView = $.require('MediaListView')
  var MediaListController = $.require('MediaListController')

  it('should be capable to update model items', function () {
    var listNode = $('<div>')
    var items = [{ id: 1, title: 'alpha', type: 'recorded' }, { id: 2, title: 'bravo', type: 'recorded' }]
    var model = new MediaListModel()
    var view = new MediaListView(model, {
      list: listNode
    })
    var controller = new MediaListController(model, view)
    sinon.stub(view, 'render')
    controller.updateItems(items)
    view.render.should.have.been.called
  })

  it('should be capable to update model items added to watch later', function () {
    var listNode = $('<div>')
    var items = [{ id: 1, title: 'alpha', type: 'recorded' }, { id: 2, title: 'bravo', type: 'recorded' }]
    var model = new MediaListModel()
    var view = new MediaListView(model, {
      list: listNode
    })
    var controller = new MediaListController(model, view)
    sinon.stub(model, 'updateWatchLater')
    controller.updateWatchLater(items)
    model.updateWatchLater.should.have.been.called
  })

  it('should be capable to filter model items', function () {
    var filter = { id: 1 }
    var listNode = $('<div>')
    var model = new MediaListModel()
    var view = new MediaListView(model, {
      list: listNode
    })
    var controller = new MediaListController(model, view)
    sinon.stub(model, 'setFilter')
    controller.setFilter(filter)
    model.setFilter.should.have.been.calledWith(filter)
  })

  it('should be capable to order model items', function () {
    var order = { id: 'ASC' }
    var listNode = $('<div>')
    var model = new MediaListModel()
    var view = new MediaListView(model, {
      list: listNode
    })
    var controller = new MediaListController(model, view)
    sinon.stub(model, 'setOrder')
    controller.setOrder(order)
    model.setOrder.should.have.been.calledWith(order)
  })

  it('should be capable to add media items to watch later', function () {
    var listNode = $('<div>')
    var model = new MediaListModel()
    var view = new MediaListView(model, {
      list: listNode
    })
    var controller = new MediaListController(model, view)
    var callback = sinon.spy()
    controller.watchLater.subscribe(callback)
    view.watchLater.publish()
    callback.should.have.been.called
  })
})
