let count = 0;

const increment = () => ++count;

// const increment = () => {
//   return ++count;
// }

// const increment = function () {
//   return ++count;
// }

// function increment() {
//   return ++count;
// }

const decrement = () => {
  count -= 2;
  return count;
};

console.log(increment(), decrement());
