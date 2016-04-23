$.define('Event', function (module) {
  'use strict'

  function Event () {
    this._listeners = []
  }

  Event.prototype.subscribe = function (listener) {
    this._listeners.push(listener)
  }

  Event.prototype.publish = function () {
    this._listeners.forEach(function (listener) {
      listener()
    })
  }

  module.exports = Event
})
