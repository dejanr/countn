'use strict'

var countn = require('./')

var example = countn(2, function(err, results) {
  console.log(err, results)
  console.log('All examples executed.')
})

// Example 1
//
// When all calls are successful results are concatenated
// and returned in callback function
var cb = countn(5, function() {
  example(null, 'example 1 done')
})

cb(null, 'this is example call')
setTimeout(function() {
  cb(null, 'this is last call')
}, 500)
setTimeout(cb, 100)
setTimeout(cb, 200)
setTimeout(cb, 400)

// Example 2
//
// When first error occurs, execution is cancelled
// and done is called with that error
var cb2 = countn(3, function(err) {
  example(null, 'example 2 done with error: ' + err)
})

cb2(null, 'this is first ok call')
setTimeout(function() {
  cb2('this is first error call')
}, 100)
setTimeout(function() {
  cb2(null, 'this is second ok call')
}, 200)
