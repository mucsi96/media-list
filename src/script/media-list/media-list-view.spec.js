describe('MediaListView', function () {
  it('should render the model', function() {
    var model = {
      getItems: function() {
        return [{ id: 1, title: 'alpha' }, { id: 2, title: 'bravo' }]
      }
    }
    var listNode = $('<div></div>')
    var view = new App.MediaListView(model, {
      list: listNode
    })
    view.render()
    listNode.html().should.equal('<li>alpha</li><li>bravo</li>')
  });
})
