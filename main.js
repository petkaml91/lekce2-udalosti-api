// tady je místo pro náš program

let lev = document.querySelector("p");

function priNajeti() {
    lev.style.fontWeight = 'bold';
}

function priOdjeti() {
    lev.style.fontWeight = 'normal';
}

function priKliknuti() {
    lev.classList.toggle('cervena');
}

function zvetseni() {
    let textKeZvetseni = lev.style.fontSize;
    //console.log(textKeZvetseni);
    textKeZvetseni = parseInt(textKeZvetseni);
    textKeZvetseni++;
    //console.log(textKeZvetseni);
    lev.style.fontSize = textKeZvetseni.toString() + "px";
}

function prehraj(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.play();
}

function zastav(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
}

function ticho(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0;
}

function tissi(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0.5;
}

function normal(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 1;
}

function zacatek(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.currentTime = 0;
}