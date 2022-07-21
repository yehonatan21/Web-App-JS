`use strict`

let form = document.getElementById('create-tab-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    let fname = document.getElementById('fullName').value;
    let job = document.getElementById('job').value;
    let email = document.getElementById('email').value;

    let NameLengthValid = checkNameLengthValidtion(fname);
    job = fixIfPakid(job);
    let emailValid = checkEmailValidtion(email);

    if (NameLengthValid && emailValid) {
        setToLocalStorage(fname, job, email);
        addToSavedCards(fname);
        createCard(fname);
        cleanForm();
    };
}
);

function checkNameLengthValidtion(fname) {

    if (fname.length < 2) {
        alert('Your name is less than 2 characters.');
        return false;
    } else {
        return true;
    };
};

function fixIfPakid(job) {

    if (job.includes("פקיד")) {
        job = job.replace("פקיד", '');
        if (job == '') {
            return '';
        };
    } else {
        return job;
    };
};

function checkEmailValidtion(email) {

    if (!email.includes("@")) {
        alert('The email is not valid.');
        return false;
    } else {
        return true;
    };
};

function cleanForm() {

    document.getElementById('fullName').value = '';
    document.getElementById('job').value = '';
    document.getElementById('email').value = '';
};

function arrayRemoveElementByValue(arr, value) {

    return arr.filter(function (ele) {
        return ele != value;
    });
};

function createDelBtn() {

    let delButton = document.createElement("button");
    delButton.classList.add('deleteBtn');
    delButton.innerHTML = "מחק כרטיס";

    delButton.addEventListener("click", function (event) {
        removeFromSavedCards(event);
        removeFromLocalStorage(event);
    });
    return delButton;
};

function appendCardToDoc(cardName, cardJob, cardEmail, deleteBtn, cardDiv) {

    cardDiv.appendChild(cardName);
    cardDiv.appendChild(cardJob);
    cardDiv.appendChild(cardEmail);
    cardDiv.appendChild(deleteBtn);
    cardContainer.appendChild(cardDiv);
};

function createCard(fname) {

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
    appendCardToDoc(cardName, cardJob, cardEmail, deleteBtn, cardDiv);
};

function readFromLocalStorage() {

    let storedNames = localStorage.getItem("names");
    if (storedNames != '') {
        storedNames = storedNames.split(',');
        storedNames = arrayRemoveElementByValue(storedNames, '');
        storedNames.forEach(item => {
            createCard(item);
        });
    };
};

function addToSavedCards(fname) {

    storedNames = localStorage.getItem('names');
    let names = [];
    if (storedNames == null) {
        names.push(fname);
    } else {
        storedNames = storedNames.split(',');
        storedNames.push(fname);
        names = storedNames;
    }
    localStorage.setItem('names', names);
};

function setToLocalStorage(fname, job, email) {
    localStorage.setItem(fname + '_' + "fullName", fname);
    localStorage.setItem(fname + '_' + "job", job);
    localStorage.setItem(fname + '_' + "email", email);
};

function removeFromSavedCards(event) {

    storedNames = localStorage.getItem('names');
    storedNames = storedNames.split(',');
    storedNames = arrayRemoveElementByValue(storedNames, event.target.parentElement.id);
    localStorage.setItem('names', storedNames);
};

function removeFromLocalStorage(event) {

    const elem = document.getElementById(event.target.parentElement.id);
    elem.remove();

    localStorage.removeItem(event.target.parentElement.id + '_' + "fullName");
    localStorage.removeItem(event.target.parentElement.id + '_' + "job");
    localStorage.removeItem(event.target.parentElement.id + '_' + "email");
};

readFromLocalStorage();