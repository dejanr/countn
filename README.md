# countn

countn is a simple control flow for counting callbacks.

[![Build Status](https://semaphoreapp.com/api/v1/projects/76f73a00-8f7f-462a-8b6d-8d8cddc195e4/230234/shields_badge.png)](https://semaphoreapp.com/dejanr/countn)

## Installation

    $ npm install countn

## Basic Example

Here is a example of simple async scheduling. Where we have subscribed to execute some code after all concurent tasks
have finished.

```javascript
var cb = countn(5, function(err, results) {
  console.log(err, results)
})

cb(null, 'this is example call')
setTimeout(function() {
  cb(null, 'this is last call')
}, 500)
setTimeout(cb, 100)
setTimeout(cb, 200)
setTimeout(cb, 400)
```

## Example with error call

Here is a example when error occured

```javascript
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
```

## What's it good for?

countn is not ment to replace any control flow library, rather as i am still
counting callbacks, i just wanted a simple library for a little suggar on top of it.

And i believe its much readable having everything in same hierarchy instead of complex
nesting structures.

## Running tests

```
$ npm install
$ npm test
```

## Authors

  - [dejanr](http://github.com/dejanr)

## License

  MIT
