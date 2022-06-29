var form = document.getElementById('create-tab-form');
form.addEventListener('submit', function (event) {
    event.preventDefault()

    let fname = document.getElementById('fullName').value;
    let job = document.getElementById('job').value;
    let email = document.getElementById('email').value;

    fname = isNameValid(fname); //TODO: Change func Name
    isemailValid(email);
    createCard(fname, job, email);
})

function isNameValid(fname) {
    if (fname.includes("פקיד")) {
        fname = fname.replace("פקיד", ' ');
    }
    if (fname.length < 2) {
        alert('Your name is less than 2 characters.');
    }
    return fname;
};

function isemailValid(email) {
    if (!email.includes("@")) {
        alert('The email is not valid.');
    }
}

function createCard(fname, job, email) {
    if (fname.length >= 2 && email.includes("@")) {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add('card');
        cardDiv.setAttribute("id", fname);
        const cardName = document.createElement("p");
        cardName.classList.add('fullName');
        cardName.innerHTML = fname;
        const cardJob = document.createElement("p");
        cardJob.classList.add('job');
        cardJob.innerHTML = job;
        const cardEmail = document.createElement("p");
        cardEmail.classList.add('email');
        cardEmail.innerHTML = email;

        const btn = createDelBtn();

        cardDiv.appendChild(cardName);
        cardDiv.appendChild(cardJob);
        cardDiv.appendChild(cardEmail);
        cardDiv.appendChild(btn);
        cardContainer.appendChild(cardDiv);
    }
}

function createDelBtn() {
    var button = document.createElement("button");
    button.classList.add('deleteBtn');
    button.innerHTML = "Delete";

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);

    button.addEventListener("click", function (event) {
        const elem = document.getElementById(event.target.parentElement.id);
        elem.remove();
    })
    return button;
};