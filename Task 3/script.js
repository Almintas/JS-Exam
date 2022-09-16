/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const button = document.getElementById('btn');
const output = document.getElementById('output');
const deleteMessage = document.getElementById('message');

button.addEventListener('click', () => {
    spawnElements();
});

const spawnElements = (users) => {
    const response = fetch(ENDPOINT);

    response
        .then((res) => res.json())
        .then((data) => {
            data.forEach((users) => {
                const loginElement = document.createElement('h2');
                loginElement.textContent = `${users.login}`;

                const imgSrc = users.avatar_url;
                const imgElement = document.createElement('img');
                imgElement.src = imgSrc;

                output.appendChild(loginElement);
                output.appendChild(imgElement);

                deleteMessage.remove();

                
            });
        });
};
