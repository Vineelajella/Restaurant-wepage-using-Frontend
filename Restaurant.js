const header=document.querySelector("header");
window.addEventListener("scroll" ,function() {
    header.classList.toggle("sticky",window.scrollY>80);
});
let menu=document.querySelector('#icon');
let navlist=document.querySelector('.navlist');

menu.onclick=() => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');

};
const sr=ScrollReveal({
    origin:'top',
    distance:'85px',
    duration:2500,
    reset:true

})
sr.reveal('.home-text',{delay:300});
sr.reveal('.home-img',{delay:400});
sr.reveal('.home-container',{delay:300});

sr.reveal('.about-img',{});
sr.reveal('.about-text',{delay:400});

sr.reveal('.middle-text',{});
sr.reveal('.row-btn,shop-content',{delay:400});

sr.reveal('.review-content,.shop-content',{delay:300});
sr.reveal('.review-content,.contact',{delay:300});

