'use strict'

var test = require('tap').test
  , countn = require('./index')

test('should initialize and return count callback', function(t) {
  t.type(countn(1), 'function', 'callback is function')
  t.end()
})

test('should call done when all callbacks are counted', function(t) {
  var cb = countn(2, function() {
    t.ok(true, 'all callbacks counted')
    t.end()
  })

  cb()
  cb()
})

test('done callback should receive all results', function(t) {
  var cb = countn(4, function(err, results) {
    t.notOk(err, 'error should not be set')
    t.equal(4, results.length, 'we should have all results included')
    t.end()
  })

  cb(null, 1)
  cb(null, 2)
  cb(null, 3)
  cb(null, 4)
})

test('should return error on first error', function(t) {
  var cb = countn(3, function(err) {
    t.equal(err.message, 'Some error occured')
    t.end()
  })

  cb(new Error('Some error occured'))
  cb(new Error('Some other error'))
})
