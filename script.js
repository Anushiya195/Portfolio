// ================================
// AOS Animation
// ================================

AOS.init({

    duration:1000,
    once:true

});

// ================================
// Navbar Background Change
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.style.background="#001f54";
        navbar.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";

    }

    else{

        navbar.style.background="#0d1b2a";
        navbar.style.boxShadow="none";

    }

});

// ================================
// Typing Animation
// ================================

const texts=[

    "Aspiring Full Stack Developer",

    "MERN Stack Developer",

    "Front-end Developer",

    "Java Full Stack Learner",

    "Web Developer",

    "UI / UX Enthusiast"

];

let count=0;
let index=0;
let currentText="";
let letter="";

(function typing(){

    if(count===texts.length){

        count=0;

    }

    currentText=texts[count];

    letter=currentText.slice(0,++index);

    document.getElementById("typing").textContent=letter;

    if(letter.length===currentText.length){

        count++;
        index=0;

        setTimeout(typing,1500);

    }

    else{

        setTimeout(typing,120);

    }

})();

// ================================
// Scroll To Top Button
// ================================

const topBtn=document.createElement("button");

topBtn.innerHTML="<i class='fa-solid fa-arrow-up'></i>";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#0d6efd";
topBtn.style.color="#fff";
topBtn.style.fontSize="18px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";
topBtn.style.transition=".3s";
// ================================
// Scroll To Top Button Function
// ================================

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ================================
// Active Navbar Link
// ================================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;
        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// ================================
// Project Card Hover Effect
// ================================

const projectCards=document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

// ================================
// Button Hover Animation
// ================================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});

// ================================
// Smooth Fade-in for Cards
// ================================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.style.transition=".4s";

});

// ================================
// Welcome Message
// ================================

window.onload=()=>{

    console.log("===================================");
    console.log(" Welcome to Anushiya Portfolio ");
    console.log("===================================");

};

// ================================
// Current Year in Footer (Optional)
// ================================

const year=document.querySelector("#year");

if(year){

    year.textContent=new Date().getFullYear();

}