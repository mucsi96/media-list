$.define('MediaListModel', function (module) {
  'use strict'

  var Event = $.require('Event')
  var utils = $.require('utils')

  function MediaListModel () {
    this.listChanged = new Event()
  }

  MediaListModel.prototype.updateItems = function (items, watchLater) {
    this._items = [].concat(items)
    if (watchLater) {
      this._updateWatchLaterItems(watchLater)
    }
    this.listChanged.publish()
  }

  MediaListModel.prototype.updateWatchLater = function (watchLater) {
    this._updateWatchLaterItems(watchLater)
    this.listChanged.publish()
  }

  MediaListModel.prototype._updateWatchLaterItems = function (watchLater) {
    this._items.forEach(function (item) {
      if (utils.findById(watchLater, item.id)) {
        item.watchLater = true
      } else {
        delete item.watchLater
      }
    })
  }

  MediaListModel.prototype.setFilter = function (filter) {
    this._filter = filter
    this.listChanged.publish()
  }

  MediaListModel.prototype.setOrder = function (order) {
    this._order = order
    this.listChanged.publish()
  }

  MediaListModel.prototype.getItems = function () {
    var self = this
    var items = this._items

    if (this._filter) {
      items = this._items.filter(function (item) {
        return utils.match(item, self._filter || {})
      })
    }

    if (this._order) {
      items = items.sort(utils.compareByOrder(this._order))
    }

    return items
  }

  module.exports = MediaListModel
})
