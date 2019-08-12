// async function postUsers() {
//     let responce = await fetch('http://localhost:9999/users',{
//         method:'POST',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//     });
//     if (response.ok) {
//         let json = await responce.json();
//     } else {
//         alert ('Ошибка HTTP:' ${response.status});
//     }
//
// }
let button1 = document.getElementsByClassName('button')[0];
let firstBTN  = document.getElementsByClassName('firstBTN')[0];
let secondBTN  = document.getElementsByClassName('secondBTN')[0];
let  button2 = document.getElementsByClassName('button')[1];
let  button3 = document.getElementsByClassName('button')[2];
let  button4 = document.getElementsByClassName('button')[3];

button1.addEventListener('click',getUsers2,false );
button1.addEventListener('click',getUsers3,false );
// button1.addEventListener('click',getUsers4,false );
button2.addEventListener('click', postUser, false);
button3.addEventListener('click', putUser, false);
button4.addEventListener('click', deleteUser, false);


async function getUsers2() {
    let url = 'http://localhost:9999/users/2';
    try {
        let response = await fetch(url);
        let commits = await response.json(); // читаем ответ в формате JSON
        firstBTN.innerText = commits[0].login;
    } catch (e) {
        console.log('Возникда ошибка');
    }
}

//  function getUsers4() {
//     let url = 'http://localhost:9999/users/4';
//
//        fetch(url)
//            .then(response1 => response1.json())
//            .then (users => {
//                firstBTN.innerText = users[0].login;
//            })
//            .catch(error => {
//                console.log('Возникла ошибка в промисе: ' ${error});
//            })
// }

async function getUsers3() {
    let url = 'http://localhost:9999/users/3';
    try {
        let response = await fetch(url);
        let commits = await response.json(); // читаем ответ в формате JSON
        secondBTN.innerText = commits[0].login;
    } catch (e) {
        console.log('Возникла ошибка')
    }
}

async function postUser() {
     const user = {
         login: 'vanya',
         password: '178495',
         email: 'vanya@mail.ru'
     };
    let url = 'http://localhost:9999/users';
    let method  = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    };

    let response = await fetch(url, method);
    console.log(response.status);
}


async function deleteUser() {
    let url = 'http://localhost:9999/users/9';
    let method  = {
        method: 'DELETE',
    };

    let response = await fetch(url, method);
    console.log(response.status);
}



async function putUser() {
    const user = {
        login: 'lecha',
        password: '345634',
        email: 'lecha@mail.ru'
    };
    let url = 'http://localhost:9999/users/2';
    let method  = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    };

    let response = await fetch(url, method);
    console.log(response.status);
}


