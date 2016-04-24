/* global describe, it, sinon */
describe('MediaCriteriaController', function () {
  var MediaCriteriaModel = $.require('MediaCriteriaModel')
  var MediaCriteriaView = $.require('MediaCriteriaView')
  var MediaCriteriaController = $.require('MediaCriteriaController')

  it('should publish @filterChanged if filter criteria changes', function () {
    var filterNode = $('<ul>')
    var orderNode = $('<ul>')
    var model = new MediaCriteriaModel()
    var view = new MediaCriteriaView(model, {
      filter: filterNode,
      order: orderNode
    })
    var controller = new MediaCriteriaController(model, view)
    var callback = sinon.spy()
    controller.filterChanged.subscribe(callback)
    model.setFilter({})
    callback.should.have.been.called
  })

  it('should provide the active filter', function () {
    var filterNode = $('<ul>')
    var orderNode = $('<ul>')
    var model = new MediaCriteriaModel()
    var view = new MediaCriteriaView(model, {
      filter: filterNode,
      order: orderNode
    })
    var controller = new MediaCriteriaController(model, view)
    model.setFilter({ id: 1 })
    controller.getFilter().should.deep.equal({ id: 1 })
  })
})
