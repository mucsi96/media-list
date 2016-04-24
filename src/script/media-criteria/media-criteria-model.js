$.define('MediaCriteriaModel', function (module) {
  var Event = $.require('Event')
  var filters = [
    { name: 'All', data: {} },
    { name: 'Live channel only', data: { type: 'channel', isLive: true } },
    { name: 'Offline channel only', data: { type: 'channel', isLive: false } },
    { name: 'Video only', data: { type: 'recorded' } }
  ]
  var orders = [
    { name: 'Id', key: 'id' },
    { name: 'Title', key: 'title' },
    { name: 'Description', key: 'description' },
    { name: 'Viewers', key: 'viewers' }
  ]

  function MediaCriteriaModel () {
    this.filterChanged = new Event()
    this.orderChanged = new Event()
  }

  MediaCriteriaModel.prototype.getFilters = function () {
    return filters
  }

  MediaCriteriaModel.prototype.setFilter = function (filter) {
    this._filter = filter
    this.filterChanged.publish()
  }

  MediaCriteriaModel.prototype.getFilter = function () {
    return this._filter
  }

  MediaCriteriaModel.prototype.getOrders = function () {
    return orders
  }

  MediaCriteriaModel.prototype.setOrder = function (order) {
    this._order = order
    this.orderChanged.publish()
  }

  MediaCriteriaModel.prototype.getOrder = function () {
    return this._order
  }

  module.exports = MediaCriteriaModel
})
