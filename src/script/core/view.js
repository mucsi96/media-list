$.define('View', function (module) {
  'use strict'

  function View () {
    this._listeners = []
  }

  View.prototype.render = function (templateId, element, data) {
    var template = $('#' + templateId + '-template').html()
    var html = template
    var regex = /\${(.*?)}/g
    var match = regex.exec(template)
    var value
    while (match) {
      value = data[match[1]]
      value = typeof value !== 'undefined' ? value : ''
      html = html.replace(match[0], value)
      match = regex.exec(template)
    }
    element.append(html)
  }

  module.exports = View
})
