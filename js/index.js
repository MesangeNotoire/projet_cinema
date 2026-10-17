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

addEventListener("click", getFilm2026)

function getFilm2026() {
    fetch("http://127.0.0.1:5500/js/movies2026.json")
        .then(response => response.json())
        .then(films => {
    filmCards.innerHTML=""
    films.forEach(film=>{
    const title = film.Title;
    const imdbID = film.imdbID;
    const card = filmInfoTemplate.content.cloneNode(true).children[0];
    card.querySelector("#title h2").innerHTML = `${title}`;
    card.querySelector("#imdb a").setAttribute("href",`movie.html?id=${imdbID}`);
    card.querySelector("img").setAttribute("src",`http://img.omdbapi.com/?i=${imdbID}&apikey=73cc4c28`);
    filmCards.append(card);
})
 })

 .catch(error => console.error(error));
}



