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
      class: 'active'
    })
    view.render.should.have.been.calledWith('media-criteria-filter', filterNode, {
      filterName: 'All',
      class: ''
    })
  })

  it('should update model on filter change', function () {
    var filterNode = $('<ul>')
    var orderNode = $('<ul>')
    var model = new MediaCriteriaModel()
    var view = new MediaCriteriaView(model, {
      filter: filterNode,
      order: orderNode
    })
    sinon.stub(view, 'render')
    model.setFilter({})
    filterNode.append('<li>').append('<li>')
    sinon.stub(model, 'getFilters').returns([{ data: {} }, { data: { type: 'channel', isLive: true } }])
    filterNode.find('li').eq(1).click()
    model.getFilter().should.deep.equal({ type: 'channel', isLive: true })
  })

  it('should render on media order change', function () {
    var filterNode = $('<ul>')
    var orderNode = $('<ul>')
    var model = new MediaCriteriaModel()
    var view = new MediaCriteriaView(model, {
      filter: filterNode,
      order: orderNode
    })
    sinon.stub(view, 'render')
    model.setOrder({ title: 'ASC' })
    view.render.should.have.been.calledWith('media-criteria-order', orderNode, {
      orderBy: 'Id',
      class: '',
      ascClass: '',
      descClass: ''
    })
    view.render.should.have.been.calledWith('media-criteria-order', orderNode, {
      orderBy: 'Title',
      class: 'active',
      ascClass: 'active',
      descClass: ''
    })
  })

  it('should update model on order change', function () {
    var filterNode = $('<ul>')
    var orderNode = $('<ul>')
    var model = new MediaCriteriaModel()
    var view = new MediaCriteriaView(model, {
      filter: filterNode,
      order: orderNode
    })
    sinon.stub(view, 'render')
    model.setOrder({ id: 'ASC' })
    orderNode.append('<li>').append('<li><span class="tag">ASC</span><span class="tag">DESC</span></li>')
    sinon.stub(model, 'getOrders').returns([{ key: 'id' }, { key: 'title' }])
    orderNode.find('li').eq(1).find('.tag').eq(1).click()
    model.getOrder().should.deep.equal({ title: 'DESC' })
  })
})
