const generatePromise = () => {
  return new Promise((resolve, reject) => {
    // do something
    const data = longRunningProcess();
    if (data) {
      resolve();
    } else {
      reject('error message');
    }
  });
  // return promise;
};

promise.then(data => {}).catch(err => {})
