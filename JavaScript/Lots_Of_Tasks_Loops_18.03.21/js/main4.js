const counterLimit = 500;
let counter = 1;
while (counter <= counterLimit) {
    let sum = 0;
    for (let i = 1; i < counter; i++) {
        if (counter % i === 0 && counter !== i) {
            sum += i;
        }
    }
    if (sum == counter) {
        console.log(`${counter} is a perfect number`);
    }
    counter++;
};

// both versions work!

for (counter = 1; counter <= counterLimit; counter++) {
    sum = 0;
    for (let i = 1; i < counter; i++) {
        if (counter % i === 0 && counter !== i) {
            sum += i;
        };
    };
    if (sum == counter) {
        console.log(`${counter} is a perfect number`);
    };
};