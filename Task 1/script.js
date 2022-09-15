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

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const kilogramAmount = enterNumber.value;
    const amountPounds = convertToPounds(kilogramAmount);
    const amountGrams = convertToGrams(kilogramAmount);
    const amountOunces = convertToOunce(kilogramAmount);
});

const convertToPounds = (kg) => {
    return kg * 2.2046
};

const convertToGrams = (kg) => {
    return kg / 0.0010000
}

const convertToOunce = (kg) => {
    return kg * 35.274
}