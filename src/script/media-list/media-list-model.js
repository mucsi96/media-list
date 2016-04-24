$.define('MediaListModel', function (module) {
  'use strict'

  var Event = $.require('Event')
  var utils = $.require('utils')

  function MediaListModel () {
    this.listChanged = new Event()
  }

  MediaListModel.prototype.updateItems = function (items) {
    this._items = [].concat(items)
    this.listChanged.publish()
  }

  MediaListModel.prototype.setFilter = function (filter) {
    this._filter = filter
    this.listChanged.publish()
  }

  MediaListModel.prototype.getItems = function () {
    var self = this
    return this._items.filter(function (item) {
      return utils.match(item, self._filter || {})
    })
  }

  module.exports = MediaListModel
})
