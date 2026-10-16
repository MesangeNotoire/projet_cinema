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




