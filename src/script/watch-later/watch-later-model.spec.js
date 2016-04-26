/* global describe, it, beforeEach, localStorage, sinon */
describe('WatchLaterModel', function () {
  var WatchLaterModel = $.require('WatchLaterModel')

  beforeEach(function () {
    localStorage.removeItem('watchLater')
  })

  it('should publish @listChanged event if item is added', function () {
    var item = { id: 1, name: 'alpha' }
    var mediaListModel = new WatchLaterModel()
    var callback = sinon.spy()
    mediaListModel.listChanged.subscribe(callback)
    mediaListModel.addItem(item)
    callback.should.have.been.called
  })

  it('should store media items', function () {
    var item = { id: 1, name: 'alpha' }
    var mediaListModel = new WatchLaterModel()
    mediaListModel.addItem(item)
    mediaListModel.getItems().should.deep.equal([{ id: 1, name: 'alpha', watchLater: true }])
  })

  it('should update media items', function () {
    var items = [{ id: 1, name: 'alpha' }, { id: 2, name: 'bravo' }, { id: 3, name: 'charlie' }]
    var mediaListModel = new WatchLaterModel()
    mediaListModel.addItem({ id: 1, name: 'charlie' })
    mediaListModel.addItem({ id: 2, name: 'bravo' })
    mediaListModel.addItem({ id: 4, name: 'delta' })
    mediaListModel.updateItems(items)
    mediaListModel.getItems().should.deep.equal([{ id: 1, name: 'alpha' }, { id: 2, name: 'bravo' }])
  })

  it('should remove media items', function () {
    var items = [{ id: 1, name: 'alpha' }, { id: 2, name: 'bravo' }, { id: 3, name: 'charlie' }]
    var mediaListModel = new WatchLaterModel()
    mediaListModel.addItem({ id: 1, name: 'charlie' })
    mediaListModel.addItem({ id: 2, name: 'bravo' })
    mediaListModel.addItem({ id: 4, name: 'delta' })
    mediaListModel.updateItems(items)
    var callback = sinon.spy()
    mediaListModel.listChanged.subscribe(callback)
    mediaListModel.removeItem({ id: 1, name: 'alpha' })
    mediaListModel.getItems().should.deep.equal([{ id: 2, name: 'bravo' }])
    callback.should.have.been.called
  })

  it('should publish @listChanged event if items updated', function () {
    var items = [{ id: 1, name: 'alpha' }, { id: 2, name: 'bravo' }, { id: 3, name: 'charlie' }]
    var mediaListModel = new WatchLaterModel()
    var callback = sinon.spy()
    mediaListModel.listChanged.subscribe(callback)
    mediaListModel.updateItems(items)
    callback.should.have.been.called
  })
})
