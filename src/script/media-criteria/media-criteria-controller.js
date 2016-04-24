$.define('MediaCriteriaController', function (module) {
  'use strict'

  var Event = $.require('Event')

  function MediaCriteriaController (model, view) {
    this._model = model
    this._view = view

    model.setFilter({})
    model.setSorting({ id: 'ASC' })

    this.criteriaChanged = new Event()
    model.filterChanged.subscribe(this._publishCriteriaChanged.bind(this))
  }

  MediaCriteriaController.prototype._publishCriteriaChanged = function () {
    this.criteriaChanged.publish()
  }

  module.exports = MediaCriteriaController
})
