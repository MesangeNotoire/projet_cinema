/* Au chargement de la page film, lancer la fonction getMoviePage */

addEventListener("load", getMoviePage);

/* Cette fonction a besoin de l'ID du film pour fonctionner, 
elle va aller la récupérer dans la carte du film sélectionné par l'utilisateur du site qui a cliqué
sur le bouton 'Voir Plus' */

let params = new URLSearchParams(document.location.search);
let imdbID = params.get("id");

/* Cette fonction récupère les données de l'API, plus précisément du film sélectionné via son ID
et va retourner les données Json suivantes du film : titre, genre, acteurs, long résumé */

function getMoviePage() {
  fetch(`http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=73cc4c28`)
    .then((response) => response.json())
    .then((data) => {
      const title = data.Title;
      const genre = data.Genre;
      const actors = data.Actors;
      const plot = data.Plot;
      document.querySelector("#movie-title").innerHTML = `${title}`;
      document.querySelector("#movie-genre p").innerHTML = `${genre}`;
      document.querySelector("#movie-actors p").innerHTML = `${actors}`;
      document.querySelector("#movie-synopsis p").innerHTML = `${plot}`;
      document
        .querySelector("#img1")
        .setAttribute(
          "src",
          `http://img.omdbapi.com/?i=${imdbID}&apikey=73cc4c28`,
        );
    })
    .catch((error) => console.error(error));
}
