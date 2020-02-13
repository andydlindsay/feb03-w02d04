# W2D4 - Promises

### To Do
- [ ] Illustrate the "callback waterfall" (callback hell) problem
- [ ] Introduction to Promises
- [ ] Error handling with Promises (vs callbacks)
- [ ] Creating our own Promises
- [ ] Parallelizing async things (Promise.race and Promise.all)

```js
higherFn((err, data) => {
    if (err) {
      console.error(err);
    }
    fn2((err, data2) => {
        if (err) {
          console.error(err);
        }
        fn3((err, data3) => {
          if (err) {
            console.error(err);
          }
          // finally do something
        });
    });
});
```

### Promises
- A JS object that gets returned from a function
- Either I show up OR I don't
- Not fulfilled/ in limbo

- Resolved - fulfilled
- Rejected - failed
- Pending - in limbo


### DRY Don't Repeat Yourself
### WET Write Everything Twice


```js
const promise = promiseGeneratingFunction();
throw new Error
err.stack
promise
  .then(() => {
    return newPromise;
  })
  .then(data => newPromise)
  .catch((err) => {})
  .then(() => {
    return newPromise;
  })
  .then(data => newPromise)
  .then(() => {
    return newPromise;
  })
  .then(data => newPromise)
  .catch(() => {})

```






#
