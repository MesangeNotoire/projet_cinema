"http://www.omdbapi.com/?apikey=73cc4c28&"
"http://img.omdbapi.com/?apikey=73cc4c28&"


const filmInfoTemplate = document.querySelector("[film-info-template]")

function getFilmInfo() {
    fetch("http://www.omdbapi.com/?apikey=73cc4c28&")
        .then(response => response.json())
        .then(data => {
            data.forEach(film)
            const card = filmInfoTemplate.textContent.cloneNode(true).children[0]
            console.log(card)
        })
    }