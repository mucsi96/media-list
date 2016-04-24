/* global describe, it, sinon */
describe('MediaCriteriaController', function () {
  var MediaCriteriaModel = $.require('MediaCriteriaModel')
  var MediaCriteriaView = $.require('MediaCriteriaView')
  var MediaCriteriaController = $.require('MediaCriteriaController')

  it('should publish @criteriaChanged if filter criteria changes', function () {
    var filterNode = $('<ul>')
    var sortNode = $('<ul>')
    var model = new MediaCriteriaModel()
    var view = new MediaCriteriaView(model, {
      filter: filterNode,
      sort: sortNode
    })
    var controller = new MediaCriteriaController(model, view)
    var callback = sinon.spy()
    controller.criteriaChanged.subscribe(callback)
    model.setFilter({})
    callback.should.have.been.called
  })
})
