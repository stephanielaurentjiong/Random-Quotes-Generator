// Select those that will be interactive

const jokeContainer = document.getElementById('joke');
const btn = document.getElementById('btn');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
    });
    // This pushes the real joke to the HTML not just print on console
}

btn.addEventListener("click", getJoke);
getJoke();

