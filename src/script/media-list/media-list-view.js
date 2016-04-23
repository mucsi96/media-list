$.define('MediaListView', function (module) {
  'use strict'

  var View = $.require('View')

  function MediaListView (model, elements, render) {
    this._model = model
    this._elements = elements
    this._render = render
    model.listChanged.subscribe(this._renderList.bind(this))
  }

  MediaListView.prototype = new View()

  MediaListView.prototype._renderList = function () {
    var self = this
    var items = this._model.getItems()
    this._elements.list.empty()
    items.forEach(function (item) {
      self.render('media-list-item', self._elements.list, item)
    })
  }

  module.exports = MediaListView
})
