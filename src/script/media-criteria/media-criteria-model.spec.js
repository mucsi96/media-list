/* global describe, it, sinon */
describe('MediaCriteriaModel', function () {
  var MediaCriteriaModel = $.require('MediaCriteriaModel')

  it('should set empty filter as default', function () {
    var model = new MediaCriteriaModel()
    model.getFilter().should.deep.equal({})
  })

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

  it('should set ascending order by id by default', function () {
    var model = new MediaCriteriaModel()
    model.getSorting().should.deep.equal({ id: 'ASC' })
  })

  it('should store media sorting criteria', function () {
    var model = new MediaCriteriaModel()
    model.setSorting({ viewers: 'DESC' })
    model.getSorting().should.deep.equal({ viewers: 'DESC' })
  })

  it('should publish @sortingChanged event if sorting criteria changes', function () {
    var model = new MediaCriteriaModel()
    var callback = sinon.spy()
    model.sortingChanged.subscribe(callback)
    model.setSorting({ viewers: 'DESC' })
    callback.should.have.been.called
  })
})
