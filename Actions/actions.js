`use strict`

const usersArray = [
    {
        age: 16,
        name: 'yossi',
        admin: true,
        grades: [20, 23, 50, 30],
        address: {
            city: 'ashdod',
            houseNumber: 12
        }
    },
    {
        age: 25,
        name: 'yael',
        admin: false,
        grades: [50, 16, 100, 78],
        address: {
            city: 'ashdod',
            houseNumber: 8
        }
    },
    {
        age: 22,
        name: 'idan',
        admin: false,
        grades: [100, 100, 100, 30],
        address: {
            city: 'tel aviv',
            houseNumber: 40
        }
    },
    {
        age: 29,
        name: 'yarden king',
        admin: true,
        grades: [99, 99, 99, 99],
        address: {
            city: 'kfar bialik',
            houseNumber: 1
        }
    },
    {
        age: 34,
        name: 'banu',
        admin: true,
        grades: [100, 100, 100, 100],
        address: {
            city: 'ashdod',
            houseNumber: 16
        }
    },
    {
        age: 57,
        name: 'nabetjs',
        admin: false,
        grades: [3, 16, 0, 30],
        address: {
            city: 'tel aviv',
            houseNumber: 12
        }
    },
    {
        age: 15,
        name: 'rongular',
        admin: true,
        grades: [92, 87, 69, 84],
        address: {
            city: 'yafo',
            houseNumber: 12
        }
    },
    {
        age: 10,
        name: 'david',
        admin: false,
        grades: [20, 23, 50, 30],
        address: {
            city: 'ashdod',
            houseNumber: 12
        }
    },
    {
        age: 66,
        name: 'liad',
        admin: false,
        grades: [92, 76, 77, 82],
        address: {
            city: 'beit dagan',
            houseNumber: 112
        }
    },
    {
        age: 34,
        name: 'happy',
        admin: true,
        grades: [54, 23, 100, 30],
        address: {
            city: 'beit dagan',
            houseNumber: 112
        }
    },
]

//TODO: check if can replace for loops to forEach

createCards(usersArray)

function createCards(usersArray) {
    for (i = 0; i < usersArray.length; i++) {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add('card');
        cardDiv.setAttribute("id", usersArray[i].name);

        const name = document.createElement("p");
        name.classList.add('name');
        name.innerHTML = `Name: ${usersArray[i].name}`;

        const age = document.createElement("p");
        age.classList.add('age');
        age.innerHTML = `Age: ${usersArray[i].age}`;

        const isAdmin = document.createElement("p");
        isAdmin.classList.add('admin');
        isAdmin.innerHTML = `Admin: ${usersArray[i].admin}`;

        const grades = document.createElement("p");
        grades.classList.add('grades');
        grades.innerHTML = `Grades: ${usersArray[i].grades}`;

        const address = document.createElement("p");
        address.classList.add('address');

        const myJSON = JSON.stringify(usersArray[i].address);
        address.innerHTML = `Address: ${myJSON}`;

        addCardToDom(cardDiv, name, age, isAdmin, grades, address)
    }
}

let formValue = document.getElementById('select-filter');
formValue.addEventListener('submit', function (event) {
    event.preventDefault();
    let selector = getSelectorValue();
    let filterValue = getFilterValue();
    let FilterValueNaN = isFilterValueNaN(filterValue);

    switch (event.submitter.id) {
        case 'find':
            console.log(event.submitter.id)
            switch (selector) {

                case 'Age':
                    filterCardsByAge(filterValue);
                    break;

                case 'Name':
                    filterCardsByName(filterValue);
                    break;

                case 'Admin':
                    filterCardsByAdmin(filterValue);
                    break;

                case 'Grades':
                    filterByGradesHigherThan(filterValue);
                    break;

                case 'Address':
                    filterByAddress(filterValue);
                    break;
            }
            break;

        case 'all-grades-greater-than':
            console.log(event.submitter.id)
            if (FilterValueNaN) {
                alert('Numbers Only');
            } else {
                for (i = 0; i < usersArray.length; i++) {
                    if ((Math.min(...usersArray[i].grades)) < filterValue) {
                        document.getElementById(usersArray[i].name).style.display = "none";
                    }
                }
            }
            break;

        case 'some-grades-greater-than':
            if (FilterValueNaN) {
                alert('Numbers Only');
            } else {
                for (i = 0; i < usersArray.length; i++) {
                    for (j = 0; j < usersArray[i].grades[j]; j++) {
                        if (usersArray[i].grades[j] > filterValue) {
                            break;
                        } else if (j + 1 == usersArray[i].grades.length) {
                            document.getElementById(usersArray[i].name).style.display = "none";
                        }
                    }
                }
            }
            break;

        case 'array-filter-and-manipulation':
            console.log(event.submitter.id)
            if (FilterValueNaN) {
                alert('Numbers Only');
            } else {
                for (i = 0; i < usersArray.length; i++) {
                    let avgGraed = averageGrades(usersArray[i].grades)
                    if (avgGraed > filterValue) {
                        document.getElementById(usersArray[i].name).style.display = "none";
                    } else if (filterValue > usersArray[i].address.houseNumber) {
                        document.getElementById(usersArray[i].name).style.display = "none";
                    } else {
                        let age = document.getElementById(usersArray[i].name).getElementsByClassName("age")[0];
                        filterValue = parseInt(filterValue);
                        usersArray[i].age = parseInt(usersArray[i].age);
                        age.textContent = usersArray[i].age + filterValue;
                    }
                }
            }
            break;
    }
})

