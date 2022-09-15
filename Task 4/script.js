/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const response = fetch(ENDPOINT);
const output = document.getElementById('output');

response
.then((res) => res.json())
.then((data) => {
    const ulElement = document.createElement('ul');

    data.forEach((userData) => {
        const liElement = document.createElement('li');
        liElement.textContent = `${userData.brand}`;
        ulElement.append(liElement);
        liElement.style.textAlign = 'center';
        liElement.style.fontSize = 'large';
        liElement.style.padding = '15px';
        liElement.style.border = 'solid';
        liElement.style.borderBottom = 'none';

        const newElement = document.createElement('p');
        newElement.textContent = `${userData.models}`;
        ulElement.append(newElement);
        newElement.style.textAlign = 'center';
        newElement.style.border = 'solid';
        newElement.style.borderTop = 'none';
        newElement.style.padding = '20px';
    });
    
    output.append(ulElement);
    document.body.style.maxWidth = '500px';
    document.body.style.margin = 'auto';
});