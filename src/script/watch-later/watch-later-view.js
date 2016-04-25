$.define('WatchLaterView', function (module) {
  'use strict'

  var MediaListView = $.require('MediaListView')

  function WatchLaterView (model, elements) {
    MediaListView.call(this, model, elements)
  }

  WatchLaterView.prototype = new MediaListView()

  module.exports = WatchLaterView
})
