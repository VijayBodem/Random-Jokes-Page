let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner")

let options = {
    method: "GET",
}

function randomJokes() {
    spinnerEl.classList.remove("d-none");
    jokeTextEl.classList.add("d-none");
    let url = "https://apis.ccbp.in/jokes/random";

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let text = jsonData.value;
            spinnerEl.classList.add("d-none");
            jokeTextEl.classList.remove("d-none");
            jokeTextEl.textContent = text;
        })
}

jokeBtnEl.addEventListener("click", randomJokes)