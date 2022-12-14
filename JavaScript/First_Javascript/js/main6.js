// console.log(window);
// console.log(document);
// DOM - document object model

function changeColor() {
    const h2Element = document.getElementById('important-h2-element');
    // console.log(h2Element);
    // h2Element.style.color = 'purple'; // value always as string
    if (h2Element.style.color === 'purple') {
        h2Element.style.color = 'black';
        h2Element.style.fontSize = '24px';
        h2Element.innerText = 'Some h2 Element again!';
    } else {
        h2Element.style.color = 'purple';
        h2Element.style.fontSize = '36px';
        h2Element.innerText = 'Hello World!';
    }
}