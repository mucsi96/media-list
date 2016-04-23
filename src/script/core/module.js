(function (exports) {
  'use strict'

  var modules = {}

  function define (moduleName, definitionFuction) {
    var module = { exports: {} }
    definitionFuction(module)
    modules[moduleName] = module.exports
  }

  function require (moduleName) {
    return modules[moduleName]
  }

  exports.define = define
  exports.require = require
})($)
