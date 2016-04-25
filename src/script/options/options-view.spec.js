/* global describe, it, sinon */
describe('OptionsView', function () {
  var OptionsModel = $.require('OptionsModel')
  var OptionsView = $.require('OptionsView')

  it('should render on refresh interval change', function () {
    var refreshIntervalNode = $('<ul>')
    var model = new OptionsModel()
    var view = new OptionsView(model, {
      refreshInterval: refreshIntervalNode
    })
    sinon.stub(view, 'render')
    model.setRefreshInterval(3000)
    view.render.should.have.been.calledWith('media-refresh-interval', refreshIntervalNode, {
      title: '3s',
      class: 'active'
    })
    view.render.should.have.been.calledWith('media-refresh-interval', refreshIntervalNode, {
      title: '10s',
      class: ''
    })
  })

  it('should update model on refresh interval change', function () {
    var refreshIntervalNode = $('<ul>')
    var model = new OptionsModel()
    var view = new OptionsView(model, {
      refreshInterval: refreshIntervalNode
    })
    sinon.stub(view, 'render')
    model.setRefreshInterval(1000)
    refreshIntervalNode.append('<li class="tag">').append('<li class="tag">')
    sinon.stub(model, 'getRefreshIntervals').returns([{}, { title: '2s', interval: 2000 }])
    refreshIntervalNode.find('.tag').eq(1).click()
    model.getRefreshInterval().should.deep.equal(2000)
  })
})
