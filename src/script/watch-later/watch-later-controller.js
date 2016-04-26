$.define('WatchLaterController', function (module) {
  'use strict'

  function WatchLaterController (model, view) {
    this._model = model
    this._view = view
    this.removeFromWatchLater = view.removeFromWatchLater
    this.removeFromWatchLater.subscribe(this._removeItem.bind(this))
  }

  WatchLaterController.prototype.addItem = function (item) {
    this._model.addItem(item)
  }

  WatchLaterController.prototype._removeItem = function (item) {
    this._model.removeItem(item)
  }

  WatchLaterController.prototype.updateItems = function (items) {
    this._model.updateItems(items)
  }

  WatchLaterController.prototype.getItems = function () {
    return this._model.getItems()
  }

  module.exports = WatchLaterController
})
