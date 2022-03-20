
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})











var hamburger_menu = document.querySelector('.hamburger-menu');
var custom = document.querySelector('.custom-navbar');
var overlay = document.querySelector('.overlay');



function toggle(){
    hamburger_menu = document.querySelector('.hamburger-menu');
    overlay = document.querySelector('.overlay');
}

function events(){
    hamburger_menu.addEventListener('click', ()=>{
        custom.classList.toggle("active");
        overlay.classList.toggle('active');
    })
}


toggle();
events();







