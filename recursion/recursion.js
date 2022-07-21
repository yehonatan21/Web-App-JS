`use strict`

let fibForm = document.getElementById('fib-form');
fibForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let nthInput = document.getElementById('fib-n').value;
    nth = nthFib(nthInput)
    addToDoc(nthInput, nth)
})

function nthFib(n) {
    if (n == 1 || n == 0) {
        return n;
    }
    else {
        return nthFib(n - 1) + nthFib(n - 2)
    }
}

function addToDoc(nth, content) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add('card');
    cardDiv.setAttribute("id", content);
    cardDiv.innerHTML = `fibonacci series ${nth}th: <br>${content}`;
    cardContainer.appendChild(cardDiv);
}

