/* global describe, it, chai, sinon */

describe('MediaListModel', function () {
  var MediaListModel = $.require('MediaListModel')

  it('should publish @listChanged event if the lists changes', function() {
    var items = [{ id: 1, name: 'alpha' }, { id: 2, name: 'bravo' }]
    var mediaListModel = new MediaListModel()
    var callback = sinon.spy()
    mediaListModel.listChanged.subscribe(callback)
    mediaListModel.updateItems(items)
    callback.should.have.been.called
  });

  it('should list all items', function () {
    var items = [{ id: 1, name: 'alpha' }, { id: 2, name: 'bravo' }]
    var mediaListModel = new MediaListModel()
    mediaListModel.updateItems(items)
    mediaListModel.getItems().should.deep.equal(items)
  })
})
