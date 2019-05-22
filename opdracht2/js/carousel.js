var knop = document.querySelector("body > button:nth-child(3)");

function wisselPlaatjeEen() {

    var foto = document.querySelector("body > div > img:nth-child(2)");
    foto.classList.remove('onscreen');

}
knop.addEventListener("click", wisselPlaatjeEen);



var knop = document.querySelector("body > button:nth-child(4)");

function wisselPlaatje() {

    var foto = document.querySelector("body > div > img:nth-child(2)");
    foto.classList.add('onscreen');
}
knop.addEventListener("click", wisselPlaatje);





function volgende(e) {

    switch (e.keyCode) { //met keycode kijkt hij welk getal hij van het keyboard moet pakken
        case 39: // 39 is knop pijl naar rechts

            var foto = document.querySelector("body > div > img:nth-child(2)");
            foto.classList.add('onscreen');

        break;

        default:
            break;
    }
} // 39 is pijl naar rechts, als je > indrukt komt het volgende plaatje in beeld vliegen
document.addEventListener("keydown", volgende);

function volgendeTwee(e) {

    switch (e.keyCode) { //met keycode kijkt hij welk getal hij van het keyboard moet pakken
        case 40: // 39 is knop pijl naar rechts

            var foto = document.querySelector("body > div > img:nth-child(2)");
            foto.classList.add('onscreen');

        break;

        default:
            break;
    }
} // 39 is pijl naar rechts, als je > indrukt komt het volgende plaatje in beeld vliegen
document.addEventListener("keydown", volgendeTwee);


function vorige(e) {

    switch (e.keyCode) { //met keycode kijkt hij welk getal hij van het keyboard moet pakken
        case 37: // 37 is knop pijl naar links

            var foto = document.querySelector("body > div > img:nth-child(2)");
            foto.classList.remove('onscreen');

        break;

        default:
            break;
    }
} // 37 is pijl naar links, als je < indrukt komt het volgende plaatje in beeld vliegen
document.addEventListener("keydown", vorige);

function vorigeTwee(e) {

    switch (e.keyCode) { //met keycode kijkt hij welk getal hij van het keyboard moet pakken
        case 38: // 37 is knop pijl naar links

            var foto = document.querySelector("body > div > img:nth-child(2)");
            foto.classList.remove('onscreen');

        break;

        default:
            break;
    }
} // 37 is pijl naar links, als je < indrukt komt het volgende plaatje in beeld vliegen
document.addEventListener("keydown", vorigeTwee);
