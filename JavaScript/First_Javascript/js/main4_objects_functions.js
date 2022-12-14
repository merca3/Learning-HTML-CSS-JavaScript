let date = new Date(); // not always date can be correct... // creating a date Object/Blueprint
console.log(date);
console.log(date.getMinutes());
console.log(date.getTime()); // epoch/unix timestamp (timezoneless UTC) - time from 1970-01-01 00:00:00.0000 / 
// in Javascript - miliseconds
console.log(`${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`); // for LV date formatting

let date1 = new Date();
let date2 = new Date();



console.log(parseInt('123123dagaf')); // converts string to integer/number, throws all the rest out
console.log(parseInt('asdas123123')); // NaN
console.log(parseFloat('3.14')); // also converts data type

console.error('Error');
console.warn('Warning');
console.info('Info'); // not shown in Chrome

const cars = ['vaz', 'zaz', 'gaz', 'maz', 'uaz', 'kia'];
console.log(cars.length); // cars - object, length - property, log - function
console.log(cars.reverse()); // function tied to an object (console) - method
console.log(cars.join(','));

const carsString = 'kia, vaz, zaz, gaz';
console.log(carsString);
console.log(carsString.split(',')); // turns the string to array

const word = 'Hello World';
console.log(word.split('').reverse().join('').toUpperCase());


function addTwoNumbers(num1, num2) { // in () - function parameters
    const result = num1 + num2;
    console.log('This was the function...');
    return result;
};
console.log(addTwoNumbers(5, 10)); // same as next line
const someResult = addTwoNumbers(5, 10);
console.log(someResult);