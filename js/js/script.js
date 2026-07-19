// ===============================
// Floating Hearts
// ===============================

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    if (!heartsContainer) return;

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 300);


// ===============================
// Loader
// ===============================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.style.opacity = "0";

            setTimeout(function () {

                loader.style.display = "none";

            }, 1000);

        }, 1800);

    }

});


// ===============================
// Falling Roses
// ===============================

function createPetals() {

    setInterval(function () {

        const petal = document.createElement("div");

        petal.className = "petal";

        petal.innerHTML = "🌹";

        petal.style.left = Math.random() * 100 + "vw";

        petal.style.animationDuration = (5 + Math.random() * 5) + "s";

        document.body.appendChild(petal);

        setTimeout(function () {

            petal.remove();

        }, 10000);

    }, 600);

}

createPetals();


// ===============================
// Mouse Sparkles
// ===============================

document.addEventListener("mousemove", function (e) {

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";

    star.style.left = e.clientX + "px";

    star.style.top = e.clientY + "px";

    star.style.fontSize = "18px";

    star.style.pointerEvents = "none";

    star.style.zIndex = "9999";

    document.body.appendChild(star);

    setTimeout(function () {

        star.remove();

    }, 600);

});


// ===============================
// Romantic Quotes
// ===============================

const quotes = [

    "Every day with you is my favorite day ❤️",

    "I still fall in love with you every single day.",

    "Forever starts with you.",

    "You are my home.",

    "You are my greatest blessing.",

    "Every heartbeat whispers your name.",

    "My favorite place is beside you.",

    "You complete my world."

];

setInterval(function () {

    const quote = document.getElementById("quote");

    if (quote) {

        const random = Math.floor(Math.random() * quotes.length);

        quote.innerHTML = quotes[random];

    }

}, 4000);


// ===============================
// Hidden Secret Message
// ===============================

const bigHeart = document.querySelector(".heart");

let clicks = 0;

if (bigHeart) {

    bigHeart.addEventListener("click", function () {

        clicks++;

        if (clicks === 7) {

            alert("💌 One more surprise is waiting for you... ❤️");

        }

    });

}