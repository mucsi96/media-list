$.define('utils', function (module) {
  function match (a, b) {
    return Object.keys(b).every(function (key) {
      return b[key] === a[key]
    })
  }

  function objectEquals (a, b) {
    return match(a, b) && match(b, a)
  }

  function compareByOrder (order) {
    var key = Object.keys(order)[0]
    var coefficient = order[key] === 'ASC' ? 1 : -1
    return function (a, b) {
      if (a[key] > b[key]) {
        return coefficient
      }
      if (a[key] < b[key]) {
        return -coefficient
      }
      return 0
    }
  }

  function findById (array, id) {
    return array.find(byId(id))
  }

  function byId (id) {
    return function (item) {
      return item.id === id
    }
  }

  module.exports = {
    match: match,
    objectEquals: objectEquals,
    compareByOrder: compareByOrder,
    findById: findById
  }
})
