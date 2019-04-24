var i;
var kleurPaars = document.querySelector("body > header > section > label:nth-child(3)");

function showPaarsPlaatje() {

    var laatPaarsZien = document.querySelectorAll(".paars");

    if (zichtbaar == true) {
    for (i = 0; i < laatPaarsZien.length; i++) {
        laatPaarsZien[i].classList.toggle('zichtbaar');
    }
    }
    else {
        for (i = 0; i < laatPaarsZien.length; i++) {
        laatPaarsZien[i].classList.add('zichtbaar');
    }}
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





var kleurBlauw = document.querySelector("body > header > section > label:nth-child(7)");

function showBlauwPlaatje() {

    var laatBlauwZien = document.querySelectorAll(".blauw");

    for (i = 0; i < laatBlauwZien.length; i++) {
        laatBlauwZien[i].classList.toggle('zichtbaar');
    }
}

kleurBlauw.addEventListener("click", showBlauwPlaatje);





var kleurGroen = document.querySelector("body > header > section > label:nth-child(9)");

function showGroenPlaatje() {

    var laatGroenZien = document.querySelectorAll(".groen");

    for (i = 0; i < laatGroenZien.length; i++) {
        laatGroenZien[i].classList.toggle('zichtbaar');
    }
}

kleurGroen.addEventListener("click", showGroenPlaatje);





var kleurOranje = document.querySelector("body > header > section > label:nth-child(11)");

function showOranjePlaatje() {

    var laatOranjeZien = document.querySelectorAll(".oranje");

    for (i = 0; i < laatOranjeZien.length; i++) {
        laatOranjeZien[i].classList.toggle('zichtbaar');
    }
}

kleurOranje.addEventListener("click", showOranjePlaatje);





var kleurGeel = document.querySelector("body > header > section > label:nth-child(13)");

function showGeelPlaatje() {

    var laatGeelZien = document.querySelectorAll(".geel");

    for (i = 0; i < laatGeelZien.length; i++) {
        laatGeelZien[i].classList.toggle('zichtbaar');
    }
}

kleurGeel.addEventListener("click", showGeelPlaatje);





var kleurRood = document.querySelector("body > header > section > label:nth-child(15)");

function showRoodPlaatje() {

    var laatRoodZien = document.querySelectorAll(".rood");

    for (i = 0; i < laatRoodZien.length; i++) {
        laatRoodZien[i].classList.toggle('zichtbaar');
    }
}

kleurRood.addEventListener("click", showRoodPlaatje);
