document.getElementById("getInfoHG").addEventListener("mouseover", getInfoHG);

function getInfoHG() {
    fetch("http://www.omdbapi.com/?t=sunrise+on+the+reaping&apikey=73cc4c28")
        .then(response => response.json())
        .then(data => {
            const plot = data.Plot;
            document.getElementById("output1").innerHTML = `${plot}`;
        })
        .catch(error => console.error(error));
}


document.getElementById("frenchDispatch").addEventListener("mouseover", frenchDispatch);

function frenchDispatch() {
    fetch("http://www.omdbapi.com/?t=french+dispatch&apikey=73cc4c28")
        .then(response => response.json())
        .then(data => {
            const plot = data.Plot;
            document.getElementById("output2").innerHTML = `${plot}`;
        })
        .catch(error => console.error(error));
}

document.getElementById("klarathesun").addEventListener("mouseover", klarathesun);

function klarathesun() {
    fetch("http://www.omdbapi.com/?t=klara+and+the+sun&apikey=73cc4c28")
        .then(response => response.json())
        .then(data => {
            const plot = data.Plot;
            document.getElementById("output3").innerHTML = `${plot}`;
        })
        .catch(error => console.error(error));
}



