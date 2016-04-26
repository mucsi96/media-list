/* global localStorage */
$.define('WatchLaterModel', function (module) {
  'use strict'

  var Event = $.require('Event')

  function WatchLaterModel () {
    this.listChanged = new Event()
  }

  WatchLaterModel.prototype.addItem = function (item) {
    var items = this.getItems()
    item.watchLater = true
    items.push(item)
    localStorage.setItem('watchLater', JSON.stringify(items))
    this.listChanged.publish()
  }

  WatchLaterModel.prototype.removeItem = function (itemToRemove) {
    var items = this.getItems()
    var index
    items.every(function (item, idx) {
      if (itemToRemove.id === item.id) {
        index = idx
        return false
      }
      return true
    })
    items.splice(index, 1)
    localStorage.setItem('watchLater', JSON.stringify(items))
    this.listChanged.publish()
  }

  WatchLaterModel.prototype.updateItems = function (items) {
    var newItems = this.getItems().reduce(function (result, item) {
      var match = items.find(function (newItem) {
        return newItem.id === item.id
      })

      if (match) {
        result.push(match)
      }
      return result
    }, [])
    localStorage.setItem('watchLater', JSON.stringify(newItems))
    this.listChanged.publish()
  }

  WatchLaterModel.prototype.getItems = function () {
    return JSON.parse(localStorage.getItem('watchLater')) || []
  }

  module.exports = WatchLaterModel
})
