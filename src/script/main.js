(function (window, $, App) {
  'use strict'

  var mediaListController;

  window.updateMediaList = function (data) {
    mediaListController.updateItems(data)
  }

  $(function(){
    var mediaListModel = new App.MediaListModel()
    var mediaListView = new App.MediaListView(mediaListModel, {
      list: $('#media-list')
    })
    mediaListController = new App.MediaListController(mediaListModel, mediaListView)

    $.ajax({
      url: 'http://146.185.158.18/fake_api.php',
      dataType: 'jsonp',
      jsonpCallback: 'updateMediaList',
      error: function() {
        console.error('Cannot connect to server')
      }
    })
  })

})(window, $, App);
