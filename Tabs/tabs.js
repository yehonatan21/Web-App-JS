
//TODO: create list of names and save it to localStorage 

let form = document.getElementById('create-tab-form');
form.addEventListener('submit', function (event) {
    event.preventDefault()

    let names = [];
    let fname = document.getElementById('fullName').value;
    let job = document.getElementById('job').value;
    let email = document.getElementById('email').value;

    let NameValid = isNameValid(fname);
    if (NameValid) {
        fname = NameValid
    }
    let NameLengthValid = isNameLengthValid(fname);
    let emailValid = isemailValid(email);

    if (NameValid && NameLengthValid && emailValid) {
        localStorage.setItem(fname + '_' + "fullName", fname);
        localStorage.setItem(fname + '_' + "job", job);
        localStorage.setItem(fname + '_' + "email", email);
        names.push(localStorage.getItem('names'));
        names.push(fname);
        localStorage.setItem('names', names)
        console.log(names);
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

function isNameValid(fname) {
    if (fname.includes("פקיד")) {
        fname = fname.replace("פקיד", '');
        if (fname.length < 2) {
            alert('The value פקיד removed and now its less then 2 characters. Please choose new name.');
            return false;
        } else {
            return fname;
        }
    } else {
        return fname;
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
    }
}

function cleanForm() {
    document.getElementById('fullName').value = '';
    document.getElementById('job').value = '';
    document.getElementById('email').value = '';
}

function createDelBtn() {
    let button = document.createElement("button");
    button.classList.add('deleteBtn');
    button.innerHTML = "Delete";

    let body = document.getElementsByTagName("body")[0];
    body.appendChild(button);

    button.addEventListener("click", function (event) {
        const elem = document.getElementById(event.target.parentElement.id);
        elem.remove();
    })
    return button;
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
    cardName.innerHTML = localStorage.getItem(fname + '_' + "fullName");
    const cardJob = document.createElement("p");
    cardJob.classList.add('job');
    cardJob.innerHTML = localStorage.getItem(fname + '_' + "job");
    const cardEmail = document.createElement("p");
    cardEmail.classList.add('email');
    cardEmail.innerHTML = localStorage.getItem(fname + '_' + "email");

    const deleteBtn = createDelBtn();
    appendToDoc(cardName, cardJob, cardEmail, deleteBtn, cardDiv);
}

function readFromLocalStorage() {
    let storedNames = localStorage.getItem("names");
    storedNames = storedNames.split(',')
    console.log(storedNames);
    for (i = 0; i < storedNames.length; i++) {
        cardContant(storedNames[i])
    }
}

readFromLocalStorage();