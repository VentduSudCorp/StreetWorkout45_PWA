
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

const imageExo = document.getElementById("imageExo");
const videoSource = document.getElementById("videoSource");

if (exo === "pompes") {
    titre.textContent = "Pompes Genoux";
    desc.textContent = "3 séries de 8-10 répétitions.";
    imageExo.src = "images/pompes.jpg";
    videoSource.src = "videos/pompes.mp4";
}

if (exo === "squats") {
    titre.textContent = "Squats";
    desc.textContent = "3 séries de 15 répétitions.";
    imageExo.src = "images/squats.jpg";
    videoSource.src = "videos/squats.mp4";
}

if (exo === "dips") {
    titre.textContent = "Dips sur chaise";
    desc.textContent = "3 séries de 8 répétitions.";
    imageExo.src = "images/dips.jpg";
    videoSource.src = "videos/dips.mp4";
}
document.getElementById("videoExo").load();

