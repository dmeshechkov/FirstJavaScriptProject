'use strict';

// Application Overweight

// const myWeight = prompt('Enter your weight');
// const myHeight = prompt('Enter your height');
// const bodyMassIndex = myWeight / Math.pow(myHeight, 2);
// const areYouOverweight = bodyMassIndex >= 25;
// alert('Are you overweight?' + ' ' + areYouOverweight);
//-------------------------------------

// Application Overweight with If&Else

// const myWeight = prompt('Enter your weight (kg)');
// const myHeight = prompt('Enter your height (m)');
// const bodyMassIndex = myWeight / Math.pow(myHeight, 2);
// const areYouOverweight = bodyMassIndex >= 25;

// if (areYouOverweight) {
//     alert(`Your overweight is too much ${bodyMassIndex - 25}`);
//     console.log(`Your overweight is too much ${bodyMassIndex}`);
// } else {
//     alert(`Your overweight is norm ${bodyMassIndex}`);
//     console.log(`Your overweight is norm ${bodyMassIndex - 25}`);
// }
//-------------------------------------

// Application Ternary operator

// const age = prompt('Enter your age');
// const message = age >= 18 ? 'You can buy it' : 'You can not buy it';
// console.log(message);
// alert(message);
//-------------------------------------

// Application Sales Departments Task

// function getAverage(month1, month2, month3) {
//     return (month1 + month2 + month3) / 3;
//     }
//-------------------------------------

// // 1 quater

// const dept1AverSales1 = getAverage(35467, 29842, 38501);
// const dept2AverSales1 = getAverage(70533, 50121, 33899);
// console.log(dept1AverSales1, dept2AverSales1);

// // 2 quater

// const dept1AverSales2 = getAverage(50301, 121984, 19207);
// const dept2AverSales2 = getAverage(72381, 41562, 29465);
// console.log(dept1AverSales2, dept2AverSales2);

// const printBonus = function(dept1AverSales, dept2AverSales) {
//     if(dept1AverSales > dept2AverSales) {
//         const diffAverSales = dept1AverSales - dept2AverSales;
//         const persBonus = diffAverSales / dept2AverSales * 100;
//         if(persBonus >= 30) {
//             console.log(`Dept 1 will get a bonus ${persBonus}%`);
//         } else {
//             console.log('No bonus');
//         }
//     } else if(dept2AverSales > dept1AverSales) {
//             const diffAverSales = dept2AverSales - dept1AverSales;
//             const persBonus = diffAverSales / dept1AverSales * 100;
//             if(persBonus >= 30) {
//                 console.log(`Dept 2 will get a bonus ${persBonus}%`);
//             } else {
//                 console.log('No bonus');
//             }
//     } else {
//         console.log('No bonus');
//     }
// }

// printBonus(dept1AverSales1, dept2AverSales1);
// printBonus(dept1AverSales2, dept2AverSales2);
//-------------------------------------

// Application Tips Calculator Task

// const calculateTips = bill => bill < 20 ? bill*0.2 : bill * 0.15;

// const bill = [11, 20, 47];
// const tips = [calculateTips(bill[0]), calculateTips(bill[1]), calculateTips(bill[2])];
// const totalBills = [bill[0] + tips[0], bill[1] + tips[1], + bill[2] + tips[2]];
// console.log(bill, tips, totalBills);

// console.log(calculateTips);
//-------------------------------------

// Задачник

// function female(m, f) {
//     const yourGender = prompt('Your gender?')
//     if(yourGender == 'm') {
//         alert('Your gender men');
//     } else if (yourGender == 'f') {
//         alert('Your gender female');
//     } else {
//         alert('Are you IT?');
//     }
//     // console.log(result);
// }

// female();
//-------------------------------------

// let day = prompt('Input number from 1 to 7');
// if (day == 1) {
//     alert('Monday');
// } else if (day == 2) {
//     alert('Tuesday');
// } else if (day == 3) {
//     alert('Wensday');
// } else if (day == 4) {
//     alert('Thuterday');
// } else if (day == 5) {
//     alert('Friday');
// } else if (day == 6) {
//     alert('Sutterday');
// } else if (day == 7) {
//     alert('Sunday');
// } else {
//     alert('No day');
// }
//-------------------------------------

// let firstName = prompt('What is your name?');
// let lastName = prompt('What is your last name?');
// let old = prompt('How old are you?');

// function greeting() {
//     alert(`Hi, ${firstName} ${lastName},  you are ${old} years old`);
// }

// greeting();
//-------------------------------------

// let age = prompt('How old are you?');

// let message = (age < 17) ? 'Hi, child!' :
//   (age < 31) ? 'Hi, young men!' :
//   (age < 56) ? 'Hi, men!' :
//   (age < 100) ? 'Hi, old men!' :
//   'Are you ded?';

// alert( message );
//-------------------------------------

// const dimaObject = {
//     name: 'Dima',
//     lastname: 'Mesh',
//     birthyear: 1979,
//     job: 'student',
//     familyMembers: ['Kirill', 'Artya', 'Anna']
// };

// dimaObject.location = 'Ukraine';
// dimaObject['telega'] = '@dm';

// console.log(`${dimaObject.name} has ${dimaObject.familyMembers.length} family members and the first one is ${dimaObject.familyMembers[0]}`);

// const dimaObject = {
//     name: 'Dima',
//     lastname: 'Mesh',
//     birthyear: 1979,
//     job: 'student',
//     familyMembers: ['Kirill', 'Artya', 'Anna'],
//     hasDriverLicense: false,

