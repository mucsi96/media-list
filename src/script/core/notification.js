$.define('Notification', function (module) {
  function Notification (elements, timeout) {
    this._elements = elements
    this._timeout = timeout
  }

  Notification.prototype.notify = function (message) {
    var self = this
    this._elements.notification
      .text(message)
      .addClass('active')

    setTimeout(function () {
      self._elements.notification
        .removeClass('active')
    }, self._timeout)
  }

  module.exports = Notification
})
