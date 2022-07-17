`use strict`

let form = document.getElementById('fib');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let n = document.getElementById('number-input').value;
    n = fib(n)
    addToDoc(n)
})


function fib(n) {
    if (n == 1 || n == 0) {
        return n;
    }
    else {
        return fib(n - 1) + fib(n - 2)
    }
}

function addToDoc(content) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add('card');
    cardDiv.setAttribute("id", content);
    cardDiv.innerHTML = content;
    cardContainer.appendChild(cardDiv);
}

