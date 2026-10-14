addEventListener("load", getMoviePage);

function getMoviePage() {
    fetch("http://www.omdbapi.com/?i=tt32558705&plot=full&apikey=73cc4c28")
        .then(response => response.json())
        .then(data => {
            const title = data.Title;
            const genre = data.Genre;
            const actors = data.Actors;
            const plot = data.Plot;
            document.querySelector("#movie-title").innerHTML = `${title}`;
            document.querySelector("#movie-genre p").innerHTML = `${genre}`;
            document.querySelector("#movie-actors p").innerHTML = `${actors}`;
            document.querySelector("#movie-synopsis p").innerHTML = `${plot}`;
        })
        .catch(error => console.error(error));
}
