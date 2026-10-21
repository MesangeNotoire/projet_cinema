
/* Au chargement de la page, lancer la fonction 'infos' avec ces paramètres*/

addEventListener("load", () => {
  infos("tt0432283", "movie-description1", "movie-title1");
  infos("tt8847712", "movie-description2", "movie-title2");
  infos("tt5104604", "movie-description3", "movie-title3");
});


/* fonction  paramétrée 'infos' qui permet de charger les informations des 3 films 
mis en avant dans la page d'accueil */

function infos(id, placeholderdescription, placeholdertitre) {
  fetch(`http://www.omdbapi.com/?i=${id}&apikey=73cc4c28`)
    .then((response) => response.json())
    .then((data) => {
      const plot = data.Plot;
      const title = data.Title;
      document.getElementById(placeholderdescription).innerHTML = `${plot}`;
      document.getElementById(placeholdertitre).innerHTML = `${title}`;
    })
    .catch((error) => console.error(error));
}




/*lors d'un click sur le bouton 'Voir Plus', lance la fonction getFilms2026*/

addEventListener("click", getFilm2026);

const filmCards = document.querySelector(".film-cards");
const filmInfoTemplate = document.querySelector("#plusdefilms");




/* fonction qui permet pour chaque film d'aller récupérer les informations 
liées au film sur l'API, et de remplir sa carte avec les informations. 
Les cartes de films sont ensuite dupliquées ('clonées') 
et mises les unes à la suite des autres.*/


function getFilm2026() {
  fetch("http://127.0.0.1:5500/js/movies2026.json")
    .then((response) => response.json())
    .then((films) => {
      filmCards.innerHTML = "";
      films.forEach((film) => {
        const title = film.Title;
        const plot = film.Plot;
        const imdbID = film.imdbID;
        const card = filmInfoTemplate.content.cloneNode(true).children[0];
        card.querySelector("#movie-title").innerHTML = `${title}`;
        card.querySelector("#movie-description").innerHTML = `${plot}`;
        card
          .querySelector(".info a")
          .setAttribute("href", `movie.html?id=${imdbID}`);
        card
          .querySelector("img")
          .setAttribute(
            "src",
            `http://img.omdbapi.com/?i=${imdbID}&apikey=73cc4c28`,
          );
          card
          .querySelector("img")
          .setAttribute("alt", `Affiche du film ${title}`);
        filmCards.append(card);
      });
    })

    .catch((error) => console.error(error));
}
