/* global App, describe, it, chai, sinon */

describe('MediaListModel', function () {
  it('should list all items', function () {
    var mediaListModel = new App.MediaListModel()
    var items = [{ id: 1, name: 'alpha' }, { id: 2, name: 'bravo' }]

    mediaListModel.updateItems(items)
    mediaListModel.getItems().should.deep.equal(items)
  })
})
