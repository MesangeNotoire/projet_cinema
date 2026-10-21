/* initialisation des variables qui seront utilisées dans les différentes fonctions*/

const input = document.querySelector("input");
const title = document.getElementById("title");
const filmInfoTemplate = document.querySelector("#film-info-template");
const filmCards = document.querySelector(".film-cards");
let page = 1;


/*A chaque nouvelle recherche dans la barre de recherche, la recherche est réinitialisée, et on demande de nouveau
les premiers résultats proposés, en appelant la fonction getTitle*/

input.addEventListener("keyup", () => {
  page = 1;
  filmCards.innerHTML = "";
  getTitle();
});

/* Fonction getTitle qui permet de charger les résulats de recherche via l'API de la manière suivante :
1) récupérer ce qui est mis dans la barre de recherche (input)
2) l'insérer dans un lien qui permet de récupérer la page 1, donc les 10 premiers films, des résultats de l'API
3) retourner à partir des résultats au format Json l'ID du film, et le titre
4) les résultats au format Json permettent de remplir les différentes cartes de films, et l'ID de lancer une nouvelle recherche
cette fois-ci pour obtenir le poster*/

function getTitle() {
  const urlSearch = `http://www.omdbapi.com/?s=${input.value}&page=${page}&apikey=73cc4c28`;
  fetch(urlSearch)
    .then((response) => response.json())
    .then((data) => {
      return data.Search.map((film) => {
        return { imdbID: film.imdbID, title: film.Title };
      });
    })
    .then((films) => {
      films.forEach((film) => {
        const title = film.title;
        const imdbID = film.imdbID;
        const card = filmInfoTemplate.content.cloneNode(true).children[0];
        card.querySelector("#title h2").innerHTML = `${title}`;
        card
          .querySelector("#imdb a")
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


/* Lorsqu'on clique sur le bouton 'Voir plus de films', la fonction getTitle est de nouveau lancée,
cette fois-ci en appelant la 2e page de résultats, puis la 3e, la 4e, etc. */

addEventListener("click", loadMore);

function loadMore() {
  page++;
  getTitle();
}




/* Travail en cours, tentative de mettre une image par défaut lorsque l'API ne la possède pas


const img = document.getElementById("image")
img.addEventListener("error", function(event) {
  event.target.src = "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6"
  event.onerror = null
})*/
