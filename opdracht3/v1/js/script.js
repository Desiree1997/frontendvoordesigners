console.log('hoi');
var requestURL = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var header = document.querySelector('header');
var section = document.querySelector('section');

var alles = document.querySelector(".alles");
var horror = document.querySelector(".horror");
var crime = document.querySelector(".crime");
var drama = document.querySelector(".drama");
var thriller = document.querySelector(".thriller");
var action = document.querySelector(".action");
var adventure = document.querySelector(".adventure");
var loaderElement = document.querySelector(".loader");
var lees = document.createElement('button');
console.log("loader", loaderElement);

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var movies = request.response;
    populateArticle(movies[0]);
    populateArticle(movies[1]);
    populateArticle(movies[2]);
    populateArticle(movies[3]);
    populateArticle(movies[4]);
    populateArticle(movies[5]);
}

function populateArticle(jsonObj) {
    var myArticle = document.createElement('article');

    var myImg = document.createElement('img');
    myImg.src = jsonObj['cover'];
    myArticle.appendChild(myImg);

    var myH2 = document.createElement('h2');
    myH2.textContent = jsonObj['title'];
    myArticle.appendChild(myH2);

    var myp3 = document.createElement('p');
    myp3.textContent = 'Genre: ' + jsonObj['genres'];
    myArticle.appendChild(myp3);

    var h3 = document.createElement('h3');
    h3.textContent = 'Samenvatting:';
    myArticle.appendChild(h3);

    var myp1 = document.createElement('p');
    myp1.textContent = jsonObj['simple_plot'];
    myArticle.appendChild(myp1);

    var lees = document.createElement('button');
    lees.textContent = 'Lees meer';
    lees.classList = "link";
    myArticle.appendChild(lees);

    var myp6 = document.createElement('p');
    myp6.textContent = jsonObj['plot'];
    myp6.classList = "hide";
    myArticle.appendChild(myp6);

    //var video = document.createElement('video');
    //video.src = jsonObj['trailer'];
    //myArticle.appendChild(video);

    var recentie = jsonObj['reviews'];

    var ster = 0;
    var myp2 = document.createElement('p');

    for (var i = 0; i < recentie.length; i++) {
        ster += recentie[i].score;
        console.log(ster);
    }
    if (ster > 0) {

        var myH3 = document.createElement('h3');
        myH3.textContent = 'Beoordeling:';
        myArticle.appendChild(myH3);

        var average = ster / recentie.length;
        for (var a = 0; a < average; a++) {
            if (a == 1) {
                // average / 2 hierboven als je halve sterrenplaatjes dingen heb
                var sterLinks = document.createElement('img');
                sterLinks.classList = "sterren";
                sterLinks.src = "afbeeldingen/ster-links.png";
                myArticle.appendChild(sterLinks);
                console.log(' maak een ster');
            }

            if (a == 2) {
                // average / 2 hierboven als je halve sterrenplaatjes dingen heb
                var sterRechts = document.createElement('img');
                sterRechts.classList = "sterren";
                sterRechts.src = "afbeeldingen/ster-rechts.png";
                myArticle.appendChild(sterRechts);
                console.log(' maak een ster')
            }

            if (a == 3) {
                // average / 2 hierboven als je halve sterrenplaatjes dingen heb
                var sterLinks = document.createElement('img');
                sterLinks.classList = "sterren";
                sterLinks.src = "afbeeldingen/ster-links.png";
                myArticle.appendChild(sterLinks);
                console.log(' maak een ster')
            }

            if (a == 4) {
                // average / 2 hierboven als je halve sterrenplaatjes dingen heb
                var sterRechts = document.createElement('img');
                sterRechts.classList = "sterren";
                sterRechts.src = "afbeeldingen/ster-rechts.png";
                myArticle.appendChild(sterRechts);
                console.log(' maak een ster')
            }

            if (a == 5) {
                // average / 2 hierboven als je halve sterrenplaatjes dingen heb
                var sterLinks = document.createElement('img');
                sterLinks.classList = "sterren";
                sterLinks.src = "afbeeldingen/ster-links.png";
                myArticle.appendChild(sterLinks);
                console.log(' maak een ster')
            }

            if (a == 6) {
                // average / 2 hierboven als je halve sterrenplaatjes dingen heb
                var sterRechts = document.createElement('img');
                sterRechts.classList = "sterren";
                sterRechts.src = "afbeeldingen/ster-rechts.png";
                myArticle.appendChild(sterRechts);
                console.log(' maak een ster')
            }

            if (a == 7) {
                // average / 2 hierboven als je halve sterrenplaatjes dingen heb
                var sterLinks = document.createElement('img');
                sterLinks.classList = "sterren";
                sterLinks.src = "afbeeldingen/ster-links.png";
                myArticle.appendChild(sterLinks);
                console.log(' maak een ster')
            }

            if (a == 8) {
                // average / 2 hierboven als je halve sterrenplaatjes dingen heb
                var sterRechts = document.createElement('img');
                sterRechts.classList = "sterren";
                sterRechts.src = "afbeeldingen/ster-rechts.png";
                myArticle.appendChild(sterRechts);
                console.log(' maak een ster')
            }

            if (a == 9) {
                // average / 2 hierboven als je halve sterrenplaatjes dingen heb
                var sterLinks = document.createElement('img');
                sterLinks.classList = "sterren";
                sterLinks.src = "afbeeldingen/ster-links.png";
                myArticle.appendChild(sterLinks);
                console.log(' maak een ster')
            }

            if (a == 10) {
                // average / 2 hierboven als je halve sterrenplaatjes dingen heb
                var sterRechts = document.createElement('img');
                sterRechts.classList = "sterren";
                sterRechts.src = "afbeeldingen/ster-rechts.png";
                myArticle.appendChild(sterRechts);
                console.log(' maak een ster')
            }
        }

        //myp2.textContent = ster / recentie.length;
        //myArticle.appendChild(myp2);
    }
    section.appendChild(myArticle);

}