//     calcAge: function() {
//         this.age = 2022 - this.birthyear;
//         return 2022 - this.birthyear;
//     },

//     getSummary: function () {
//         return `${this.name} is a ${this.calcAge()}-years old. Hi is a ${this.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} Driver License`
//     }
// };

// console.log(dimaObject.getSummary());

// Task Objects

// const dataOne = {
//     name: 'Jack',
//     lastname: 'White',
//     weight: 79,
//     height: 1.70,
//     calcBmi: function() {
//         this.bmi = this.weight / (this.height * this.height);
//         return this.bmi;
//     }
// };

// const dataTwo = {
//     name: 'Mike',
//     lastname: 'Black',
//     weight: 91,
//     height: 1.93,
//     calcBmi: function() {
//         this.bmi = this.weight / (this.height * this.height);
//         return this.bmi;
//     }
// };

// console.log(`${dataOne.name} ${dataOne.lastname} BMI (${dataOne.calcBmi()}) is ${dataOne.calcBmi() > dataTwo.calcBmi() ? 'higher' : 'less'} than ${dataTwo.name} ${dataTwo.lastname} (${dataTwo.calcBmi()})`);
//------------------------------------

// Loop

// for(let rep = 0; rep <= 30; rep += 7) {
//     console.log(`${rep}`);
//     console.log('Do something 1');
// }

// console.log('End cycle');

// const user123 = ['Dima', 'Mesh', 1979, 'student', ['Kirill', 'Artya'], false];

// const types = [];

// for(let i = 0; i < user123.length; i++) {
//     console.log(user123[i], typeof user123[i]);
//     types[i] = typeof user123[i];
// }

// console.log(types);

// const birthYears = [1974, 1987, 1988, 1976];
// const ages = [];

// for(let i = 0; i < birthYears.length; i++) {
//     // ages.push(2022 - birthYears[i]);
//     ages[i] = 2022 - birthYears[i];
// }

// console.log(ages);

// console.log('LOOP IN LOOP')

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`Exercise ${exercise}`);

//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Ex ${exercise} Rep ${rep}`);
//     }
// }
//---------------------------------

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Push ups repetition ${rep}`);
//     rep++;
// }
//---------------------------------

// let diceNumber = Math.trunc(Math.random() * 6) + 1;

// while (diceNumber !== 6) {
//     console.log(diceNumber);
//     diceNumber = Math.trunc(Math.random() * 6) + 1;
// }
//---------------------------------

// Task Tips Calculator New

// const calculateTips = bill => bill < 20 ? bill * 0.2 : bill * 0.15;
// const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calculateTips(bills[i]));
//     totals.push(bills[i] + calculateTips(bills[i]));
// }

// console.log(bills);
// console.log(tips);
// console.log(totals);

// const calculateAverage = function(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//        sum = sum + arr[i];
//     }
//     return sum / arr.length;
//  }
//  console.log(calculateAverage(bills));
//  console.log(calculateAverage(tips));
//  console.log(calculateAverage(totals));

// ----------------------------------------

// let str = 'abcde';
// console.log(str[0]);

// const x = 1;
// let hour = x * 3600 * 24;

// console.log(hour);

// const age = 43;
// console.log("I'm" + ' ' + age + ' ' + 'years old');

// const number = prompt('Input any number');
// alert(Math.pow(number, 2));

// let num = '123456';
// console.log(num[0] * num[1] * num[2] * num[3] * num[4] * num[5]);

// const x = 1;
// let hour = x * 3600;
// let day = x * 3600 * 24;
// let month = x * 3600 * 24 * 30;
// console.log(hour, day, month);
//---------------------------------

// let arr = ['Hi', 'world', '!'];
// console.log(arr[0] + ' ' + arr[1] + arr[2]);

// let text = arr[0] + ' ' + arr[1] + arr[2];
// console.log(text);

// arr.splice(0, 1, 'By');
// console.log(arr[0] + ' ' + arr[1] + arr[2]);
//---------------------------------

// const objNik = {
//   name: 'Nik',
//   salary: 1000,
// };

// const objVas = {
//   name: 'Vasile',
//   salary: 1300,
// };

// const objPet = {
//   name: 'Peter',
//   salary: 900,
// };

// console.log(objPet.salary);
// console.log(objNik.salary);

// let arr = {
//   ru: ['голубой', 'красный', 'зеленый'],
//   en: ['blue', 'red', 'green'],
// };

// console.log(arr.ru[0]);
//---------------------------------

// let arr1 = [33, 67, 20, 123, 54];
// let arr2 = [80, 56, 34, 145];

// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// const calcAmpl = function (arr3) {
//   let max = arr3[0];
//   let min = arr3[0];

//   for (let i = 1; i < arr3.length; i++) {
//     if (arr3[i] > max) {
//       max = arr3[i];
//     }
//     if (arr3[i] < min) {
//       min = arr3[i];
//     }
//   }
//   console.log(min, max);
//   return max - min;
// };

// console.log(calcAmpl(arr3));
//---------------------------------

let nums = [2, 8, 7, 15, 33, 4];
const target = 41;
const x = 1;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] + nums[i + x] == target) {
    console.log([nums[i], nums[i + x]]);
  } else
    for (let x = 1; x < nums.length; x++) {
      if (nums[i] + nums[i + x] == target) {
        console.log([nums[i], nums[i + x]]);
      }
    }
}
