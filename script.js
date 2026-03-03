
if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('service-worker.js');
}

function startTimer() {
let time = 45;
let timerEl = document.getElementById("timer");
let interval = setInterval(() => {
timerEl.textContent = "Temps restant: " + time + " sec";
time--;
if (time < 0) {
clearInterval(interval);
timerEl.textContent = "Série terminée !";
}
}, 1000);
}

const params = new URLSearchParams(window.location.search);
const exo = params.get('exo');
if (exo) {
const titre = document.getElementById("titre");
const desc = document.getElementById("desc");
if (exo === "pompes") {
titre.textContent = "Pompes Genoux";
desc.textContent = "3 séries de 8-10 répétitions.";
}
if (exo === "squats") {
titre.textContent = "Squats";
desc.textContent = "3 séries de 15 répétitions.";
}
if (exo === "dips") {
titre.textContent = "Dips sur chaise";
desc.textContent = "3 séries de 8 répétitions.";
}
if (exo === "full") {
titre.textContent = "Full Body";
desc.textContent = "Circuit complet 15 minutes.";
}
}
