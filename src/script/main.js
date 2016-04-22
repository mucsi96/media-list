(function ($, window, App) {
  'use strict'

  var mediaListModel
  var mediaListView

  window.displayMediaList = function (data) {
    console.log(data)
    mediaListModel.updateItems(data)
    mediaListView.render()
  }


  Zepto(function($){
    mediaListModel = new App.MediaListModel()
    mediaListView = new App.MediaListView(mediaListModel, {
      list: $('#media-list')
    })

    $.ajax({
      url: 'http://146.185.158.18/fake_api.php',
      dataType: 'jsonp',
      jsonpCallback: 'displayMediaList',
      error: function() {
        console.error('Cannot connect to server')
      }
    })
  })



})(Zepto, window, App);
