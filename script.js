/* ===========================
   LOADING
=========================== */

window.addEventListener("load", () => {
    const loading = document.getElementById("loading");

    setTimeout(() => {
        loading.style.display = "none";
    }, 2000);
});

/* ===========================
   OPEN LETTER
=========================== */

const openLetter = document.getElementById("openLetter");
const letter = document.getElementById("letter");

openLetter.addEventListener("click", () => {

    letter.scrollIntoView({
        behavior: "smooth"
    });

});

/* ===========================
   MUSIC
=========================== */

const music = document.getElementById("music");

if (music) {
    document.body.addEventListener("click", () => {
        music.play().catch(() => {});
    }, { once: true });
}

/* ===========================
   COUNTDOWN
=========================== */

const birthday = new Date("Juni, 28, 2026 ").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

    const seconds = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

},1000);

/* ===========================
   LEAF GENERATOR
=========================== */

const leafContainer = document.querySelector(".leaf-container");

function createLeaf(){

    const leaf = document.createElement("div");

    leaf.classList.add("leaf");

    leaf.innerHTML="🍃";

    leaf.style.left=Math.random()*100+"vw";

    leaf.style.animationDuration=
    Math.random()*5+5+"s";

    leaf.style.fontSize=
    Math.random()*20+20+"px";

    leafContainer.appendChild(leaf);

    setTimeout(()=>{

        leaf.remove();

    },10000);

}

setInterval(createLeaf,400);

/* ===========================
   GIFT BUTTON
=========================== */

const giftBtn=document.getElementById("giftBtn");

giftBtn.onclick=()=>{

    alert("🎉 Selamat Ulang Tahun 💚\nSemoga semua impianmu tercapai dan selalu bahagia!");

};

/* ===========================
   RANDOM SPARKLES
=========================== */

function createSpark(){

    const spark=document.createElement("div");

    spark.className="spark";

    spark.style.left=Math.random()*window.innerWidth+"px";

    spark.style.top=Math.random()*window.innerHeight+"px";

    document.body.appendChild(spark);

    setTimeout(()=>{

        spark.remove();

    },2000);

}

setInterval(createSpark,300);
/* ===========================
   CONFETTI EFFECT
=========================== */

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let confetti = [];

function createConfetti() {
    confetti = [];

    for (let i = 0; i < 180; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 4,
            speed: Math.random() * 3 + 2,
            color: [
                "#2E7D32",
                "#43A047",
                "#66BB6A",
                "#81C784",
                "#A5D6A7",
                "#C8E6C9"
            ][Math.floor(Math.random() * 6)]
        });
    }
}

function drawConfetti() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    confetti.forEach(c=>{

        ctx.fillStyle=c.color;

        ctx.fillRect(c.x,c.y,c.size,c.size);

        c.y+=c.speed;

        if(c.y>canvas.height){

            c.y=-20;

        }

    });

    requestAnimationFrame(drawConfetti);

}

createConfetti();
drawConfetti();

/* ===========================
   SCROLL ANIMATION
=========================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(80px)";
    section.style.transition=".8s";

    observer.observe(section);

});

/* ===========================
   FLOATING HEARTS
=========================== */

function heart(){

    let h=document.createElement("div");

    h.innerHTML="💚";

    h.style.position="fixed";
    h.style.left=Math.random()*100+"vw";
    h.style.bottom="-30px";
    h.style.fontSize=(20+Math.random()*30)+"px";
    h.style.pointerEvents="none";
    h.style.animation="heartUp 6s linear forwards";

    document.body.appendChild(h);

    setTimeout(()=>{

        h.remove();

    },6000);

}

setInterval(heart,1200);

/* ===========================
   HEART STYLE
=========================== */

const style=document.createElement("style");

style.innerHTML=`

@keyframes heartUp{

0%{

transform:translateY(0) scale(.8);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:translateY(-110vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);

/* ===========================
   GIFT CONFETTI
=========================== */

giftBtn.addEventListener("click",()=>{

    createConfetti();

});

/* ===========================
   HAPPY BIRTHDAY POPUP
=========================== */

setTimeout(()=>{

alert("🎂 Happy Birthday! 💚\nSemoga hari ini menjadi awal dari tahun yang penuh kebahagiaan.");

},3000);

/* ===========================
   END
=========================== */