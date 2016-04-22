(function ($, App) {
  'use strict'

  App = App || {}
  App.MediaListView = function (model, elements) {
    this._model = model
    this._elements = elements
  }

  App.MediaListView.prototype.render = function () {
    var self = this;
    var items = this._model.getItems()
    this._elements.list.empty()
    items.forEach(function (item) {
      var node = $('<li>' + item.title + '</li>')
      self._elements.list.append(node)
    })
  }

})($, App);
