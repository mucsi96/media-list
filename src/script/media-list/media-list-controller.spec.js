/* global App, describe, it, chai, sinon */

describe('MediaListController', function () {
  describe('updateItems', function() {
    it('should update model items', function() {
      var listNode = $('<ul>')
      var model = new App.MediaListModel()
      var view = new App.MediaListView(model, {
        list: listNode
      })
      var controller = new App.MediaListController(model, view)
      controller.updateItems([{ id: 1, title: 'alpha' }, { id: 2, title: 'bravo' }]);
      listNode.html().should.equal('<li>alpha</li><li>bravo</li>')
    });
  });
})
