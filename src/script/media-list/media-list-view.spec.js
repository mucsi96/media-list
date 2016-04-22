describe('MediaListView', function () {
  it('should render on model change', function() {
    var model = new App.MediaListModel()
    var listNode = $('<ul>')
    var view = new App.MediaListView(model, {
      list: listNode
    })
    model.updateItems([{ id: 1, title: 'alpha' }, { id: 2, title: 'bravo' }]);
    listNode.html().should.equal('<li>alpha</li><li>bravo</li>')
  });
})
