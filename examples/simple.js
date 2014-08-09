var countn = require('../')
var cb = countn(5, function() {
  console.log('we are done')
})

setTimeout(cb, 300)
setTimeout(cb, 100)
setTimeout(cb, 500)
setTimeout(cb, 200)
setTimeout(cb, 400)
