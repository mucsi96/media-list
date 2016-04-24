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
      filterName: 'Video only',
      class: 'selected'
    })
    view.render.should.have.been.calledWith('media-criteria-filter', filterNode, {
      filterName: 'All',
      class: ''
    })
  })

  it('should update model on filter change', function () {
    var filterNode = $('<ul><li></li><li></li></ul>')
    var orderNode = $('<ul>')
    var model = new MediaCriteriaModel()
    var view = new MediaCriteriaView(model, {
      filter: filterNode,
      order: orderNode
    })
    sinon.stub(model, 'getFilters').returns([{}, { data: { type: 'channel', isLive: true } }])
    filterNode.find('li').eq(1).click()
    model.getFilter().should.deep.equal({ type: 'channel', isLive: true })
  })
})
