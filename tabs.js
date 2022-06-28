var form = document.getElementById('create-tab-form');
form.addEventListener('submit', function (event) {
    event.preventDefault()

    let fname = document.getElementById('fullName').value;
    let job = document.getElementById('job').value;
    let email = document.getElementById('email').value;

    if (fname.length < 2) {
        alert('Your name is less than 2 characters.');
    }
    if (!email.includes("@")) {
        alert('The email is not valid.');
    }
    
    if (fname.length >= 2 && email.includes("@")) {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add('card')
        const cardName = document.createElement("p");
        cardName.classList.add('fullName')
        cardName.innerHTML = fname;
        const cardJob = document.createElement("p");
        cardJob.classList.add('job')
        cardJob.innerHTML = job;
        const cardEmail = document.createElement("p");
        cardEmail.classList.add('email')
        cardEmail.innerHTML = email;

        cardDiv.appendChild(cardName);
        cardDiv.appendChild(cardJob);
        cardDiv.appendChild(cardEmail);
        document.body.append(cardDiv);
    }
})