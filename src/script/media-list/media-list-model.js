(function (App) {
  'use strict'

  App = App || {}
  App.MediaListModel = function () {

  }

  App.MediaListModel.prototype.updateItems = function (items) {
    this._items = [].concat(items)
  }

  App.MediaListModel.prototype.getItems = function () {
    return [].concat(this._items)
  }


})(App);
