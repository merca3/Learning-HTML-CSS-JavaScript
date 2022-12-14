console.log(1 + 1);
console.log(1 + 1);
console.log(10 * 5);
console.log(10 / 5);
console.log(2 + 2 * 2);
console.log((2 + 2) * 2);

// + - * /

console.log('--------------'); // % shows the remainder when big number is devided
// mostly used to tell if number is even or odd
console.log(10 % 1);
console.log(10 % 2);
console.log(10 % 3);
console.log(10 % 4);
console.log(10 % 5);

console.log('--------------');
console.log(10 / 0);
console.log(10 / -0);

console.log('--------------');
console.log(1 + '1'); //  concatination if adds a string
console.log(5 - '1');
console.log(5 - 'a');
console.log(5 - 'a');
console.log(typeof(5 - 'a'));

console.log(true + true);
console.log(true + false);

console.log([] + {});
console.log({} + {});
console.log([] + {});
console.log([] + []);
console.log(['a'] + ['b']);

console.log('--------------'); // Math/console - command, log/sqrt - function
console.log(Math.sqrt(9));
console.log(Math.PI);

console.log(Math.round(5));
console.log(Math.round(5.6));
console.log(Math.round(5.4));

console.log(Math.ceil(5)); // if bigger than 5.0 - rounds up to 6
console.log(Math.ceil(5.6));
console.log(Math.ceil(5.4));

console.log(Math.floor(5)); // if bigger than 5.0 - rounds up to 5
console.log(Math.floor(5.6));
console.log(Math.floor(5.4));

console.log('--------------');
const num1 = 5;
const num2 = 10;
console.log(num1 > num2); // works also as <= and >=, works also simply with number, without variables, can use also both
console.log(num1 < num2);
console.log(1 <= true);
console.log(1 <= 'asd'); // turns string to null

console.log('--------------');
// console.log(num1 = 5); // reassigns the value
console.log(num1 == 5); //to compare - two ==
console.log(5 == num1); // Yoda notation/syntax/CONDITIONS
console.log(num1 == 6);
console.log(num1 == '5');
console.log(num1 == true);
console.log(num1 === 5);
console.log(num1 === '5'); // strictly equals, safer option

console.log('--------------');
console.log(num1 != 4); // true, doesn't equal, not equals to 4
console.log(num1 != 5); // false
console.log(num1 != '5'); // false
console.log(num1 !== 5); // false
console.log(num1 !== '5'); // true

console.log('--------------');
console.log(num1 === 5 && num2 === 8); // checks 2nd condition only if 1st condition is true
console.log(num1 === 5 && num2 === 10);
console.log(num1 === 6 && num2 === 10);

console.log('--------------');
console.log(num1 === 5 || num2 === 8); // OR
console.log(num1 === 6 || num2 === 11);
console.log(num1 === 6 || num2 === 10);

console.log('--------------');
console.log(num1 === 4 && num1 === 4 || num2 === 10); // true
console.log(num1 === 4 && (num1 === 4 || num2 === 10)); // false, on depends on brackets

let num11 = 1;
// num11 = num11 + 4; exactly the same as next line
num11 += 4;
num11 -= 1;
num11 /= 2; // etc.

let someWord = 'Hello';
someWord += ' World'; // equals to 'Hello World'



let num12 = 10;
// num12++; // increment by one (-1)
// ++num12;
// num12--; // decrement
// --num12;

console.log('Number is ', num12); // 10
console.log('Number is ', num12++); // output 10, value 11
console.log('Number is ', num12); // 11
console.log('Number is ', ++num12); // output 12, value 12
console.log('Number is ', num12); //12



const foo = num1 || 10;

// if (condition) {
// command(-s)
// } else {
// another command(-s)
// };

if (num1 > 4) {
    console.log('The number is greater than 4');
} else {
    console.log('The number is smaller than 4');
};

if (num2 === 10) {
    console.log('Oh yeah');
};

let cond = 1;
if (cond) {
    console.log('cond = 1');
};

cond = 0;
if (cond) {
    console.log('cond = 0'); // not gonna print it out as it takes 0 as false
} else {
    console.log('cond else condition');
};

cond = 'a';
if (cond) {
    console.log('cond = "a"');
};

cond = ''; // empty string is faulty, space is true
if (cond) {
    console.log('cond = ""');
};

cond = ['a'];
if (cond) {
    console.log('cond = [a]');
};

cond = [];
if (cond) {
    console.log('cond = []');
};

cond = { foo: 'bar' };
if (cond) {
    console.log('cond = {foo: bar}');
};

cond = {};
if (cond) {
    console.log('cond = {}');
};

const age = 25;
if (age) { // if you want to check if a number is set
    console.log('Age is truly');
};

if (!age) {
    console.log('Age is not set'); // will print it only if there's no age set
};

const moneyAmount = 100;
if (moneyAmount > 10000) {
    console.log('You are rich!');
} else if (moneyAmount > 0 && moneyAmount < 10000) { // also should work without && condition, just in this case
    console.log('You got something.');
} else {
    console.log('You got nothing...');
};