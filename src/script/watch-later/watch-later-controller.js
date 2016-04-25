$.define('WatchLaterController', function (module) {
  'use strict'

  function WatchLaterController (model, view) {
    this._model = model
    this._view = view
  }

  WatchLaterController.prototype.addItem = function (item) {
    this._model.addItem(item)
  }

  WatchLaterController.prototype.updateItems = function (items) {
    this._model.updateItems(items)
  }

  module.exports = WatchLaterController
})
