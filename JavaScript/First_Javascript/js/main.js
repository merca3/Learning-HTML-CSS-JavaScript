console.log(123);
console.log(123123123123123123123123);
console.log(-321);
// whole number - integer - int

console.log(3.14);
console.log(.14);
// Floating point number - float (amount of numbers after , is limited, 16=max)

console.log('Hello World');
console.log("Hello World");
console.log(`Hello World`);
console.log("Foo's Car");
console.log('Foo\'s Car');
console.log(' \\ ');
console.log("<span class=\"foo\"></span>");
console.log('<span class="foo"></span>');
// text / string

console.log(true);
console.log(false);

console.log(null);
console.log(undefined);

console.log(someNumber);
var someVar;
console.log(someVar);
var someNumber = 123;
console.log(someNumber); //123
someNumber = 234;
console.log(someNumber); //234
someNumber = 'some text';
console.log(someNumber); //some text
someNumber = '123';
console.log(someNumber); //123 as string

let someOtherNumber = 456;
console.log(someOtherNumber);
someOtherNumber = 546; // can't redefine with let, only in ES6
console.log(someOtherNumber);

const someConstant = 'foo';
console.log(someConstant);
// someConstant = 'bar'; can't change the value


// let cars = ['vaz', 'bmw', 'audi', 'vw', 'toyota', 'kia'];
const cars = [
    'vaz',
    'bmw',
    'audi',
    'vw',
    'toyota',
    'kia',
];
console.log(cars);
console.log(cars[3]);
cars[2] = 'ford'; // can't  change an array, but can change elements
console.log(cars);
cars.push('tesla');
console.log(cars);
console.log(cars.length);

// cars.indexOf('vaz');
// console.log(cars.indexOf('vaz'));

console.log('foo' + 'bar'); // concatenation
console.log('foo' + "bar");

let name = 'Katrīna';
console.log('Hello, ' + name);
console.log(`Hellow, ${name}, go and drive ${cars[6]}`); //interpolation / template literals


// object
let person = {
    name: 'Kate',
    lastName: 'Piers',
    age: 24,
    '12dsad': '234',
};
console.log(person);
console.log(person.lastName);
person.name = 'Jonathan';
console.log(person.name);
console.log(person['age']);


const people = [{
        name: 'Kate',
        lastName: 'Piers',
        age: 24,
    },
    {
        name: 'Pete',
        lastName: 'Peaks',
        age: 32,
    },
];

console.log(people[1].name)