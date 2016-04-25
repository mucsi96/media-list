$.define('MediaCriteriaController', function (module) {
  'use strict'

  function MediaCriteriaController (model, view) {
    this._model = model
    this._view = view

    model.setFilter({})
    model.setOrder({ id: 'ASC' })

    this.filterChanged = model.filterChanged
    this.orderChanged = model.orderChanged
  }

  MediaCriteriaController.prototype.getFilter = function () {
    return this._model.getFilter()
  }

  MediaCriteriaController.prototype.getOrder = function () {
    return this._model.getOrder()
  }

  module.exports = MediaCriteriaController
})
