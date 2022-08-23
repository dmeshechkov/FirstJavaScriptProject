//application Overweight

// const myWeight = prompt('Enter your weight');
// const myHeight = prompt('Enter your height');
// const bodyMassIndex = myWeight / Math.pow(myHeight, 2);
// const areYouOverweight = bodyMassIndex >= 25;
// alert('Are you overweight?' + ' ' + areYouOverweight);



//application Overweight with If&Else

const myWeight = prompt('Enter your weight (kg)');
const myHeight = prompt('Enter your height (m)');
const bodyMassIndex = myWeight / Math.pow(myHeight, 2);
const areYouOverweight = bodyMassIndex >= 25;


if (areYouOverweight) {
    alert(`Your overweight is too much ${bodyMassIndex - 25}`);
    console.log(`Your overweight is too much ${bodyMassIndex}`);
} else {
    alert(`Your overweight is norm ${bodyMassIndex}`);
    console.log(`Your overweight is norm ${bodyMassIndex - 25}`);
}