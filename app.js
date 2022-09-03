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

const dataOne = {
    name: 'Jack', 
    lastname: 'White', 
    weight: 79, 
    height: 1.70,
    calcBmi: function() {
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi;
    }
};

const dataTwo = {
    name: 'Mike', 
    lastname: 'Black', 
    weight: 91, 
    height: 1.93,
    calcBmi: function() {
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi;
    }
};

console.log(`${dataOne.name} ${dataOne.lastname} BMI (${dataOne.calcBmi()}) is ${dataOne.calcBmi() > dataTwo.calcBmi() ? 'higher' : 'less'} than ${dataTwo.name} ${dataTwo.lastname} (${dataTwo.calcBmi()})`);
