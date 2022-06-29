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