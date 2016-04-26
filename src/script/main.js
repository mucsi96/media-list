(function (context) {
  'use strict'

  var MediaListModel = $.require('MediaListModel')
  var MediaListView = $.require('MediaListView')
  var MediaListController = $.require('MediaListController')
  var MediaCriteriaModel = $.require('MediaCriteriaModel')
  var MediaCriteriaView = $.require('MediaCriteriaView')
  var MediaCriteriaController = $.require('MediaCriteriaController')
  var WatchLaterModel = $.require('WatchLaterModel')
  var WatchLaterView = $.require('WatchLaterView')
  var WatchLaterController = $.require('WatchLaterController')
  var OptionsModel = $.require('OptionsModel')
  var OptionsView = $.require('OptionsView')
  var OptionsController = $.require('OptionsController')
  var Notification = $.require('Notification')
  var tabs = $.require('tabs')
  var mediaListController
  var watchLaterController
  var pollingInterval
  var notification

  function fetch () {
    $.ajax({
      contentType: 'application/json; charset=utf-8',
      url: 'http://146.185.158.18/fake_api.php',
      dataType: 'jsonp',
      success: function (items) {
        mediaListController.updateItems(items, watchLaterController.getItems())
        watchLaterController.updateItems(items)
      },
      error: function () {
        notification.notify('Cannot connect to server')
      }
    })
  }

  function poll () {
    setTimeout(function () {
      fetch()
      poll()
    }, pollingInterval)
  }

  $(function () {
    var mediaListModel = new MediaListModel()
    var mediaListView = new MediaListView(mediaListModel, {
      list: $('#media-list')
    })
    mediaListController = new MediaListController(mediaListModel, mediaListView)

    var watchLaterModel = new WatchLaterModel()
    var watchLaterView = new WatchLaterView(watchLaterModel, {
      list: $('#watch-later')
    })
    watchLaterController = new WatchLaterController(watchLaterModel, watchLaterView)

    var mediaCriteriaModel = new MediaCriteriaModel()
    var mediaCriteriaView = new MediaCriteriaView(mediaCriteriaModel, {
      filter: $('#media-criteria-filter'),
      order: $('#media-criteria-sort')
    })
    var mediaCriteriaController = new MediaCriteriaController(mediaCriteriaModel, mediaCriteriaView)

    var optionsModel = new OptionsModel()
    var optionsView = new OptionsView(optionsModel, {
      refreshInterval: $('#refresh-interval')
    })
    var optionsController = new OptionsController(optionsModel, optionsView)
    pollingInterval = optionsController.getRefreshInterval()

    mediaCriteriaController.filterChanged.subscribe(function () {
      mediaListController.setFilter(mediaCriteriaController.getFilter())
    })

    mediaCriteriaController.orderChanged.subscribe(function () {
      mediaListController.setOrder(mediaCriteriaController.getOrder())
    })

    mediaListController.watchLater.subscribe(function (item) {
      watchLaterController.addItem(item)
      mediaListController.updateWatchLater(watchLaterController.getItems())
    })

    watchLaterController.removeFromWatchLater.subscribe(function (item) {
      mediaListController.updateWatchLater(watchLaterController.getItems())
    })

    optionsController.refreshIntervalChanged.subscribe(function () {
      pollingInterval = optionsController.getRefreshInterval()
    })

    tabs({ tabs: $('.tabs') })
    notification = new Notification({ notification: $('#notification') }, 3000)

    fetch()
    poll()
  })
})(window)