function laadKnop() {
     myp6.classList.remove('hide');
    myp1.classlist.add('hide');
    section.innerHTML = "";
}

//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
function laadAlles() {
    var request = new XMLHttpRequest();
    request.open('get', requestURL);
    request.responseType = 'json';
    //request.responseType = 'text'; // now we're getting a string!
    request.send();

    request.addEventListener("load", function () {
        console.log("request is geladen: ", request.response);
        //als de data geladen is, mag de loader weg:
        loaderElement.classList.add('hide');
        //functie aanroepen om van de data html te maken
        var movies = request.response;
        console.log(movies[0].title);
        populateArticle(movies[0]);
        populateArticle(movies[1]);
        populateArticle(movies[2]);
        populateArticle(movies[3]);
        populateArticle(movies[4]);
        populateArticle(movies[5]);

        request.timeout = 10000; // time in milliseconds
        request.ontimeout = function (e) {
            // XMLHttpRequest timed out. Do something here.
            console.log("ontimeout: " + request.timeout + ", het laden duurt te lang !", e);
        };
        request.onerror = function () {
            console.log('Fetch Error', request.status);
        }
    }) //end:
};




function laadHorror() {
    var request = new XMLHttpRequest();
    request.open('get', requestURL);
    request.responseType = 'json';
    //request.responseType = 'text'; // now we're getting a string!
    request.send();

    request.addEventListener("load", function () {
        console.log("request is geladen: ", request.response);
        //als de data geladen is, mag de loader weg:
        loaderElement.classList.add('hide');
        //functie aanroepen om van de data html te maken
        var movies = request.response;
        console.log(movies[0].title);
        populateArticle(movies[0]);

        request.timeout = 10000; // time in milliseconds
        request.ontimeout = function (e) {
            // XMLHttpRequest timed out. Do something here.
            console.log("ontimeout: " + request.timeout + ", het laden duurt te lang !", e);
        };
        request.onerror = function () {
            console.log('Fetch Error', request.status);
        }
    }) //end:
};

function hHorror(e) {

    switch (e.keyCode) { //met keycode kijkt hij welk getal hij van het keyboard moet pakken
        case 72: // 72 is de h

            var request = new XMLHttpRequest();
            request.open('get', requestURL);
            request.responseType = 'json';
            //request.responseType = 'text'; // now we're getting a string!
            request.send();
            section.innerHTML = "";

            request.addEventListener("load", function () {
                console.log("request is geladen: ", request.response);
                //als de data geladen is, mag de loader weg:
                loaderElement.classList.add('hide');
                //functie aanroepen om van de data html te maken
                var movies = request.response;
                console.log(movies[0].title);
                populateArticle(movies[0]);

                request.timeout = 10000; // time in milliseconds
                request.ontimeout = function (e) {
                    // XMLHttpRequest timed out. Do something here.
                    console.log("ontimeout: " + request.timeout + ", het laden duurt te lang !", e);
                };
                request.onerror = function () {
                    console.log('Fetch Error', request.status);
                }
            })
            break;

        default:
            break;
    }
}
document.addEventListener("keydown", hHorror);

