var wrapper = document.querySelector(".wrapper")

var hamburger_menu = document.querySelector(".hamburger_menu")


function events(){
    hamburger_menu.addEventListener("click",() =>{
        wrapper.classList.toggle("active");
    })
}

events();