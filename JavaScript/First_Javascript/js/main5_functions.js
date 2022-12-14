function addTwoNumbers(num1, num2) { // in () - function parameters
    const result = num1 + num2;
    // console.log('This was the function...');
    return result; // function ends with return
};
console.log(addTwoNumbers(5, 10)); // same as next line
const someResult = addTwoNumbers(3, 10);
console.log(someResult);


function isPrimeNumber(num) {
    let hadDivisor = false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            hadDivisor = true;
            break;
        }
    }

    // if (hadDivisor) {
    //     return false;
    // }

    // return true;
    return !hadDivisor;

}

function isPrimeNumber2(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;

}

console.log(isPrimeNumber(13));
console.log(isPrimeNumber(12));
console.log(isPrimeNumber2(47));

for (let i = 1; i < 100; i++) {
    if (isPrimeNumber2(i)) {
        // console.log(`${i} is a prime number`);
    }
}

function reverseWord(phrase) {
    // const phraseAsArray = phrase.split('');
    // const reversedArray = phraseAsArray.reverse();
    // const reversedPhrase = phraseAsArray.join('');
    // return reversedPhrase;
    return phrase
        .split('')
        .reverse()
        .join('');
}
console.log(reverseWord('Blah blah Yeah'));

function snakeCase(phrase) {
    // const lowerCasePhrase = phrase.toLowerCase();
    // const replacedPhrase = lowerCasePhrase.replace(' ', '_');
    // return replacedPhrase;
    return phrase.toLowerCase().replace(/ /g, '_'); // replaces all spaces, not just first
}
console.log(snakeCase('Hello World Foo Bar'));