/* global describe, it, sinon */

describe('MediaListController', function () {
  var MediaListModel = $.require('MediaListModel')
  var MediaListView = $.require('MediaListView')
  var MediaListController = $.require('MediaListController')

  it('should be capable to update model items', function () {
    var listNode = $('<div>')
    var items = [{ id: 1, title: 'alpha' }, { id: 2, title: 'bravo' }]
    var model = new MediaListModel()
    var view = new MediaListView(model, {
      list: listNode
    })
    var controller = new MediaListController(model, view)
    sinon.stub(view, 'render')
    controller.updateItems(items)
    view.render.should.have.been.called
  })
})
