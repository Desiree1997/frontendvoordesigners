var i;
var alleKleuren = document.querySelector("body > header > section > label:nth-child(3)");

    function showAllePlaatjes() {

        var laatAlleZien = document.querySelector("main");

        laatAlleZien.classList.toggle('alles');

    }

alleKleuren.addEventListener("click", showAllePlaatjes);





var kleurPaars = document.querySelector("body > header > section > label:nth-child(5)");

function showPaarsPlaatje() {

    document.querySelector('main').classList.remove('alles');
    //document.querySelector[name="alles"].checked.remove(:checked);

    var laatPaarsZien = document.querySelectorAll(".paars");

    for (i = 0; i < laatPaarsZien.length; i++) {
        //laatPaarsZien[i].classList.add('onzichtbaar');
        laatPaarsZien[i].classList.toggle('zichtbaar');

    }
}

kleurPaars.addEventListener("click", showPaarsPlaatje);





var kleurRoze = document.querySelector("body > header > section > label:nth-child(7)");

function showRozePlaatje() {

    document.querySelector('main').classList.remove('alles');

    var laatRozeZien = document.querySelectorAll(".roze");

    for (i = 0; i < laatRozeZien.length; i++) {
        //laatRozeZien[i].classList.add('onzichtbaar');
        laatRozeZien[i].classList.toggle('zichtbaar');
    }
}

kleurRoze.addEventListener("click", showRozePlaatje);





var kleurBlauw = document.querySelector("body > header > section > label:nth-child(9)");

function showBlauwPlaatje() {

    document.querySelector('main').classList.remove('alles');

    var laatBlauwZien = document.querySelectorAll(".blauw");

    for (i = 0; i < laatBlauwZien.length; i++) {
        //laatBlauwZien[i].classList.add('onzichtbaar');
        laatBlauwZien[i].classList.toggle('zichtbaar');
    }
}

kleurBlauw.addEventListener("click", showBlauwPlaatje);





var kleurGroen = document.querySelector("body > header > section > label:nth-child(11)");

function showGroenPlaatje() {

    document.querySelector('main').classList.remove('alles');

    var laatGroenZien = document.querySelectorAll(".groen");

    for (i = 0; i < laatGroenZien.length; i++) {
        //laatGroenZien[i].classList.add('onzichtbaar');
        laatGroenZien[i].classList.toggle('zichtbaar');
    }
}

kleurGroen.addEventListener("click", showGroenPlaatje);





var kleurOranje = document.querySelector("body > header > section > label:nth-child(13)");

function showOranjePlaatje() {

    document.querySelector('main').classList.remove('alles');

    var laatOranjeZien = document.querySelectorAll(".oranje");

    for (i = 0; i < laatOranjeZien.length; i++) {
        //laatOranjeZien[i].classList.add('onzichtbaar');
        laatOranjeZien[i].classList.toggle('zichtbaar');
    }
}

kleurOranje.addEventListener("click", showOranjePlaatje);





var kleurGeel = document.querySelector("body > header > section > label:nth-child(15)");

function showGeelPlaatje() {

    document.querySelector('main').classList.remove('alles');

    var laatGeelZien = document.querySelectorAll(".geel");

    for (i = 0; i < laatGeelZien.length; i++) {
        //laatGeelZien[i].classList.add('onzichtbaar');
        laatGeelZien[i].classList.toggle('zichtbaar');
    }
}

kleurGeel.addEventListener("click", showGeelPlaatje);





var kleurRood = document.querySelector("body > header > section > label:nth-child(17)");

function showRoodPlaatje() {

    document.querySelector('main').classList.remove('alles');

    var laatRoodZien = document.querySelectorAll(".rood");

    for (i = 0; i < laatRoodZien.length; i++) {
        //laatRoodZien[i].classList.add('onzichtbaar');
        laatRoodZien[i].classList.toggle('zichtbaar');
    }
}

kleurRood.addEventListener("click", showRoodPlaatje);
