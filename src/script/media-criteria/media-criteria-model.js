$.define('MediaCriteriaModel', function (module) {
  var Event = $.require('Event')
  var filters = [
    { name: 'All', data: JSON.stringify({}) },
    { name: 'Live channel only', data: JSON.stringify({ type: 'channel', isLive: true }) },
    { name: 'Offline channel only', data: JSON.stringify({ type: 'channel', isLive: false }) },
    { name: 'Video only', data: JSON.stringify({ type: 'recorded' }) }
  ]

  function MediaCriteriaModel () {
    this.filterChanged = new Event()
    this.sortingChanged = new Event()
  }

  MediaCriteriaModel.prototype.setFilter = function (filter) {
    this._filter = filter
    this.filterChanged.publish()
  }

  MediaCriteriaModel.prototype.getFilter = function () {
    return this._filter
  }

  MediaCriteriaModel.prototype.getFilters = function () {
    return filters
  }

  MediaCriteriaModel.prototype.setSorting = function (sorting) {
    this._sorting = sorting
    this.sortingChanged.publish()
  }

  MediaCriteriaModel.prototype.getSorting = function () {
    return this._sorting
  }

  module.exports = MediaCriteriaModel
})
