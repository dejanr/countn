# countn

countn is a simple control flow for counting callbacks.

[![Build Status](https://travis-ci.org/dejanr/countn.png)](https://travis-ci.org/dejanr/countn)

## Installation

    $ npm install countn

## Usage Example

Here is a example of simple async scheduling. Where we have subscribed to console log 'we are done'
when all async scheduled event have finished executing

```js
var countn = require('countn')
var cb = countn(5, function() {
  console.log('we are done')
})

setTimeout(cb, 300)
setTimeout(cb, 100)
setTimeout(cb, 500)
setTimeout(cb, 200)
setTimeout(cb, 400)
```

## What's it good for?

countn is not ment to replace any control flow library, rather as i am still
counting callbacks, i just wanted a simple library for a little suggar on top of it.

## Running tests

``
$ npm install
$ npm test
``

## Authors

  - [dejanr](http://github.com/dejanr)

## License

  MIT
