var noop = function() {}

function CountableSet(num, done) {
  this.num = num || 1
  this.done = done || noop
  this.finished = false

  return this.count.bind(this)
}

CountableSet.prototype.count = function count(err) {
  var args = Array.prototype.slice.call(arguments, 0)

  this.num--

  if (this.finished) {
    return false
  }

  if (err) {
    this.finished = true
    return this.done.apply(this, args)
  }

  if (this.num === 0) {
    this.finished = true
    return this.done.apply(this, args)
  }
}

module.exports = function(num, done) {
  return new CountableSet(num, done)
}
