const ham = document.querySelector(".ham")
const nav = document.querySelector("nav")
const navView = document.querySelector(".nav-view")
const hamx = document.querySelector(".rox")
const haml = document.querySelector(".rol")
const body = document.querySelector("body")


function hamburger(){
    navView.classList.toggle("rrrr")
    if(navView.classList.contains("rrrr")){
        haml.style.display= "none"
        hamx.style.display= "block"
    }else{
        haml.style.display= "block"
        hamx.style.display= "none"
    }
}
ham.addEventListener("click", hamburger)