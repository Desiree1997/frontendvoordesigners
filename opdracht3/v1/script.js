console.log('hoi');
var requestURL = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var header = document.querySelector('header');
var section = document.querySelector('section');

var horror = document.querySelector(".horror");
var crime = document.querySelector(".crime");
var drama = document.querySelector(".drama");
var thriller = document.querySelector(".thriller");
var action = document.querySelector(".action");
var adventure = document.querySelector(".adventure");
var loaderElement = document.querySelector(".loader");
console.log("loader", loaderElement);

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

function populateArticle(jsonObj) {
    var recentie = jsonObj['reviews'];
    var myArticle = document.createElement('article');

    var myImg = document.createElement('img');
    myImg.src = jsonObj['cover'];
    myArticle.appendChild(myImg);

    var myH2 = document.createElement('h2');
    myH2.textContent = jsonObj['title'];
    myArticle.appendChild(myH2);

    var myp = document.createElement('p');
    myp.textContent = 'Genre: ' + jsonObj['genres'];
    myArticle.appendChild(myp);

    var myp = document.createElement('p');
    myp.textContent = jsonObj['simple_plot'];
    myArticle.appendChild(myp);

    var myH3 = document.createElement('h3');
    myH3.textContent = 'Scores van deskundigen:';
    myArticle.appendChild(myH3);

    for (var i = 0; i < recentie.length; i++) {

        var myp = document.createElement('p');
        myp.textContent = recentie[i].score + ", ";
        myArticle.appendChild(myp);

        section.appendChild(myArticle);
    }
}

//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
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
    }) //end: function loadimagesmetXHR();
};

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
    }) //end: function loadimagesmetXHR();
};


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
    }) //end: function loadimagesmetXHR();
};

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
    }) //end: function loadimagesmetXHR();
};




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
//actie
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
