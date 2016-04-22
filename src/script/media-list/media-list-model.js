$.define('MediaListModel', function (module) {
  'use strict'

  var Event = $.require('Event')

  function MediaListModel () {
    this.listChanged = new Event()
  }

  MediaListModel.prototype.updateItems = function (items) {
    this._items = [].concat(items)
    this.listChanged.publish()
  }

  MediaListModel.prototype.getItems = function () {
    return [].concat(this._items)
  }

  module.exports = MediaListModel
})
