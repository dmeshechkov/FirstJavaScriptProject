//application Overweight

const myWeight = prompt('Enter your weight');
const myHeight = prompt('Enter your height');
const bodyMassIndex = myWeight / Math.pow(myHeight, 2);
const areYouOverweight = bodyMassIndex >= 25;
alert('Are you overweight?' + ' ' + areYouOverweight);
