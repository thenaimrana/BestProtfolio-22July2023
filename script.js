let Counting1 = document.querySelector("#Counting1");
let COUNT=0;
let setCount = setInterval(naim,200);
function naim (){
    COUNT++;
    Counting1.innerHTML=COUNT;
    if(COUNT==120){
        clearInterval(setCount)
    }

}


// top meno
let Naim = document.querySelector("#Naim");
window.onscroll = function(){
    let SCROLL = window.scrollY;
    if(SCROLL >= 50){
        Naim.classList.add("new_top_meno")
    }else{
        Naim.classList.remove("new_top_meno")
    }
 }

//  top meno click section open
let CONTAINERR = document.querySelector("#CONTAINERR");
let Home = document.querySelector("#Home");
let About = document.querySelector("#About");
let Resume = document.querySelector("#Resume");
let Service = document.querySelector("#Service");
let Skill = document.querySelector("#Skill");
let Project = document.querySelector("#Project");
let Contact = document.querySelector("#Contact");

Home.addEventListener('click', function(){
    window.scrollTo(0,10)
})
// About.addEventListener('click', function(){
//     window.scrollTo(0,650)
// })
// Resume.addEventListener('click', function(){
//     window.scrollTo(0,1220)
// })
// Service.addEventListener('click', function(){
//     window.scrollTo(0,2120)
// })
// Skill.addEventListener('click', function(){
//     window.scrollTo(0,2900)
// })
// Project.addEventListener('click', function(){
//     window.scrollTo(0,3290)
// })
// Contact.addEventListener('click', function(){
//     window.scrollTo(0,4250)
// })

// wow.min.js
new WOW().init();