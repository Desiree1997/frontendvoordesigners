var i;
var kleurPaars = document.querySelector("body > header > section > label:nth-child(3)");

function showPaarsPlaatje() {

    var laatPaarsZien = document.querySelectorAll(".paars");

    for (i = 0; i < laatPaarsZien.length; i++) {
        laatPaarsZien[i].classList.toggle('zichtbaar');
    }
}

kleurPaars.addEventListener("click", showPaarsPlaatje);


var kleurRoze = document.querySelector("body > header > section > label:nth-child(5)");

function showRozePlaatje() {

    var laatRozeZien = document.querySelectorAll(".roze");

    for (i = 0; i < laatRozeZien.length; i++) {
        laatRozeZien[i].classList.toggle('zichtbaar');
    }
}

kleurRoze.addEventListener("click", showRozePlaatje);

/*
var i;
var kleurPaars = document.querySelector("body > header > section > label:nth-child(3)");

function showPaarsPlaatje() {

    var laatPaarsZien = document.querySelectorAll(".paars");


    if (kleurPaars.checked === true) {

    }

    else {
        for (i = 0; i < laatPaarsZien.length; i++) {
            laatPaarsZien[i].classList.toggle('paars');
        }
    }
}
kleurPaars.addEventListener("click", showPaarsPlaatje);
*/
