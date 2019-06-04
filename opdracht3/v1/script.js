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


function afbeelding(jsonObj) {
    var myImg = document.createElement('img');
    myImg.textContent = jsonObj['cover'];
    section.appendChild(myImg);
}

function populateHeader(jsonObj) {
    var myH2 = document.createElement('h2');
    myH2.textContent = jsonObj['title'];
    section.appendChild(myH2);
}

function genres(jsonObj) {
    var myp = document.createElement('p');
    myp.textContent = 'Genre: ' + jsonObj['genres'];
    section.appendChild(myp);
}

function discription(jsonObj) {
    var myp = document.createElement('p');
    myp.textContent = jsonObj['plot'];
    section.appendChild(myp);
}

function recenties(jsonObj) {
    var recentie = jsonObj['reviews'];

    for (var i = 0; i < recentie.length; i++) {
        var myArticle = document.createElement('article');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');

        myH3.textContent = 'Recentie: ' + recentie[i].id;
        myPara1.textContent = 'Score: ' + recentie[i].score;


        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

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
        afbeelding(movies[0]);
        populateHeader(movies[0]);
        genres(movies[0]);
        discription(movies[0]);
        recenties(movies[0]);
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
        afbeelding(movies[1]);
        populateHeader(movies[1]);
        genres(movies[1]);
        discription(movies[1]);
        recenties(movies[1]);

        afbeelding(movies[2]);
        populateHeader(movies[2]);
        genres(movies[2]);
        discription(movies[2]);
        recenties(movies[2]);

        afbeelding(movies[3]);
        populateHeader(movies[3]);
        genres(movies[3]);
        discription(movies[3]);
        recenties(movies[3]);
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
        afbeelding(movies[1]);
        populateHeader(movies[1]);
        genres(movies[1]);
        discription(movies[1]);
        recenties(movies[1]);

        afbeelding(movies[2]);
        populateHeader(movies[2]);
        genres(movies[2]);
        discription(movies[2]);
        recenties(movies[2]);

        afbeelding(movies[3]);
        populateHeader(movies[3]);
        genres(movies[3]);
        discription(movies[3]);
        recenties(movies[3]);

        afbeelding(movies[5]);
        populateHeader(movies[5]);
        genres(movies[5]);
        discription(movies[5]);
        recenties(movies[5]);
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
        afbeelding(movies[3]);
        populateHeader(movies[3]);
        genres(movies[3]);
        discription(movies[3]);
        recenties(movies[3]);
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
        afbeelding(movies[4]);
        populateHeader(movies[4]);
        genres(movies[4]);
        discription(movies[4]);
        recenties(movies[4]);
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
        afbeelding(movies[4]);
        populateHeader(movies[4]);
        genres(movies[4]);
        discription(movies[4]);
        recenties(movies[4]);

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



//  request.onload = function() {
//      console.log("request.onload: ",request.response);
//    }
request.timeout = 10000; // time in milliseconds
request.ontimeout = function (e) {
    // XMLHttpRequest timed out. Do something here.
    console.log("ontimeout: " + request.timeout + ", het laden duurt te lang !", e);
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
