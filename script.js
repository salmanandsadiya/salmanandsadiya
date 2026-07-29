console.log("Script loaded!");
// Wedding Date
const weddingDate = new Date("August 17, 2026 10:30:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {

        clearInterval(countdown);

        document.querySelector(".timer").innerHTML =
        "<h2>💍 We're Married! 💍</h2>";

    }

}, 1000);

// Gold Confetti Rain

const petals = document.getElementById("petals");

function createConfetti(){

    if(!petals) return;

    const confetti = document.createElement("div");

    confetti.className = "confetti";

    confetti.style.left = Math.random() * window.innerWidth + "px";

    confetti.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    petals.appendChild(confetti);

    setTimeout(()=>{
        confetti.remove();
    },10000);

}

setInterval(createConfetti,300);