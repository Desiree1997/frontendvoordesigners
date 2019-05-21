var knop = document.querySelector("body > button");

function wisselPlaatje() {

    var foto = document.querySelector("body > div > img:nth-child(2)");
    foto.classList.add('onscreen');

}

knop.addEventListener("click", wisselPlaatje);
