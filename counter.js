let count = 0;

const increment = () => ++count;

const decrement = () => {
  count -= 2;
  return count;
};

console.log(increment(), decrement());
