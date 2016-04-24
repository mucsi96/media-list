$.define('MediaCriteriaView', function (module) {
  var View = $.require('View')

  function MediaCriteriaView (model, elements) {
    this._model = model
    this._elements = elements
    model.filterChanged.subscribe(this._renderFilter.bind(this))
    model.sortingChanged.subscribe(this._renderSorting.bind(this))
    elements.filter.on('click', 'li', this._setFilter.bind(this))
  }

  MediaCriteriaView.prototype = new View()

  MediaCriteriaView.prototype._setFilter = function (event) {
    var filters = this._model.getFilters()
    var index = $(event.target).index()
    this._model.setFilter(filters[index].data)
  }

  MediaCriteriaView.prototype._renderFilter = function () {
    var self = this
    var selectedFilter = JSON.stringify(this._model.getFilter())
    this._elements.filter.empty()
    this._model.getFilters().forEach(function (filter, index) {
      self.render('media-criteria-filter', self._elements.filter, {
        filterName: filter.name,
        class: selectedFilter === JSON.stringify(filter.data) ? 'selected' : ''
      })
    })
  }

  MediaCriteriaView.prototype._renderSorting = function () {
    this._elements.sort.empty()
    // this.render('media-criteria', this._elements.criteria)
  }

  module.exports = MediaCriteriaView
})
