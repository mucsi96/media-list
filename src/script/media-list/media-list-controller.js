(function (App) {
  'use strict'

  App = App || {}
  App.MediaListController = function (model, view) {
    this._model = model
    this._view = view
  }

  App.MediaListController.prototype.updateItems = function (items) {
    this._model.updateItems(items)
  }

})(App);
