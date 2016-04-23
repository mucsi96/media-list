/* global describe, it, sinon */
describe('MediaCriteriaView', function () {
  var MediaCriteriaModel = $.require('MediaCriteriaModel')
  var MediaCriteriaView = $.require('MediaCriteriaView')

  it('should render on media filter criteria change', function () {
    var criteriaNode = $('<div>')
    var model = new MediaCriteriaModel()
    var view = new MediaCriteriaView(model, {
      criteria: criteriaNode
    })
    sinon.stub(view, 'render')
    model.setFilter({ type: 'recorded' })
    view.render.should.have.been.calledWith('media-criteria', criteriaNode)
  })
})
