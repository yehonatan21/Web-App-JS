`use strict`

let palindromeForm = document.getElementById('palindrome');
palindromeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let filterValue = document.getElementById('palindrome-input').value;
    let isInputPalindrome = isPalindrome(filterValue); //TODO: change names
    changeInputBackground(isInputPalindrome);
});

function isPalindrome(str) {
    let len = str.length;
    let mid = Math.floor(len / 2);

    if (str.length == 1) {
        return true;
    };

    for (i = 0; i < mid; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        } else {
            return true;
        };
    };
};

function changeInputBackground(isInputPalindrome) {
    if (isInputPalindrome) {
        document.getElementById('palindrome-input').style.backgroundColor = 'rgb(109, 204, 109)';
    } else {
        document.getElementById('palindrome-input').style.backgroundColor = 'rgb(214, 90, 90)';
    };
};

let lettersForm = document.getElementById('letters-form');
lettersForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let lettersInput = document.getElementById('letters-input').value;
    let numberInput = document.getElementById('number-input').value;

    if (checkIfOnlyLetters(lettersInput)) {
        numberInput = parseInt(numberInput);
        lettersInput = lettersInput.split('');
        if (event.submitter.id == 'Encrypt') {
            encryptedLetters = encryptLetters(numberInput, lettersInput);
            appendCardToDoc(encryptedLetters);
            cleanForm()
        }
        else if (event.submitter.id == 'Decrypt') {
            decryptedLetters = decryptLetters(numberInput, lettersInput);
            appendCardToDoc(decryptedLetters);
            cleanForm()
        }
    } else {
        alert("Please enter letters only");
    }
})

function encryptLetters(numberInput, lettersInput) {
    //FIXME: to forEach
    let encryptStr = [];
    for (i = 0; i < lettersInput.length; i++) {
        if (((lettersInput[i].charCodeAt(0)) + numberInput) > 122) {
            encryptStr.push(String.fromCharCode((((lettersInput[i].charCodeAt(0)) + numberInput) - 26)));
        } else {
            encryptStr.push(String.fromCharCode((((lettersInput[i].charCodeAt(0)) + numberInput))));
        };
    };
    encryptStr = encryptStr.join('');
    return encryptStr;
}

function decryptLetters(numberInput, lettersInput) {

    let decryptStr = [];
    //FIXME: to forEach
    for (i = 0; i < lettersInput.length; i++) {
        if (((lettersInput[i].charCodeAt(0)) - numberInput) < 97) {
            decryptStr.push(String.fromCharCode((((lettersInput[i].charCodeAt(0)) - numberInput) + 26)));
        } else {
            decryptStr.push(String.fromCharCode((((lettersInput[i].charCodeAt(0)) - numberInput))));
        }
    }
    decryptStr = decryptStr.join('');
    return decryptStr;
}

function appendCardToDoc(str) {

    const cardDiv = document.createElement("div");
    cardDiv.classList.add('card');
    cardDiv.setAttribute("id", str);
    cardDiv.innerHTML = str;
    cardContainer.appendChild(cardDiv);
}

function cleanForm() {

    document.getElementById('letters-input').value = '';
    document.getElementById('number-input').value = '';
}

function checkIfOnlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
}