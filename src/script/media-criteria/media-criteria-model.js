$.define('MediaCriteriaModel', function (module) {
  var Event = $.require('Event')

  function MediaCriteriaModel () {
    this.criteriaChanged = new Event()
  }

  MediaCriteriaModel.prototype.setFilter = function (filter) {
    this._filter = filter
    this.criteriaChanged.publish()
  }

  MediaCriteriaModel.prototype.getFilter = function () {
    return this._filter
  }

  MediaCriteriaModel.prototype.setSorting = function (sorting) {
    this._sorting = sorting
    this.criteriaChanged.publish()
  }

  MediaCriteriaModel.prototype.getSorting = function () {
    return this._sorting
  }

  module.exports = MediaCriteriaModel
})
