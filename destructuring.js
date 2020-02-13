const obj = {
  name: 'Andy',
  age: 38
};

// const age = obj.age;
// const name = obj.name;
const { age, name } = obj;

const arr = ['Alice', 'Bob', 'Carol'];

const alice = arr[0];
const bob = arr[1];
const [alice, bob] = arr;
