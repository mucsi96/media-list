$.define('View', function (module) {
  'use strict'

  function View () {
    this._listeners = []
  }

  View.prototype.render = function (templateId, element, data) {
    var html = $('#' + templateId + '-template').html()
    var regex = /\${(.*?)}/g
    var match = regex.exec(html)
    var value
    while (match) {
      value = data[match[1]]
      value = typeof value !== 'undefined' ? value : ''
      html = html.replace(match[0], value)
      match = regex.exec(html)
    }
    element.append(html)
  }

  module.exports = View
})
