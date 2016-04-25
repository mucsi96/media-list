$.define('OptionsModel', function (module) {
  var Event = $.require('Event')
  var refreshIntervals = [
    { title: '3s', interval: 3000 },
    { title: '10s', interval: 10000 },
    { title: '30s', interval: 30000 },
    { title: '60s', interval: 60000 }
  ]

  function OptionsModel () {
    this.refreshIntervalChanged = new Event()
  }

  OptionsModel.prototype.getRefreshIntervals = function () {
    return refreshIntervals
  }

  OptionsModel.prototype.setRefreshInterval = function (interval) {
    this._refreshInterval = interval
    this.refreshIntervalChanged.publish()
  }

  OptionsModel.prototype.getRefreshInterval = function () {
    return this._refreshInterval
  }

  module.exports = OptionsModel
})
