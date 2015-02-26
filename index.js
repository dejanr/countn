'use strict'

function CountableSet(num, done) {
  this.num = num || 1
  this.done = done || function() {}
  this.finished = false
  this.args = []

  return this.count.bind(this)
}

CountableSet.prototype.count = function count(name) {
  var self = this

  name = name || ''

  return function(err) {
    var args = Array.prototype.slice.call(arguments, 0)

    self.num--
    self.args.push([name].concat(args))

    if (self.finished) {
      return false
    }

    if (err) {
      self.finished = true
      return self.done.apply(self, args)
    }

    if (self.num === 0) {
      self.finished = true
      return self.done.apply(self, [null, self.format(self.args)])
    }
  }
}

CountableSet.prototype.format = function format(args) {
  var named = {}

  args.forEach(function(arg) {
    if (arg.length < 2) {
      return named[arg[0]] = undefined
    }

    return named[arg[0]] = arg.slice(2, 3).pop()
  })

  named.all = args.map(function(arg) {
    return arg.slice(2)
  })

  delete named['']

  return named
}

module.exports = function(num, done) {
  return new CountableSet(num, done)
}
