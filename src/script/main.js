(function (window, $, App) {
  'use strict'

  var mediaListModel
  var mediaListView

  window.updateMediaList = function (data) {
    mediaListModel.updateItems(data)
    mediaListView.render()
  }


  $(function(){
    mediaListModel = new App.MediaListModel()
    mediaListView = new App.MediaListView(mediaListModel, {
      list: $('#media-list')
    })

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
