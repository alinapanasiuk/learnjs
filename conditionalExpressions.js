// let money = "1000";

// console.log("I am here");

// if (isOpen) {
//   console.log("is open");
// } else {
//   console.log("is not open");
// }

// money === 1000 ? console.log("is open") : console.log("is not open");

// let a = 2,
//   b = 3,
//   result;

// if (a + b > 4) {
//   result = "Много";
// } else {
//   result = "Мало";
// }

// a + b > 4 ? (result = "Много") : (result = "Мало");
// console.log(result);

let message, login;

if (login == "Сотрудник") {
  message = "Привет";
} else if (login == "Директор") {
  message = "Здравствуйте";
} else if (login == "") {
  message = "Нет логина";
} else {
  message = "";
}

login == "Сотрудник"
  ? (message = "Привет")
  : login == "Директор"
  ? (message = "Здравствуйте")
  : login == ""
  ? (message = "Нет логина")
  : (message = "");

let a = 0,
  b,
  c;

if (a > b) {
  console.log("q");
} else if (c === b) {
  console.log("w");
} else if (a) {
  console.log("e");
} else if ("hello world") {
  console.log("hi");
}

a > b
  ? console.log("q")
  : c === b
  ? console.log("w")
  : true
  ? console.log("e")
  : "hello world"
  ? console.log("hi")
  : "";
