/* gérer quand pas de résultats
page accueil charger 10 films */


const input = document.querySelector("input");
const title = document.getElementById("title");
const filmInfoTemplate = document.querySelector("#film-info-template");
const filmCards = document.querySelector(".film-cards");
let page = 1;

input.addEventListener("keyup", () => {
   page = 1;
   filmCards.innerHTML="";
   getTitle();

});

function getTitle() {
 const urlSearch = `http://www.omdbapi.com/?s=${input.value}&page=${page}&apikey=73cc4c28`;
 fetch(urlSearch) .then(response=> response.json())
 .then(data=> {
    return data.Search.map((film)=>{
        return{imdbID:film.imdbID, title:film.Title}
    })
 })
 .then(films => {
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


addEventListener("click", loadMore);

function loadMore() {
   page++
   getTitle();
}




/*const img = document.getElementById("image")
img.addEventListener("error", function(event) {
  event.target.src = "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6"
  event.onerror = null
})


