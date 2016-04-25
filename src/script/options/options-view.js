$.define('OptionsView', function (module) {
  var View = $.require('View')

  function OptionsView (model, elements) {
    this._model = model
    this._elements = elements
    model.refreshIntervalChanged.subscribe(this._renderRefreshInterval.bind(this))
    elements.refreshInterval.on('click', '.tag', this._setRefreshInterval.bind(this))
  }

  OptionsView.prototype = new View()

  OptionsView.prototype._renderRefreshInterval = function () {
    var self = this
    var activeInterval = this._model.getRefreshInterval()
    var intervals = this._model.getRefreshIntervals()
    this._elements.refreshInterval.empty()
    intervals.forEach(function (interval) {
      self.render('media-refresh-interval', self._elements.refreshInterval, {
        title: interval.title,
        class: activeInterval === interval.interval ? 'active' : ''
      })
    })
  }

  OptionsView.prototype._setRefreshInterval = function (event) {
    var index = $(event.currentTarget).index()
    var intervals = this._model.getRefreshIntervals()
    this._model.setRefreshInterval(intervals[index].interval)
  }

  module.exports = OptionsView
})