function laadCrime() {
    var request = new XMLHttpRequest();
    request.open('get', requestURL);
    request.responseType = 'json';
    //request.responseType = 'text'; // now we're getting a string!
    request.send();

    request.addEventListener("load", function () {
        console.log("request is geladen: ", request.response);
        //als de data geladen is, mag de loader weg:
        loaderElement.classList.add('hide');
        //functie aanroepen om van de data html te maken
        var movies = request.response;
        populateArticle(movies[1]);
        populateArticle(movies[2]);
        populateArticle(movies[3]);

        request.timeout = 10000; // time in milliseconds
        request.ontimeout = function (e) {
            // XMLHttpRequest timed out. Do something here.
            console.log("ontimeout: " + request.timeout + ", het laden duurt te lang !", e);
        };
        request.onerror = function () {
            console.log('Fetch Error', request.status);
        }
    })
};

function cCrime(e) {

    switch (e.keyCode) { //met keycode kijkt hij welk getal hij van het keyboard moet pakken
        case 67: // 67 is de c

            var request = new XMLHttpRequest();
            request.open('get', requestURL);
            request.responseType = 'json';
            //request.responseType = 'text'; // now we're getting a string!
            request.send();
            section.innerHTML = "";

            request.addEventListener("load", function () {
                console.log("request is geladen: ", request.response);
                //als de data geladen is, mag de loader weg:
                loaderElement.classList.add('hide');
                //functie aanroepen om van de data html te maken
                var movies = request.response;
                populateArticle(movies[1]);
                populateArticle(movies[2]);
                populateArticle(movies[3]);

                request.timeout = 10000; // time in milliseconds
                request.ontimeout = function (e) {
                    // XMLHttpRequest timed out. Do something here.
                    console.log("ontimeout: " + request.timeout + ", het laden duurt te lang !", e);
                };
                request.onerror = function () {
                    console.log('Fetch Error', request.status);
                }
            })
            break;

        default:
            break;
    }
}
document.addEventListener("keydown", cCrime);

function laadDrama() {
    var request = new XMLHttpRequest();
    request.open('get', requestURL);
    request.responseType = 'json';
    //request.responseType = 'text'; // now we're getting a string!
    request.send();

    request.addEventListener("load", function () {
        console.log("request is geladen: ", request.response);
        //als de data geladen is, mag de loader weg:
        loaderElement.classList.add('hide');
        //functie aanroepen om van de data html te maken
        var movies = request.response;
        populateArticle(movies[1]);
        populateArticle(movies[2]);
        populateArticle(movies[3]);
        populateArticle(movies[5]);

        request.timeout = 10000; // time in milliseconds
        request.ontimeout = function (e) {
            // XMLHttpRequest timed out. Do something here.
            console.log("ontimeout: " + request.timeout + ", het laden duurt te lang !", e);
        };
        request.onerror = function () {
            console.log('Fetch Error', request.status);
        }
    }) //end: function loadimagesmetXHR();
};

function dDrama(e) {

    switch (e.keyCode) { //met keycode kijkt hij welk getal hij van het keyboard moet pakken
        case 68: // 68 is de d

            var request = new XMLHttpRequest();
            request.open('get', requestURL);
            request.responseType = 'json';
            //request.responseType = 'text'; // now we're getting a string!
            request.send();
            section.innerHTML = "";

            request.addEventListener("load", function () {
                console.log("request is geladen: ", request.response);
                //als de data geladen is, mag de loader weg:
                loaderElement.classList.add('hide');
                //functie aanroepen om van de data html te maken
                var movies = request.response;
                populateArticle(movies[1]);
                populateArticle(movies[2]);
                populateArticle(movies[3]);
                populateArticle(movies[5]);

                request.timeout = 10000; // time in milliseconds
                request.ontimeout = function (e) {
                    // XMLHttpRequest timed out. Do something here.
                    console.log("ontimeout: " + request.timeout + ", het laden duurt te lang !", e);
                };
                request.onerror = function () {
                    console.log('Fetch Error', request.status);
                }
            })
            break;

        default:
            break;
    }
}
document.addEventListener("keydown", dDrama);


