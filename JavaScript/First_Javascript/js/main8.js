// document.getElementById('change-text-btn');

// document.querySelector('#change-text-btn').addEventListener('click', clickHappened);
// // # for ID, . for class (as in CSS); picks the first element
// function clickHappened() {
//     console.log('Someone clicked!')
// }

// anonymous function - closure
document.querySelector('#change-text-btn')
    .addEventListener('click', function(event) { // THIS parameter built in the function
        console.log('Someone clicked!');
        console.log(event);
        const parElementFirst = document.querySelector('.some-paragraph');
        // console.log(parElementFirst);
        const parElements = document.querySelectorAll('.some-paragraph');
        // console.log(parElements);
        for (const parElement of parElements) {
            // console.log(parElement);
            parElement.innerHTML = 'Boo!';
        }

    });

const someFunction = function() {
    // better to use this version
}

const someFunction2 = () => {
    // commands, different sintex for arrow? functions
}

// setTimeout(function() { // setInterval repeats every 2 seconds
//     alert(123);
// }, 2000)

let timer = 0;
setInterval(function() {
    timer++;
    document.getElementById('timer').innerHTML = timer;
}, 1000)