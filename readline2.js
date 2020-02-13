const readline = require('readline-promise').default;

const rlp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

const promise = rlp.questionAsync('What do you think of Node.js? ');
console.log();
console.log(promise);
promise.then((data) => {
  console.log(data)
  rlp.close();
});
