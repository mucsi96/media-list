'use strict'

var App = App || {}
App.Event = function () {
  this._listeners = [];
}

App.Event.prototype.subscribe = function(listener) {
  this._listeners.push(listener);
}

App.Event.prototype.publish = function() {
  this._listeners.forEach(function(listener) {
    listener()
  })
}
