'use strict'

function CountableSet(num, done) {
  this.num = num || 1
  this.done = done || function() {}
  this.finished = false
  this.results = []

  return this.count.bind(this)
}

CountableSet.prototype.count = function count(err) {
  var results = Array.prototype.slice.call(arguments, 0)

  this.num--
  this.results.push(results)

  if (this.finished) {
    return false
  }

  if (err) {
    this.finished = true
    return this.done.apply(this, results)
  }

  if (this.num === 0) {
    this.finished = true
    return this.done.apply(this, [null, this.results])
  }
}

module.exports = function(num, done) {
  return new CountableSet(num, done)
}
