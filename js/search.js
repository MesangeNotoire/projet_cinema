/* gérer quand pas de résultats
page accueil charger 10 films */


const input = document.querySelector("input");
const title = document.getElementById("title");
const filmInfoTemplate = document.querySelector("#film-info-template");
const filmCards = document.querySelector(".film-cards");

input.addEventListener("keyup", getTitle);

function getTitle() {
 const urlSearch = `http://www.omdbapi.com/?s=${input.value}&apikey=73cc4c28`;
 fetch(urlSearch) .then(response=> response.json())
 .then(data=> {
    return data.Search.map((film)=>{
        return{imdbID:film.imdbID, title:film.Title}
    })
 })
 .then(films => {
    filmCards.innerHTML=""
    films.forEach(film=>{
    const title = film.title;
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


/* - afficher le bouton seulement si nombre de résultats >10
   - utiliser la même fonction mais demander de load la page suivante, puis la page suivante */
