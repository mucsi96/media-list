$.define('MediaCriteriaModel', function (module) {
  var Event = $.require('Event')

  function MediaCriteriaModel () {
    this._filter = {}
    this._sorting = { id: 'ASC' }
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

  MediaCriteriaModel.prototype.setSorting = function (sorting) {
    this._sorting = sorting
    this.sortingChanged.publish()
  }

  MediaCriteriaModel.prototype.getSorting = function () {
    return this._sorting
  }

  module.exports = MediaCriteriaModel
})