function laadThriller() {
    var request = new XMLHttpRequest();
    request.open('get', requestURL);
    request.responseType = 'json';
    //request.responseType = 'text'; // now we're getting a string!
    request.send();

    request.addEventListener("load", function () {
        console.log("request is geladen: ", request.response);
        //als de data geladen is, mag de loader weg:
        loaderElement.classList.add('hide');
        //functie aanroepen om van de data html te maken
        var movies = request.response;
        populateArticle(movies[3]);

        request.timeout = 10000; // time in milliseconds
        request.ontimeout = function (e) {
            // XMLHttpRequest timed out. Do something here.
            console.log("ontimeout: " + request.timeout + ", het laden duurt te lang !", e);
        };
        request.onerror = function () {
            console.log('Fetch Error', request.status);
        }
    })
};

function tThriller(e) {

    switch (e.keyCode) { //met keycode kijkt hij welk getal hij van het keyboard moet pakken
        case 84: // 84 is de t

            var request = new XMLHttpRequest();
            request.open('get', requestURL);
            request.responseType = 'json';
            //request.responseType = 'text'; // now we're getting a string!
            request.send();
            section.innerHTML = "";

            request.addEventListener("load", function () {
                console.log("request is geladen: ", request.response);
                //als de data geladen is, mag de loader weg:
                loaderElement.classList.add('hide');
                //functie aanroepen om van de data html te maken
                var movies = request.response;
                populateArticle(movies[3]);

                request.timeout = 10000; // time in milliseconds
                request.ontimeout = function (e) {
                    // XMLHttpRequest timed out. Do something here.
                    console.log("ontimeout: " + request.timeout + ", het laden duurt te lang !", e);
                };
                request.onerror = function () {
                    console.log('Fetch Error', request.status);
                }
            })
            break;

        default:
            break;
    }
}
document.addEventListener("keydown", tThriller);


function laadAction() {
    var request = new XMLHttpRequest();
    request.open('get', requestURL);
    request.responseType = 'json';
    //request.responseType = 'text'; // now we're getting a string!
    request.send();

    request.addEventListener("load", function () {
        console.log("request is geladen: ", request.response);
        //als de data geladen is, mag de loader weg:
        loaderElement.classList.add('hide');
        //functie aanroepen om van de data html te maken
        var movies = request.response;
        populateArticle(movies[4]);

        request.timeout = 10000; // time in milliseconds
        request.ontimeout = function (e) {
            // XMLHttpRequest timed out. Do something here.
            console.log("ontimeout: " + request.timeout + ", het laden duurt te lang !", e);
        };
        request.onerror = function () {
            console.log('Fetch Error', request.status);
        }
    })
};

function aAction(e) {

    switch (e.keyCode) { //met keycode kijkt hij welk getal hij van het keyboard moet pakken
        case 65: // 65 is de a

            var request = new XMLHttpRequest();
            request.open('get', requestURL);
            request.responseType = 'json';
            //request.responseType = 'text'; // now we're getting a string!
            request.send();
            section.innerHTML = "";

            request.addEventListener("load", function () {
                console.log("request is geladen: ", request.response);
                //als de data geladen is, mag de loader weg:
                loaderElement.classList.add('hide');
                //functie aanroepen om van de data html te maken
                var movies = request.response;
                populateArticle(movies[4]);

                request.timeout = 10000; // time in milliseconds
                request.ontimeout = function (e) {
                    // XMLHttpRequest timed out. Do something here.
                    console.log("ontimeout: " + request.timeout + ", het laden duurt te lang !", e);
                };
                request.onerror = function () {
                    console.log('Fetch Error', request.status);
                }
            })
            break;

        default:
            break;
    }
}
document.addEventListener("keydown", aAction);

