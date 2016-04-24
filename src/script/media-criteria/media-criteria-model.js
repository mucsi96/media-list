$.define('MediaCriteriaModel', function (module) {
  var Event = $.require('Event')
  var filters = [
    { name: 'All', data: {} },
    { name: 'Live channel only', data: { type: 'channel', isLive: true } },
    { name: 'Offline channel only', data: { type: 'channel', isLive: false } },
    { name: 'Video only', data: { type: 'recorded' } }
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
