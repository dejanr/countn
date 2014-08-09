var test = require('tap').test
  , countn = require('./index')
  , noop = function() {}


test('it should initialize and return count callback', function(t) {
  t.type(countn(1, noop), 'function', 'callback is function')
  t.end()
})

test('it should call done when all callbacks are counted', function(t) {
  var cb = countn(2, function(err) {
    t.ok(true, 'all callbacks counted')
    t.end()
  })

  cb()
  cb()
})

test('it should return error on first new Error', function(t) {
  var cb = countn(3, function(err) {
    t.equal(err.message, 'Some error occured')
    t.end()
  })

  cb(new Error('Some error occured'))
  cb(new Error('Some other error'))
})
