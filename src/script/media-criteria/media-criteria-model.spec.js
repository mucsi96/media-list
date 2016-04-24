/* global describe, it, sinon */
describe('MediaCriteriaModel', function () {
  var MediaCriteriaModel = $.require('MediaCriteriaModel')

  it('should store media filter criteria', function () {
    var model = new MediaCriteriaModel()
    model.setFilter({ type: 'recorded' })
    model.getFilter().should.deep.equal({ type: 'recorded' })
  })

  it('should publish @filterChanged event if filter criteria changes', function () {
    var model = new MediaCriteriaModel()
    var callback = sinon.spy()
    model.filterChanged.subscribe(callback)
    model.setFilter({ type: 'recorded' })
    callback.should.have.been.called
  })

  it('should store media order criteria', function () {
    var model = new MediaCriteriaModel()
    model.setOrder({ viewers: 'DESC' })
    model.getOrder().should.deep.equal({ viewers: 'DESC' })
  })

  it('should publish @orderChanged event if order changes', function () {
    var model = new MediaCriteriaModel()
    var callback = sinon.spy()
    model.orderChanged.subscribe(callback)
    model.setOrder({ viewers: 'DESC' })
    callback.should.have.been.called
  })
})
