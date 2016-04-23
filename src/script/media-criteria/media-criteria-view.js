$.define('MediaCriteriaView', function (module) {
  var View = $.require('View')

  function MediaCriteriaView (model, elements) {
    this._model = model
    this._elements = elements
    model.criteriaChanged.subscribe(this._render.bind(this))
  }

  MediaCriteriaView.prototype = new View()

  MediaCriteriaView.prototype._render = function () {
    this._elements.criteria.empty()
    this.render('media-criteria', this._elements.criteria)
  }

  module.exports = MediaCriteriaView
})
