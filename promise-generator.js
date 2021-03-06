module.exports.promiseGenerator = (delay = 5000, isRandom = false) => {
  const wait = isRandom ? Math.floor(Math.random() * delay) : delay;
  return new Promise((resolve, reject) => {
    setTimeout(resolve, wait);
  });
};

module.exports.failingPromiseGenerator = (delay = 5000, isRandom = false) => {
  const wait = isRandom ? Math.floor(Math.random() * delay) : delay;
  return new Promise((resolve, reject) => {
    setTimeout(reject, wait);
  });
};
