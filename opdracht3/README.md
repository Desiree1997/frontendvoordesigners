# Films

Eerst ging ik kijken hoe ik een woord tevoorschijn kon krijgen. Daarna ging ik van alle films de titel, plot, genre en reviews tonen. Toen dat werkte wilde ik een knop maken, waarmee je alle films tevoorschijn kan halen. Dit heb ik later veranderd naar de genres als knoppen en alles categoriseren. Daarna ben ik mij bezig gaan houden met css en heb ik plaatjes toegevoegd. Ook heb ik een loading en error state gemaakt.

Later ben ik gaan kijken naar de mobiel versie. Voor de navigatiebalk had ik float gebruikt. Daardoor ging bij het schalen alles door de war. Dit heb ik op kunnen lossen door floatbox bij de navigatie te gebruiken.

Daarna wilde ik het ook laten werken met toetsen. Dat je bijvoorbeeld de h indrukt en alle horrorfilms tevoorschijn komen. Dit lukte, alleen nu kunnen ze meerdere keren in beeld komen. Hiermee bedoel dat als je 2x op de letter h klikt, de film 2x in beeld komt. De a is voor actie en v voor avontuur.

Nadat dit me allemaal was gelukt kreeg ik als feedback van Vasillis dat ik een gemiddelde moest maken voor de beoordeling en later werden dat sterretjes. Hier ben ik toen mee bezig geweest maar niet meteen afgemaakt.

Wel had ik al 3 testen gehouden. Deze testen heb ik opgenomen en zitten in het mapje audio bij mijn code. 
De belangrijkste bevindingen hieruit waren:
  1. Doe meer films.
  2. Laat in het begin alle films zien. Daarna kan je filteren op genre en dan pas alleen die films laten zien.
  3. Trailers laten zien bij de films.
  4. Sterretjes i.p.v. een cijfer als beoordeling.
  
Aan de hand hiervan ben ik alle films in het begin gaan tonen. Ook kan je alle films weer tevoorschijn halen als je op de h1 films klikt. 

# frontend voor designers - opdracht 3

Voor opdracht 3 ga je een functionaliteit ontwerpen met externe data, en testen. De data is JSON die met een REST API van een externe bron wordt ingeladen met Javascript. Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

Dit is een voorbeeld van het laden van data en er html mee maken:
[Code demo](https://koopreynders.github.io/frontendvoordesigners/opdracht3/XMLHttpRequest/)


## JSON
JSON van de movies data staat ook hier:
deze uri kun je gebruiken voor een van de use case voor opdracht 3.
[https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json](https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json)

De JSON data is ook los, per film of genre of actors te gebruiken. Check die [hier](https://github.com/KoopReynders/frontendvoordesigners/tree/master/opdracht3/json).

Dit is een voorbeeld van het laden van de film data:
[Code demo](https://koopreynders.github.io/frontendvoordesigners/opdracht3/v1/)
