/* global describe, it, sinon */
describe('MediaListView', function () {
  var MediaListModel = $.require('MediaListModel')
  var MediaListView = $.require('MediaListView')

  it('should render on model change', function () {
    var item = [
      { id: 1, title: 'alpha', type: 'recorded', viewers: 11, picture: 'img1' },
      { id: 2, title: 'bravo', type: 'channel', isLive: false, viewers: 12, picture: 'img2' },
      { id: 3, title: 'charlie', type: 'channel', isLive: true, viewers: 17, picture: 'img3' }
    ]
    var listNode = $('<div>')
    var model = new MediaListModel()
    var view = new MediaListView(model, {
      list: listNode
    })
    sinon.stub(view, 'render')
    model.updateItems(item)
    view.render.should.have.been.calledWith('media-list-item', listNode, {
      id: 1,
      title: 'alpha',
      type: 'video',
      picture: 'img1',
      viewers: 11
    })
    view.render.should.have.been.calledWith('media-list-item', listNode, {
      id: 2,
      title: 'bravo',
      type: 'offline channel',
      picture: 'img2',
      viewers: 12
    })
    view.render.should.have.been.calledWith('media-list-item', listNode, {
      id: 3,
      title: 'charlie',
      type: 'live channel',
      picture: 'img3',
      viewers: 17
    })
  })

  it('should publish @watchLater event if user click on watch later button', function () {
    var item = [
      { id: 1, title: 'alpha', type: 'recorded', viewers: 11, picture: 'img1' },
      { id: 2, title: 'bravo', type: 'channel', isLive: false, viewers: 12, picture: 'img2' },
      { id: 3, title: 'charlie', type: 'channel', isLive: true, viewers: 17, picture: 'img3' }
    ]
    var listNode = $('<div>')
    var model = new MediaListModel()
    var view = new MediaListView(model, {
      list: listNode
    })
    model.updateItems(item)
    var callback = sinon.spy()
    view.watchLater.subscribe(callback)
    listNode.append('<button class="watch-later" data-id="2">')
    listNode.find('.watch-later').click()
    callback.should.have.been.calledWith(item[1])
  })
})
