// const ask = (question, yes, no) => {
//   confirm(question) ? yes() : no();
// };

// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// );

// ask(
//   "вам есть 18 лет?",
//   () => alert("вам есть 18"),
//   () => alert("вам нет 18")
// );

// ask(
//   "Вы женаты?",
//   () => alert("Да, у меня есть жена"),
//   () => alert("Нет")
// );

// function checkAge(age) {
//   return age > 18 ? true : console.log("Родители разрешили?");
// }

// function checkAge(age) {
//   return age > 18 || console.log("Родители разрешили?");
// }

// const min = (a, b) => {
//   return a < b ? a : b;
// };

// console.log(min(2, 5), min(3, -1), min(1, 1));

// const pow = (x, n) => {
//   let result = x;

//   for (let i = 0; i < n - 1; i++) {
//     result *= x;
//   }

//   return result;
// };

const pow = (x, n) => x ** n;

console.log(pow(5, 1), pow(7, 3), pow(6, 6));
