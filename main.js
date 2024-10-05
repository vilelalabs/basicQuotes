// Carregar o arquivo JSON usando fetch
let phrases = [];

fetch('./phrases.json')
    .then(response => response.json())
    .then(data => {
        phrases = data;
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));

function loadQuote() {
    if (phrases.length === 0) return; // Evitar erro se o JSON ainda não tiver carregado
    let choice = parseInt(Math.random() * phrases.length);
    let chosenPhrase = phrases[choice];
    document.getElementById('quote').innerText = chosenPhrase.quote;
    document.getElementById('author').innerText = chosenPhrase.author;
}
