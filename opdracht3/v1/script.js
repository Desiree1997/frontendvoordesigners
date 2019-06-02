console.log('hoi');
var requestURL = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var header = document.querySelector('header');
var section = document.querySelector('section');

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var movies = request.response;
    console.log(movies[0].title);
    populateHeader(movies[0]);
    discription(movies[0]);
    genres(movies[0]);
    showFilms(movies[0]);
}


function populateHeader(jsonObj) {
    var myH2 = document.createElement('h2');
    myH2.textContent = jsonObj['title'];
    header.appendChild(myH2);
}

function discription(jsonObj) {
    var myp = document.createElement('p');
    myp.textContent = jsonObj['plot'];
    header.appendChild(myp);
}

function genres(jsonObj) {
    var myp = document.createElement('p');
    myp.textContent = 'Genre: ' + jsonObj['genres'];
    header.appendChild(myp);
}

function showFilms(jsonObj) {
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
