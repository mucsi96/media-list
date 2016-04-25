$.define('MediaListView', function (module) {
  'use strict'

  var View = $.require('View')

  function MediaListView (model, elements) {
    this._model = model
    this._elements = elements
    model.listChanged.subscribe(this._renderList.bind(this))
  }

  MediaListView.prototype = new View()

  MediaListView.prototype._getItemType = function (item) {
    var itemType

    if (item.type === 'recorded') {
      itemType = 'video'
    }

    if (item.type === 'channel') {
      if (item.isLive) {
        itemType = 'live channel'
      } else {
        itemType = 'offline channel'
      }
    }

    return itemType
  }

  MediaListView.prototype._renderList = function () {
    var self = this
    var items = this._model.getItems()
    this._elements.list.empty()
    items.forEach(function (item) {
      var itemType = self._getItemType(item)
      if (item.title && itemType) {
        self.render('media-list-item', self._elements.list, {
          title: item.title,
          type: itemType,
          picture: item.picture,
          viewers: item.viewers
        })
      }
    })
    this._elements.list.find('img[src=""]').remove()
  }

  module.exports = MediaListView
})
