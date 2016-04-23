$.define('MediaListController', function (module) {
  'use strict'

  function MediaListController (model, view) {
    this._model = model
    this._view = view
  }

  MediaListController.prototype.updateItems = function (items) {
    this._model.updateItems(items)
  }

  module.exports = MediaListController
})
