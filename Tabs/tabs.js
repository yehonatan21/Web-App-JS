`use strict`

let form = document.getElementById('create-tab-form');
form.addEventListener('submit', function (event) {
    event.preventDefault()

    let fname = document.getElementById('fullName').value;
    let job = document.getElementById('job').value;
    let email = document.getElementById('email').value;

    let NameLengthValid = isNameLengthValid(fname);
    job = isJobValid(job);
    if (job == undefined) {
        job = '';
    }
    let emailValid = isemailValid(email);

    if (NameLengthValid && emailValid) {
        localStorage.setItem(fname + '_' + "fullName", fname);
        localStorage.setItem(fname + '_' + "job", job);
        localStorage.setItem(fname + '_' + "email", email);
        storedNames = localStorage.getItem('names');

        let names = [];
        if (storedNames == null) {
            names.push(fname);
        } else {
            storedNames = storedNames.split(',')
            storedNames.push(fname);
            names = storedNames;
        }
        localStorage.setItem('names', names)
        createCard(fname);
    }
    cleanForm();
}
)

function isNameLengthValid(fname) {
    
    if (fname.length < 2) {
        alert('Your name is less than 2 characters.');
        return false;
    } else {
        return true;
    }
}

function isJobValid(job) {

    if (job.includes("פקיד")) {
        job = job.replace("פקיד", '');
    } else {
        return job;
    }
};

function isemailValid(email) {

    if (!email.includes("@")) {
        alert('The email is not valid.');
        return false;
    } else {
        return true;
    }
}

function createCard(fname) {

    if (localStorage.getItem(fname + '_' + "fullName").length >= 2 && localStorage.getItem(fname + '_' + "email").includes("@")) {
        cardContant(fname);
        fixCardMargin();
    }
}

function cleanForm() {

    document.getElementById('fullName').value = '';
    document.getElementById('job').value = '';
    document.getElementById('email').value = '';
}

function arrayRemove(arr, value) {

    return arr.filter(function (ele) {
        return ele != value;
    });
}

function createDelBtn() {

    let delButton = document.createElement("button");
    delButton.classList.add('deleteBtn');
    delButton.innerHTML = "מחק כרטיס";

    let body = document.getElementsByTagName("body")[0];
    body.appendChild(delButton);

    delButton.addEventListener("click", function (event) {
        storedNames = localStorage.getItem('names');
        storedNames = storedNames.split(',');
        storedNames = arrayRemove(storedNames, event.target.parentElement.id);
        localStorage.setItem('names', storedNames)

        const elem = document.getElementById(event.target.parentElement.id);
        elem.remove();

        localStorage.removeItem(event.target.parentElement.id + '_' + "fullName")
        localStorage.removeItem(event.target.parentElement.id + '_' + "job")
        localStorage.removeItem(event.target.parentElement.id + '_' + "email")
    })
    return delButton;
};

function appendToDoc(cardName, cardJob, cardEmail, deleteBtn, cardDiv) {

    cardDiv.appendChild(cardName);
    cardDiv.appendChild(cardJob);
    cardDiv.appendChild(cardEmail);
    cardDiv.appendChild(deleteBtn);
    cardContainer.appendChild(cardDiv);
}

function cardContant(fname) {

    const cardDiv = document.createElement("div");
    cardDiv.classList.add('card');
    cardDiv.setAttribute("id", localStorage.getItem(fname + '_' + "fullName"));

    const cardName = document.createElement("p");
    cardName.classList.add('fullName');
    cardName.innerHTML = `שם: ${localStorage.getItem(fname + '_' + "fullName")}`;
    const cardJob = document.createElement("p");
    cardJob.classList.add('job');
    cardJob.innerHTML = `עבודה: ${localStorage.getItem(fname + '_' + "job")}`;
    const cardEmail = document.createElement("p");
    cardEmail.classList.add('email');
    cardEmail.innerHTML = `מייל: ${localStorage.getItem(fname + '_' + "email")}`;

    const deleteBtn = createDelBtn(fname);
    appendToDoc(cardName, cardJob, cardEmail, deleteBtn, cardDiv);
}

function readFromLocalStorage() {

    let storedNames = localStorage.getItem("names");
    if (storedNames != '') {
        storedNames = storedNames.split(',')
        storedNames = arrayRemove(storedNames, '')
        for (i = 0; i < storedNames.length; i++) {
            cardContant(storedNames[i])
        }
    }
}

function fixCardMargin() {

    let card = document.querySelector('.card');
    let cardStyle = getComputedStyle(card);
    let cardWidth = cardStyle.width;
    cardWidth = cardWidth.replace("px", '');
    cardWidth = parseInt(cardWidth);

    let container = document.querySelector('#cardContainer');
    let containerStyle = getComputedStyle(container);
    let containerWidth = containerStyle.width;
    containerWidth = containerWidth.replace("px", '');
    containerWidth = parseInt(containerWidth);

    let rowLength = Math.floor(containerWidth / (cardWidth - 50)); // FIXME: replace 50 in margin-right
    console.log(document.querySelectorAll(".card").length); // update after creating cards

    // TODO: 
    // let cards = document.querySelectorAll(".card").length;
    // console.log(containerWidth); // update after creating cards
    // console.log(containerWidth / (document.querySelectorAll(".card").length*200)); // update after creating cards

    let nthChild = document.querySelectorAll(`.card:nth-child(${rowLength}`);
    document.getElementById(nthChild[0].id).style.marginRight = "0";
}

readFromLocalStorage();
// fixCardMargin();