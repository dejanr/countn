# countn

countn is a simple control flow for counting callbacks.

[![Build Status](https://travis-ci.org/dejanr/countn.png)](https://travis-ci.org/dejanr/countn)

## Installation

    $ npm install countn

## Basic Example

Here is a example of simple async scheduling. Where we have subscribed to execute some code after all concurent tasks
have finished.

```js
var countn = require('countn')
var cb = countn(5, function(err, results) {
  console.log('results:', results) // results: { all: [ [], [], [], [], [] ] }
})

setTimeout(cb(), 300)
setTimeout(cb(), 100)
setTimeout(cb(), 500)
setTimeout(cb(), 200)
setTimeout(cb(), 400)
```

## Named Callbacks Example

Here is a example of simple async scheduling with named callbacks, so we could easily reuse results.

```js
var countn = require('countn')
var cb = countn(5, function(err, results) {
  console.log('first result: ', results.first) // undefined
})

setTimeout(cb('first'), 300)
setTimeout(cb('second'), 100)
setTimeout(cb('third'), 500)
setTimeout(cb('fourth'), 200)
setTimeout(cb('fifth'), 400)
```

## What's it good for?

countn is not ment to replace any control flow library, rather as i am still
counting callbacks, i just wanted a simple library for a little suggar on top of it.

## Running tests

```
$ npm install
$ npm test
```

## Authors

  - [dejanr](http://github.com/dejanr)

## License

  MIT
