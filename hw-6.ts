import { question } from "readline-sync";

//task 1

const car: { brand?: string; model?: string; mileage: number } = {
  brand: "Audi",
  model: "RS6",
  mileage: 1000,
};

console.log(car);

delete car.brand;
delete car.model;

console.log(car);

//task 2

const pet: { type?: string; age?: number; weight?: number } = {
  type: "cat",
  age: 2,
};

if ("type" in pet) {
  console.log(true);
} else {
  console.log(false);
};

//task 3

const student = {
  name: "John",
  age: 19,
  isHappy: true,
};

console.log("Keys:");

for (const key in student) {
  console.log(key);
}

console.log("Values:");

for (const value in student) {
  console.log(student[value as keyof typeof student]);
}

//task 4

const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};

console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"].blue);

//task 5

let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  andrew: 664,
  alexandra: 199,
};

let sum = 0;
let employeeCounter = 0;

for (const key in salaries) {
  employeeCounter++;
  sum += salaries[key as keyof typeof salaries];
}

let mediana = sum / employeeCounter;
console.log(mediana);

//task 6

const userRegLogin = question("Input unique user name\n");
const userRegPassword = question("Input secure password:\n");
const user: { login: string; password: string } = getUserLogin(
  userRegLogin,
  userRegPassword
);

function getUserLogin(login: string, password: string): typeof user {
  const newUser: typeof user = {
    login: login,
    password: password,
  };
  return newUser;
}

console.log(
  `User successfully registered with login: ${user.login} and password: ${user.password}`
);

const userLoginInput = question("Input unique user name\n");
const userPasswordInput = question("Input secure password:\n");

//var 1
// function validateUserLogin (login: string, password: string, userData: typeof user): void {
//     if(login === userData.login && password === userData.password) {
//         console.log("Welcome to hell!");
//     }
// }
// validateUserLogin(userLoginInput, userPasswordInput, user);

//var 2
function validateUserLogin(login: string, password: string) {
  if (login === user.login && password === user.password) {
    console.log("Welcome to hell!");
  } else {
    console.log("Incorrect login or user name. Try one more time");
  }
}

validateUserLogin(userLoginInput, userPasswordInput);

//adv task 1

let values: any = {
  "0": "Zero",
  "1": "One",
  "2": "Two",
  "3": "Three",
  "4": "Four",
  "5": "Five",
  "6": "Six",
  "7": "Seven",
  "8": "Eight",
  "9": "Nine",
};

function stringifyGameResults(result: string): void {
  let split = result.split(":");
  console.log(`${values[split[0]]}:${values[split[1]]}`);
}

stringifyGameResults("5:8");

//adv task 2

let student1 = {
  name: "Polina",
  age: 27,
};

let student2 = {
  name: "Polina",
  age: 27,
};

console.log(JSON.stringify(student1) === JSON.stringify(student2));

//adv task 3

type ICat = {
  name: string;
  age: number;
};

const cat: ICat = {
  name: "Енчик",
  age: 3,
};

const jsonString = JSON.stringify(cat);
const catClone1 = JSON.parse(jsonString);

const catClone2 = Object.assign({}, cat);

cat.name = "Гаражик";

console.log(cat, catClone1, catClone2);
