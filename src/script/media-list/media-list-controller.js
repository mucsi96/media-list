$.define('MediaListController', function (module) {
  'use strict'

  function MediaListController (model, view) {
    this._model = model
    this._view = view
    this.watchLater = view.watchLater
  }

  MediaListController.prototype.updateItems = function (items, watchLater) {
    this._model.updateItems(items, watchLater)
  }

  MediaListController.prototype.updateWatchLater = function (watchLater) {
    this._model.updateWatchLater(watchLater)
  }

  MediaListController.prototype.setFilter = function (filter) {
    this._model.setFilter(filter)
  }

  MediaListController.prototype.setOrder = function (order) {
    this._model.setOrder(order)
  }

  module.exports = MediaListController
})