function laadAdventure() {
    var request = new XMLHttpRequest();
    request.open('get', requestURL);
    request.responseType = 'json';
    //request.responseType = 'text'; // now we're getting a string!
    request.send();

    request.addEventListener("load", function () {
        console.log("request is geladen: ", request.response);
        //als de data geladen is, mag de loader weg:
        loaderElement.classList.add('hide');
        //functie aanroepen om van de data html te maken
        var movies = request.response;
        populateArticle(movies[4]);

        request.timeout = 10000; // time in milliseconds
        request.ontimeout = function (e) {
            // XMLHttpRequest timed out. Do something here.
            console.log("ontimeout: " + request.timeout + ", het laden duurt te lang !", e);
        };
        request.onerror = function () {
            console.log('Fetch Error', request.status);
        }
    })
};

function vAdventure(e) {

    switch (e.keyCode) { //met keycode kijkt hij welk getal hij van het keyboard moet pakken
        case 86: // 86 is de v

            var request = new XMLHttpRequest();
            request.open('get', requestURL);
            request.responseType = 'json';
            //request.responseType = 'text'; // now we're getting a string!
            request.send();
            section.innerHTML = "";

            request.addEventListener("load", function () {
                console.log("request is geladen: ", request.response);
                //als de data geladen is, mag de loader weg:
                loaderElement.classList.add('hide');
                //functie aanroepen om van de data html te maken
                var movies = request.response;
                populateArticle(movies[4]);

                request.timeout = 10000; // time in milliseconds
                request.ontimeout = function (e) {
                    // XMLHttpRequest timed out. Do something here.
                    console.log("ontimeout: " + request.timeout + ", het laden duurt te lang !", e);
                };
                request.onerror = function () {
                    console.log('Fetch Error', request.status);
                }
            })
            break;

        default:
            break;
    }
}
document.addEventListener("keydown", vAdventure);




function laden() {
    var laadTekst = document.createElement('p');
    var myArticle = document.createElement('article');
    laadTekst.textContent = "Het laden duurt erg lang. Controleer je internet verbinding.";
    console.log(laadTekst);
    myArticle.appendChild(laadTekst);
    section.appendChild(myArticle);
}

function error() {
    var errorTekst = document.createElement('p');
    var myArticle = document.createElement('article');
    errorTekst.textContent = "Er is een interne fout opgetreden. Probeer het zo nog een keer.";
    console.log(errorTekst);
    myArticle.appendChild(errorTekst);
    section.appendChild(myArticle);
}

//  request.onload = function() {
//      console.log("request.onload: ",request.response);
//    }
request.timeout = 10000; // time in milliseconds
request.ontimeout = function (e) {
    // XMLHttpRequest timed out. Do something here.
    console.log("ontimeout: " + request.timeout + ", het laden duurt te lang !", e);
    laden();
};
request.onerror = function () {
    console.log('Fetch Error', request.status);
};
//end: function loadimagesmetXHR();


//loader feedback eerst onzichtbaar maken
loaderElement.classList.add('hide');

lees.onclick = function () {
    myp6.classList.remove('hide');
    myp1.classlist.add('hide');
    section.innerHTML = "";
    leesKnop();
}; //end: button.onclick

//actie
alles.onclick = function () {
    loaderElement.classList.remove('hide'); //loader wordt zichtbaar
    section.innerHTML = ""; //main leeghalen. just in case
    laadAlles();
}; //end: button.onclick

horror.onclick = function () {
    loaderElement.classList.remove('hide'); //loader wordt zichtbaar
    section.innerHTML = ""; //main leeghalen. just in case
    laadHorror();
}; //end: button.onclick

crime.onclick = function () {
    loaderElement.classList.remove('hide'); //loader wordt zichtbaar
    section.innerHTML = ""; //main leeghalen. just in case
    laadCrime();
}; //end: button.onclick

drama.onclick = function () {
    loaderElement.classList.remove('hide'); //loader wordt zichtbaar
    section.innerHTML = ""; //main leeghalen. just in case
    laadDrama();
}; //end: button.onclick

thriller.onclick = function () {
    loaderElement.classList.remove('hide'); //loader wordt zichtbaar
    section.innerHTML = ""; //main leeghalen. just in case
    laadThriller();
}; //end: button.onclick

action.onclick = function () {
    loaderElement.classList.remove('hide'); //loader wordt zichtbaar
    section.innerHTML = ""; //main leeghalen. just in case
    laadAction();
}; //end: button.onclick

adventure.onclick = function () {
    loaderElement.classList.remove('hide'); //loader wordt zichtbaar
    section.innerHTML = ""; //main leeghalen. just in case
    laadAdventure();
}; //end: button.onclick
