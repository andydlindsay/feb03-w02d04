const { promiseGenerator, failingPromiseGenerator } = require('./promise-generator');

const promise1 = promiseGenerator(1000);
const promise2 = promiseGenerator(2000);
const promise3 = promiseGenerator(3000);
// const promise4 = failingPromiseGenerator(500);

const promises = [promise1, promise2, promise3];

Promise.race(promises)
  .then(() => {
    console.log('first promise resolved');
  })
  .catch(() => {
    console.error('something bad happened');
  });
