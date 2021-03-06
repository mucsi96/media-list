/* global describe, it, sinon */
describe('MediaListModel', function () {
  var MediaListModel = $.require('MediaListModel')

  it('should publish @listChanged event if the lists changes', function () {
    var items = [{ id: 1, name: 'alpha' }, { id: 2, name: 'bravo' }]
    var mediaListModel = new MediaListModel()
    var callback = sinon.spy()
    mediaListModel.listChanged.subscribe(callback)
    mediaListModel.updateItems(items)
    callback.should.have.been.called
  })

  it('should store media items', function () {
    var items = [{ id: 1, name: 'alpha' }, { id: 2, name: 'bravo' }]
    var mediaListModel = new MediaListModel()
    mediaListModel.updateItems(items)
    mediaListModel.getItems().should.deep.equal(items)
  })

  it('should handle media items flagged as watch later when updating items', function () {
    var items = [{ id: 1, name: 'alpha' }, { id: 2, name: 'bravo' }]
    var mediaListModel = new MediaListModel()
    mediaListModel.updateItems(items, [{ id: 2, name: 'bravo' }])
    mediaListModel.getItems().should.deep.equal([{ id: 1, name: 'alpha' }, { id: 2, name: 'bravo', watchLater: true }])
  })

  it('should handle media items flagged as watch later in a separate call', function () {
    var items = [{ id: 1, name: 'alpha' }, { id: 2, name: 'bravo' }]
    var mediaListModel = new MediaListModel()
    mediaListModel.updateItems(items)
    mediaListModel.updateWatchLater([{ id: 2, name: 'bravo' }])
    mediaListModel.getItems().should.deep.equal([{ id: 1, name: 'alpha' }, { id: 2, name: 'bravo', watchLater: true }])
  })

  it('should filter media items', function () {
    var items = [{ id: 1, name: 'alpha' }, { id: 2, name: 'bravo' }]
    var mediaListModel = new MediaListModel()
    mediaListModel.updateItems(items)
    mediaListModel.setFilter({ id: 2 })
    mediaListModel.getItems().should.deep.equal([{ id: 2, name: 'bravo' }])
  })

  it('should publish @listChanged event if filter changes', function () {
    var mediaListModel = new MediaListModel()
    var callback = sinon.spy()
    mediaListModel.listChanged.subscribe(callback)
    mediaListModel.setFilter({ id: 2 })
    callback.should.have.been.called
  })

  it('should order media items', function () {
    var items = [{ id: 2, name: 'bravo' }, { id: 3, name: 'charlie' }, { id: 1, name: 'alpha' }]
    var mediaListModel = new MediaListModel()
    mediaListModel.updateItems(items)
    mediaListModel.setOrder({ id: 'ASC' })
    mediaListModel.getItems().should.deep.equal([{ id: 1, name: 'alpha' }, { id: 2, name: 'bravo' }, { id: 3, name: 'charlie' }])
  })

  it('should publish @listChanged event if order changes', function () {
    var mediaListModel = new MediaListModel()
    var callback = sinon.spy()
    mediaListModel.listChanged.subscribe(callback)
    mediaListModel.setFilter({ id: 2 })
    callback.should.have.been.called
  })
})
