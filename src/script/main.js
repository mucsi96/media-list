(function (context) {
  'use strict'

  var mediaListController

  context.updateMediaList = function (data) {
    mediaListController.updateItems(data)
  }

  $(function () {
    var MediaListModel = $.require('MediaListModel')
    var MediaListView = $.require('MediaListView')
    var MediaListController = $.require('MediaListController')

    var MediaCriteriaModel = $.require('MediaCriteriaModel')
    var MediaCriteriaView = $.require('MediaCriteriaView')

    var mediaListModel = new MediaListModel()
    var mediaListView = new MediaListView(mediaListModel, {
      list: $('#media-list')
    })
    mediaListController = new MediaListController(mediaListModel, mediaListView)

    var mediaCriteriaModel = new MediaCriteriaModel()
    var mediaCriteriaView = new MediaCriteriaView(mediaCriteriaModel, {
      criteria: $('#media-criteria')
    })

    mediaCriteriaModel.setFilter({})
    mediaCriteriaModel.setSorting({ id: 'ASC' })

    $.ajax({
      url: 'http://146.185.158.18/fake_api.php',
      dataType: 'jsonp',
      jsonpCallback: 'updateMediaList',
      error: function () {
        console.error('Cannot connect to server')
      }
    })
  })
})(window)
