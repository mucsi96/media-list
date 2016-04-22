describe('MediaListView', function () {
  var MediaListModel = $.require('MediaListModel')
  var MediaListView = $.require('MediaListView')

  it('should render on model change', function() {
    var items = [{ id: 1, title: 'alpha' }, { id: 2, title: 'bravo' }]
    var listNode = $('<div>')
    var model = new MediaListModel()
    var view = new MediaListView(model, {
      list: listNode
    })
    sinon.stub(view, 'render')
    model.updateItems(items);
    view.render.should.have.been.calledWith('media-list-item', listNode, items[0])
    view.render.should.have.been.calledWith('media-list-item', listNode, items[1])
  });
})
