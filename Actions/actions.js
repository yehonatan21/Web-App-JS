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

var cardContainer = document.getElementById('cardContainer');
createCard(usersArray)

function createCard(usersArray) {
    for (let i = 0; i < usersArray.length; i++) {
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

        cardDiv.appendChild(name);
        cardDiv.appendChild(age);
        cardDiv.appendChild(isAdmin);
        cardDiv.appendChild(grades);
        cardDiv.appendChild(address);
        cardContainer.appendChild(cardDiv);
    }
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
    for (let j = 0; j < grades.length; j++) {
        averageGrades = averageGrades + grades[j];
    }
    averageGrades = averageGrades / (grades.length + 1);
    console.log(averageGrades);
    return averageGrades;
}


var form = document.getElementById('find');
form.addEventListener('click', function (event) {
    event.preventDefault();
    let selector = getSelectorValue();
    let filterValue = getFilterValue();

    switch (selector) {
        case 'Age':
            filterValue = parseInt(filterValue);
            if (isFilterValueNaN(filterValue)) {
                alert('Please insert a number');
            } else {
                for (let i = 0; i < usersArray.length; i++) {
                    if (filterValue > usersArray[i].age) {
                        document.getElementById(usersArray[i].name).style.display = "none";
                    }
                }
            }
            break;

        case 'Name': //TODO: MAKE case sensetive
            console.log('Name');
            for (let i = 0; i < usersArray.length; i++) {
                if (filterValue != usersArray[i].name) {
                    document.getElementById(usersArray[i].name).style.display = "none";
                }
            }
            break;

        case 'Admin':
            filterValue = filterValue.toLowerCase()
            if (filterValue == "true") {
                console.log("2")
                for (let i = 0; i < usersArray.length; i++) {
                    if (usersArray[i].admin == false) {
                        document.getElementById(usersArray[i].name).style.display = "none";
                    }
                }
            }
            else if (filterValue == "false") {
                console.log("3")
                for (let i = 0; i < usersArray.length; i++) {
                    if (usersArray[i].admin == true) {
                        document.getElementById(usersArray[i].name).style.display = "none";
                    }
                }
            } else {
                alert('Only True or False')
            }
            break;

        case 'Grades':
            filterValue = parseInt(filterValue);
            if (isFilterValueNaN(filterValue)) {
                alert('Please insert a number');
            } else {
                for (let i = 0; i < usersArray.length; i++) {
                    let avgGraed = averageGrades(usersArray[i].grades)
                    if (avgGraed < filterValue) {
                        console.log("the cond is true");
                        document.getElementById(usersArray[i].name).style.display = "none";
                    }
                }
            }
            break;

        case 'Address':
            let filterValue = getFilterValue();

            var myArray = filterValue.split(".");
            // console.log(myArray);
            myArray[0] = myArray[0].toLowerCase()


            if (myArray[0] == 'city') {
                console.log('city');
                for (let i = 0; i < usersArray.length; i++) {
                    if (myArray[1] != usersArray[i].address.city) {
                        document.getElementById(usersArray[i].name).style.display = "none";
                    }
                }
            }

            else if (myArray[0] == 'housenumber') {
                myArray[1] = parseInt(myArray[1]);
                console.log(myArray[1]);

                if (typeof myArray[1] == 'number') {
                    if (!isNaN(myArray[1])) {
                        for (let i = 0; i < usersArray.length; i++) {
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
            break;
    }
}
)

var form = document.getElementById('all-grades-greater-than');
form.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('All Grades Greater Than');
    let filterValue = getFilterValue();
    let getFilterValueNaN = isFilterValueNaN(filterValue);
}
)
var form = document.getElementById('some-grades-greater-than');
form.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Some Grades Greater Than');
}
)
var form = document.getElementById('array-filter-and-manipulation');
form.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Array Filter And Manipulation');
}
)
