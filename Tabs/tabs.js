var form = document.getElementById('create-tab-form');
form.addEventListener('submit', function (event) {
    event.preventDefault()

    let fname = document.getElementById('fullName').value;
    let job = document.getElementById('job').value;
    let email = document.getElementById('email').value;

    localStorage.setItem("fullName", fname);
    localStorage.setItem("job", job);
    localStorage.setItem("email", email);

    fname = isNameValid(fname); //TODO: Change func Name
    isemailValid(email);
    createCard();
    // cleanForm();
}
)

function isNameValid(fname) {
    if (fname.includes("פקיד")) {
        fname = fname.replace("פקיד", '');
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

function createCard() {
    if (localStorage.getItem("fullName").length >= 2 && localStorage.getItem("email").includes("@")) {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add('card');
        cardDiv.setAttribute("id", localStorage.getItem("fullName"));
        const cardName = document.createElement("p");
        cardName.classList.add('fullName');
        cardName.innerHTML = localStorage.getItem("fullName");
        const cardJob = document.createElement("p");
        cardJob.classList.add('job');
        cardJob.innerHTML = localStorage.getItem("job");
        const cardEmail = document.createElement("p");
        cardEmail.classList.add('email');
        cardEmail.innerHTML = localStorage.getItem("email");


        const btn = createDelBtn();

        cardDiv.appendChild(cardName);
        cardDiv.appendChild(cardJob);
        cardDiv.appendChild(cardEmail);
        cardDiv.appendChild(btn);
        cardContainer.appendChild(cardDiv);
    }
}

function cleanForm() {
    document.getElementById('fullName').value = '';
    document.getElementById('job').value = '';
    document.getElementById('email').value = '';
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