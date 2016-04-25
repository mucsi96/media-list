$.define('OptionsController', function (module) {
  'use strict'

  function OptionsController (model, view) {
    this._model = model
    this._view = view
    this.refreshIntervalChanged = model.refreshIntervalChanged
    model.setRefreshInterval(10000)
  }

  OptionsController.prototype.getRefreshInterval = function () {
    return this._model.getRefreshInterval()
  }

  module.exports = OptionsController
})
