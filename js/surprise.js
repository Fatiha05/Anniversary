const gift = document.getElementById("gift");
const surprise = document.getElementById("surpriseContent");
const music = document.getElementById("celebration");

gift.onclick = () => {

    gift.style.display = "none";

    surprise.classList.remove("hidden");

    music.play();

    createHearts();

    createConfetti();

};

function createHearts(){

    for(let i=0;i<120;i++){

        const heart=document.createElement("div");

        heart.className="burst-heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.animationDuration=(2+Math.random()*4)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>heart.remove(),6000);

    }

}

function createConfetti(){

    const colors=["#ff2d75","#ffd700","#00e5ff","#ffffff","#ff7eb3"];

    for(let i=0;i<180;i++){

        const conf=document.createElement("div");

        conf.className="confetti";

        conf.style.left=Math.random()*100+"vw";

        conf.style.background=colors[Math.floor(Math.random()*colors.length)];

        conf.style.animationDuration=(2+Math.random()*4)+"s";

        conf.style.animationDelay=Math.random()+"s";

        document.body.appendChild(conf);

        setTimeout(()=>conf.remove(),6000);

    }

}

function fireworks(){

for(let i=0;i<25;i++){

const fire=document.createElement("div");

fire.className="firework";

fire.style.left=Math.random()*100+"vw";

fire.style.top=Math.random()*100+"vh";

fire.style.background=
`hsl(${Math.random()*360},100%,60%)`;

document.body.appendChild(fire);

setTimeout(()=>fire.remove(),1600);

}

}

setInterval(fireworks,1800);

const foreverBtn = document.getElementById("foreverBtn");

const ending = document.getElementById("endingMessage");

foreverBtn.addEventListener("click",()=>{

    createHearts();

    createConfetti();

    fireworks();

    ending.style.opacity="1";

    ending.innerHTML=

    "✨ See You In Our Next Chapter ❤️ ✨";

});