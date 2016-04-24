/* global describe, it, sinon */
describe('MediaCriteriaView', function () {
  var MediaCriteriaModel = $.require('MediaCriteriaModel')
  var MediaCriteriaView = $.require('MediaCriteriaView')

  it('should render on media filter criteria change', function () {
    var filterNode = $('<ul>')
    var orderNode = $('<ul>')
    var model = new MediaCriteriaModel()
    var view = new MediaCriteriaView(model, {
      filter: filterNode,
      order: orderNode
    })
    sinon.stub(view, 'render')
    model.setFilter({ type: 'recorded' })
    view.render.should.have.been.calledWith('media-criteria-filter', filterNode, {
      filter: JSON.stringify({ type: 'recorded' }),
      filterName: 'Video only',
      class: 'selected'
    })
    view.render.should.have.been.calledWith('media-criteria-filter', filterNode, {
      filter: JSON.stringify({}),
      filterName: 'All',
      class: ''
    })
  })
})
