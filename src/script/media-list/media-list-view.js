$.define('MediaListView', function (module) {
  'use strict'

  var View = $.require('View')
  var Event = $.require('Event')
  var utils = $.require('utils')

  function MediaListView (model, elements) {
    this._model = model
    this._elements = elements

    this.watchLater = new Event()
    this.removeFromWatchLater = new Event()

    if (model) {
      model.listChanged.subscribe(this._renderList.bind(this))
    }

    if (elements) {
      elements.list.on('click', '.watch-later', this._publishWatchLater.bind(this))
      elements.list.on('click', '.remove', this._publishRemoveFromWatchLater.bind(this))
    }
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
          id: item.id,
          title: item.title,
          type: itemType,
          picture: item.picture,
          viewers: item.viewers,
          overlayClass: item.watchLater ? 'can-remove-from-watch-later' : 'can-add-to-watch-later'
        })
      }
    })
    this._elements.list.find('img[src=""]').remove()
  }

  MediaListView.prototype._publishWatchLater = function (event) {
    var items = this._model.getItems()
    var id = $(event.currentTarget).data('id')
    var selectedItem = utils.findById(items, id)
    this.watchLater.publish(selectedItem)
  }

  MediaListView.prototype._publishRemoveFromWatchLater = function (event) {
    var items = this._model.getItems()
    var id = $(event.currentTarget).data('id')
    var selectedItem = items.find(function (item) {
      return id === item.id
    })
    this.removeFromWatchLater.publish(selectedItem)
  }

  module.exports = MediaListView
})
