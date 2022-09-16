/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const count = document.getElementById('btn__state');
const button = document.getElementById('btn__element');

let state = 0;

const increaseCount = () => {
    state += 1;
    count.innerHTML = state;
}


button.addEventListener('click', increaseCount);