(function (context) {
  'use strict'

  var MediaListModel = $.require('MediaListModel')
  var MediaListView = $.require('MediaListView')
  var MediaListController = $.require('MediaListController')
  var MediaCriteriaModel = $.require('MediaCriteriaModel')
  var MediaCriteriaView = $.require('MediaCriteriaView')
  var MediaCriteriaController = $.require('MediaCriteriaController')
  var OptionsModel = $.require('OptionsModel')
  var OptionsView = $.require('OptionsView')
  var OptionsController = $.require('OptionsController')
  var mediaListController
  var pollingInterval

  function fetch () {
    $.ajax({
      contentType: 'application/json; charset=utf-8',
      url: 'http://146.185.158.18/fake_api.php',
      dataType: 'jsonp',
      success: function (data) {
        mediaListController.updateItems(data)
      },
      error: function () {
        console.error('Cannot connect to server', arguments)
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

    optionsController.refreshIntervalChanged.subscribe(function () {
      pollingInterval = optionsController.getRefreshInterval()
    })

    fetch()
    poll()
  })
})(window)
