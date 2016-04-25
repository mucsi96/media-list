$.define('MediaCriteriaView', function (module) {
  var View = $.require('View')
  var utils = $.require('utils')

  function MediaCriteriaView (model, elements) {
    this._model = model
    this._elements = elements
    model.filterChanged.subscribe(this._renderFilter.bind(this))
    model.orderChanged.subscribe(this._renderOrder.bind(this))
    elements.filter.on('click', 'li', this._setFilter.bind(this))
    elements.order.on('click', '.tag', this._setOrder.bind(this))
  }

  MediaCriteriaView.prototype = new View()

  MediaCriteriaView.prototype._setFilter = function (event) {
    var filters = this._model.getFilters()
    var index = $(event.currentTarget).index()
    this._model.setFilter(filters[index].data)
  }

  MediaCriteriaView.prototype._setOrder = function (event) {
    var orders = this._model.getOrders()
    var index = $(event.currentTarget).closest('li').index()
    var order = {}
    order[orders[index].key] = $(event.currentTarget).index('.tag') % 2 === 0 ? 'ASC' : 'DESC'
    this._model.setOrder(order)
  }

  MediaCriteriaView.prototype._renderFilter = function () {
    var self = this
    var activeFilter = this._model.getFilter()
    this._elements.filter.empty()
    this._model.getFilters().forEach(function (filter) {
      self.render('media-criteria-filter', self._elements.filter, {
        filterName: filter.name,
        class: utils.objectEquals(activeFilter, filter.data) ? 'active' : ''
      })
    })
  }

  MediaCriteriaView.prototype._renderOrder = function () {
    var self = this
    var activeOrder = this._model.getOrder()
    this._elements.order.empty()
    this._model.getOrders().forEach(function (order) {
      self.render('media-criteria-order', self._elements.order, {
        orderBy: order.name,
        class: activeOrder[order.key] ? 'active' : '',
        ascClass: activeOrder[order.key] === 'ASC' ? 'active' : '',
        descClass: activeOrder[order.key] === 'DESC' ? 'active' : ''
      })
    })
  }

  module.exports = MediaCriteriaView
})
