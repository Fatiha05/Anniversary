const message = `Dear My Love ❤️,

Happy Anniversary, my goltu baba . ❤️

If I had to choose a home, I would choose you—every single time. You turned my ordinary days into beautiful memories and my hardest moments into reasons to smile. Thank you for loving me in ways words can never fully describe.

No matter how many years pass, my heart will always find its way back to you. You're not just the love of my life; you're the peace my soul searched for. Here's to us, to our story, and to a lifetime of choosing each other.

I love you more than yesterday, and even less than tomorrow. Forever begins with you. ♾️❤️


Happy Anniversary, My Lokkhi❤️

Forever Yours,
❤️`;

const typing = document.getElementById("typing");
const nextBtn = document.getElementById("nextBtn");

nextBtn.style.display = "none";

let index = 0;

function typeWriter(){

    if(index < message.length){

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,35);

    }
    else{

        nextBtn.style.display="inline-block";

    }

}

typeWriter();