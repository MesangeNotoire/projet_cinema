addEventListener("load", () => {
    infos ("tt0432283", "movie-description1", "movie-title1")
    infos ("tt8847712", "movie-description2", "movie-title2")
    infos ("tt5104604", "movie-description3", "movie-title3")
} )

function infos(id, placeholderdescription, placeholdertitre){
     fetch(`http://www.omdbapi.com/?i=${id}&apikey=73cc4c28`)
        .then(response => response.json())
        .then(data => {
            const plot = data.Plot;
            const title = data.Title;
            document.getElementById(placeholderdescription).innerHTML = `${plot}`;
            document.getElementById(placeholdertitre).innerHTML = `${title}`;
        })
        .catch(error => console.error(error));
}



/*
addEventListener("load", getFilm1);

function getFilm1() {
    fetch("http://www.omdbapi.com/?i=tt0432283&apikey=73cc4c28")
        .then(response => response.json())
        .then(data => {
            const plot = data.Plot;
            const title = data.Title;
            document.getElementById("movie-description1").innerHTML = `${plot}`;
            document.getElementById("movie-title1").innerHTML = `${title}`;
        })
        .catch(error => console.error(error));
}


addEventListener("load", getFilm2);

function getFilm2() {
    fetch("http://www.omdbapi.com/?i=tt8847712&apikey=73cc4c28")
        .then(response => response.json())
        .then(data => {
            const plot = data.Plot;
             const title = data.Title;
            document.getElementById("movie-description2").innerHTML = `${plot}`;
            document.getElementById("movie-title2").innerHTML = `${title}`;
        })
        .catch(error => console.error(error));
}

addEventListener("load", getFilm3);

function getFilm3() {
    fetch("http://www.omdbapi.com/?i=tt5104604&apikey=73cc4c28")
        .then(response => response.json())
        .then(data => {
            const plot = data.Plot;
             const title = data.Title;
            document.getElementById("movie-description3").innerHTML = `${plot}`;
            document.getElementById("movie-title3").innerHTML = `${title}`;
        })
        .catch(error => console.error(error));
}

*/

addEventListener("click", getFilm2026)

const filmCards = document.querySelector(".film-cards");
const filmInfoTemplate = document.querySelector("#plusdefilms");

function getFilm2026() {
    fetch("http://127.0.0.1:5500/js/movies2026.json")
        .then(response => response.json())
        .then(films => {
    filmCards.innerHTML=""
    films.forEach(film=>{
    const title = film.Title;
    const plot = film.Plot;
    const imdbID = film.imdbID;
    const card = filmInfoTemplate.content.cloneNode(true).children[0];
    card.querySelector("#movie-title").innerHTML = `${title}`;
    card.querySelector("#movie-description").innerHTML = `${plot}`;
    card.querySelector(".info a").setAttribute("href",`movie.html?id=${imdbID}`);
    card.querySelector("img").setAttribute("src",`http://img.omdbapi.com/?i=${imdbID}&apikey=73cc4c28`);
    filmCards.append(card);
})
 })

 .catch(error => console.error(error));
}



