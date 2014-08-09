var countn = require('../')
var cb = countn(5, function(err, results) {
  console.log('named results: ', results)
  console.log('all done')
})

setTimeout(cb('first'), 300)
setTimeout(cb('second'), 100)
setTimeout(cb('third'), 500)
setTimeout(cb('fourth'), 200)
setTimeout(cb('fifth'), 400)
