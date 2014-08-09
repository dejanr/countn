var test = require('tap').test
  , countn = require('./index')
  , noop = function() {}

test('should initialize and return count callback', function(t) {
  t.type(countn(1, noop), 'function', 'callback is function')
  t.end()
})

test('should call done when all callbacks are counted', function(t) {
  var cb = countn(2, function(err) {
    t.ok(true, 'all callbacks counted')
    t.end()
  })

  cb()()
  cb()()
})

test('should return error on first error', function(t) {
  var cb = countn(3, function(err) {
    t.equal(err.message, 'Some error occured')
    t.end()
  })

  cb()(new Error('Some error occured'))
  cb()(new Error('Some other error'))
})

test('done cb should pass named results and single value', function(t) {
  var cb = countn(2, function(err, results) {
    t.equal(results.first, true, 'first should be true')
    t.equal(results.second, false, 'second should be false')
    t.ok(true, 'all callbacks counted')
    t.end()
  })

  cb('first')(null, true)
  cb('second')(null, false)
})

test('done cb should pass all args', function(t) {
  var cb = countn(2, function(err, results) {
    t.deepEqual(results.all, [[true, false], [false, false]], 'all arguments should be merged')
    t.ok(true, 'all callbacks should be counted')
    t.end()
  })

  cb('first')(null, true, false)
  cb('second')(null, false, false)
})
