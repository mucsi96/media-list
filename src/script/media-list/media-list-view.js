(function ($, App) {
  'use strict'

  App = App || {}
  App.MediaListView = function (model, elements) {
    this._model = model
    this._elements = elements
    model.listChanged.subscribe(this._render.bind(this))
  }

  App.MediaListView.prototype._render = function () {
    var self = this;
    var items = this._model.getItems()
    this._elements.list.empty()
    items.forEach(function (item) {
      var node = $('<li>').text(item.title)
      self._elements.list.append(node)
    })
  }

})($, App);
