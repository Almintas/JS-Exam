/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const enterNumber = document.getElementById('search');
const form = document.querySelector('form');
const output = document.getElementById('output');
const button = document.getElementById('submit-btn');

const convertToPounds = (kg) => {
    return kg * 2.2046
};

const convertToGrams = (kg) => {
    return kg / 0.0010000
};

const convertToOunce = (kg) => {
    return kg * 35.274
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const kilogramAmount = enterNumber.value;
    const amountPounds = convertToPounds(kilogramAmount);
    const amountGrams = convertToGrams(kilogramAmount);
    const amountOunces = convertToOunce(kilogramAmount);
    
    const pounds = document.createElement('h2');
    pounds.textContent = `Pounds: ${amountPounds}`;
    const grams = document.createElement('h2');
    grams.textContent = `Grams: ${amountGrams}`;
    const ounces = document.createElement('h2');
    ounces.textContent = `Ounces: ${amountOunces}`;

    output.append(pounds);
    output.append(grams);
    output.append(ounces);

    output.style.paddingLeft = '205px';
    output.style.backgroundColor = 'white';
});