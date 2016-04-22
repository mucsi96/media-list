(function (App) {
  'use strict'

  App = App || {}
  App.MediaListModel = function () {
    this.listChanged = new App.Event()
  }

  App.MediaListModel.prototype.updateItems = function (items) {
    this._items = [].concat(items)
    this.listChanged.publish()
  }

  App.MediaListModel.prototype.getItems = function () {
    return [].concat(this._items)
  }


})(App);
