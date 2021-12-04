// let i = 10,
//   res = 0;

// for (i; i > -90; i--) {
//   res++;
// }

// console.log(res);

// 131597 деталей. Посчитать каждую 13-ю деталь, начиная со 2-ой. Вывести результат

// let i = 1,
//   res = 0;

// for (i; i < 131597; i += 13) {
//   res++;
// }
// console.log(res);

// 4. Добавлять 87 и вывести последнее число, не больше 40000

// let i = 4;

// for (i; ; i += 87) {
//   if (i >= 40000) {
//     break;
//   }
// }

// console.log(i - 87);

// let x = 13;

// x % 2 === 0 ? console.log('это число четное') : console.log('это число нечетное');

// В классе есть 42 человека. Нужно посчитать количество учеников кроме каждого 6-го. Рез-т вывести в консоль.

// let i = 1,
//   res = 0;

// for (i; i <= 42; i += 4) {
//   res++;
// }

// for (i = 1; i <= 42; i += 7) {
//   res++;
// }
// console.log(42 - res);

// let i = 1,
//   res = 0;

// for (i; i <= 42; i++) {
//   if (i % 4 === 0 || i % 7 === 0) {
//     continue;
//   }
//   res++;
// }

// console.log(res);

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// let i = 0;
// while (i < 3) {
//   console.log(`number ${i++}!`);
// }

// let i = 11;
// while (i <= 33) {
//   console.log(i++);
// }

// for (let i = 1; i <= 100; i++) {
//   i % 2 === 0 && console.log(i);
// }

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);