function addCardToDom(cardDiv, name, age, isAdmin, grades, address) {
    cardDiv.appendChild(name);
    cardDiv.appendChild(age);
    cardDiv.appendChild(isAdmin);
    cardDiv.appendChild(grades);
    cardDiv.appendChild(address);
    cardContainer.appendChild(cardDiv);
}

function getFilterValue() {
    return document.getElementById('filter-value').value;
}

function isFilterValueNaN(filterValue) {
    if (isNaN(filterValue)) {
        return true;
    } else {
        return false;
    }
}

function getSelectorValue() {
    return document.getElementById('fileds').value;
}

function averageGrades(grades) {
    let averageGrades = 0;
    for (j = 0; j < grades.length; j++) {
        averageGrades = averageGrades + grades[j];
    }
    averageGrades = averageGrades / (grades.length + 1);
    return averageGrades;
}

function filterCardsByAge(filterValue) {

    filterValue = parseInt(filterValue);
    if (isFilterValueNaN(filterValue)) {
        alert('Please insert a number');
    } else {
        for (i = 0; i < usersArray.length; i++) {
            if (filterValue > usersArray[i].age) {
                document.getElementById(usersArray[i].name).style.display = "none";
            }
        }
    }
}

function filterCardsByName(filterValue) {

    filterValue = filterValue.toLowerCase();
    for (i = 0; i < usersArray.length; i++) {
        if (filterValue != usersArray[i].name) {
            document.getElementById(usersArray[i].name).style.display = "none";
        }
    }
}

function filterCardsByAdmin(filterValue) {

    filterValue = filterValue.toLowerCase()
    if (filterValue == "true") {
        for (i = 0; i < usersArray.length; i++) {
            if (usersArray[i].admin == false) {
                document.getElementById(usersArray[i].name).style.display = "none";
            }
        }
    }
    else if (filterValue == "false") {
        for (i = 0; i < usersArray.length; i++) {
            if (usersArray[i].admin == true) {
                document.getElementById(usersArray[i].name).style.display = "none";
            }
        }
    } else {
        alert('Only True or False')
    }
}

function filterByGradesHigherThan(filterValue) {

    filterValue = parseInt(filterValue);
    if (isFilterValueNaN(filterValue)) {
        alert('Please insert a number');
    } else {
        for (i = 0; i < usersArray.length; i++) {
            let avgGraed = averageGrades(usersArray[i].grades)
            if (avgGraed < filterValue) {
                document.getElementById(usersArray[i].name).style.display = "none";
            }
        }
    }
}

function filterByAddress(filterValue) {

    var myArray = filterValue.split(".");
    myArray[0] = myArray[0].toLowerCase()
    if (myArray[0] == 'city') {
        for (i = 0; i < usersArray.length; i++) {
            if (myArray[1] != usersArray[i].address.city) {
                document.getElementById(usersArray[i].name).style.display = "none";
            }
        }
    }
    else if (myArray[0] == 'housenumber') {
        myArray[1] = parseInt(myArray[1]);
        if (typeof myArray[1] == 'number') {
            if (!isNaN(myArray[1])) {
                for (i = 0; i < usersArray.length; i++) {
                    if (myArray[1] != usersArray[i].address.houseNumber) {
                        document.getElementById(usersArray[i].name).style.display = "none";
                    }
                }
            } else {
                alert('House Number Takes only numbers');
            }
        } else {
            alert('House Number Takes only numbers');
        }

    } else {
        alert('Only City or House Number');
    }
}