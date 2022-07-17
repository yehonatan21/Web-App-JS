`use strict`

let palindromeForm = document.getElementById('palindrome');
palindromeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let filterValue = document.getElementById('palindrome-input').value;
    let cond = isPalindrome(filterValue);
    changeInputBackground(cond);
})

function isPalindrome(str) {
    let len = str.length;
    let mid = Math.floor(len / 2);

    if(str.length == 1){
        return true;
    }

    for (let i = 0; i < mid; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        } else {
            return true;
        }
    }
}

function changeInputBackground(cond) {
    if (cond) {
        document.getElementById('palindrome-input').style.backgroundColor = 'rgb(109, 204, 109)';
    } else {
        document.getElementById('palindrome-input').style.backgroundColor = 'rgb(214, 90, 90)';

    }
}

let form = document.getElementById('letters');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    let lettersInput = document.getElementById('letters-input').value;
    let numberInput = document.getElementById('number-input').value;
    numberInput = parseInt(numberInput);
    lettersInput = lettersInput.split('');

    if (event.submitter.id == 'Encrypt') {
        let encryptStr = [];
        for (i = 0; i < lettersInput.length; i++) {
            if (((lettersInput[i].charCodeAt(0)) + numberInput) > 122) {
                encryptStr.push(String.fromCharCode((((lettersInput[i].charCodeAt(0)) + numberInput) - 26)));
            } else {
                encryptStr.push(String.fromCharCode((((lettersInput[i].charCodeAt(0)) + numberInput))));
            }
        }
        encryptStr = encryptStr.join('');

        const cardDiv = document.createElement("div");
        cardDiv.classList.add('card');
        cardDiv.setAttribute("id", encryptStr);
        cardDiv.innerHTML = encryptStr;
        cardContainer.appendChild(cardDiv);

    } else {
        let decryptStr = [];
        for (i = 0; i < lettersInput.length; i++) {
            console.log(((lettersInput[i].charCodeAt(0)) - numberInput))
            if (((lettersInput[i].charCodeAt(0)) - numberInput) < 97) {
                decryptStr.push(String.fromCharCode((((lettersInput[i].charCodeAt(0)) - numberInput) + 26)));
            } else {
                decryptStr.push(String.fromCharCode((((lettersInput[i].charCodeAt(0)) - numberInput))));
            }
        }
        decryptStr = decryptStr.join("");

        const cardDiv = document.createElement("div");
        cardDiv.classList.add('card');
        cardDiv.setAttribute("id", decryptStr);
        cardDiv.innerHTML = decryptStr;
        cardContainer.appendChild(cardDiv);

    }
})