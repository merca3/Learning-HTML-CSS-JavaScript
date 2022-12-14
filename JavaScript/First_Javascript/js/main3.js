const num1 = 3;
switch (num1) {
    case 1:
        console.log('Value is 1');
        break; // if no BREAK, will print more than 1 value in few cases, in this case - 2 values
    case 2:
        console.log('Value is 2');
        break;
    case 3:
    case 4:
        console.log('Value is 3 or 4');
        break;
    default:
        console.log('Value is not between 1 and 4');
        break;
};

const url = '/users';
switch (url) {
    case '/users':
        console.log('Load the Users page');
        break;
    case '/about-us':
        console.log('Load the About us');
        break;
    case '/contacts':
        console.log('Load the Contact page');
        break;
    case '/home':
    case '/':
        console.log('Load the Home page');
        break;
    default:
        console.log('Load the 404');
        break;
};

// Be sure NOT to make an Infinite loop!
// One iteration - one run of loop
let num2 = 0;
while (num2 < 10) {
    console.log('Yay, looping! ', num2);
    num2++;
};



let num3 = 0;
do {
    console.log('Yay, looping again! ', num3);
    num3++;
} while (num3 > 10); // if < 10, then will print out 10 times



for (let i = 0; i < 10; i++) {
    console.log('The number is ', i);
};

for (i = 100; i > 0; i--) {
    console.log(i);
};
// console.log(i); Error, 'cause i is not defined out of the loop/block

// const cars = ['vaz', 'zaz', 'gaz', 'maz', 'uaz', 'bmw'];
// car[0] += ' is a nice car';
// car[1] += ' is a nice car';
// car[2] += ' is a nice car'; - would be too long...

// for (i = 0; i < cars.length; i++) {
//     // console.log(cars[i]);
//     debugger; // stops the code always, you can see variables in browser and how they change step by step
//     cars[i] += ' is a nice car';
// }
// console.log(cars);



const cars = ['vaz', 'zaz', 'gaz', 'maz', 'uaz', 'kia'];
for (let carIndex in cars) { // for ... in
    console.log(cars[carIndex]);
}

for (let car of cars) { // for ... of
    // car = 'baz';
    console.log(car);
};
// console.log(cars); // would print out 6x 'baz' and show the erray with names not changed
// for (i = 0; i < cars.length; i++) {
// let car = cars[1];
// console.log(car); } // same thing as for ... of



for (let i = 0; i < 100; i++) { // to skip some numbers, limiting the loop
    if (i < 10) {
        continue;
    }
    if (i > 30) {
        break;
    }
    console.log(i);
};