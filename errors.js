const { promiseGenerator, failingPromiseGenerator } = require('./promise-generator');

promiseGenerator(2000)
  .then(() => {
    console.log('promise succeeded');
    return promiseGenerator(2000);
  })
  .then(() => {
    console.log('promise succeeded');
    return failingPromiseGenerator(2000);
  })
  .catch(() => {
    console.log('below the failing promise');
  })
  .then(() => {
    console.log('promise succeeded');
    return failingPromiseGenerator(2000);
  })
  .then(() => {
    console.log('promise succeeded');
    return promiseGenerator(2000);
  })
  .catch(() => {
    console.log('something bad happened');
  })
