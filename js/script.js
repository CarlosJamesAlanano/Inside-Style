const toggleMenu = document.querySelector(".toggle_menu");
const navMobile = document.querySelector(".nav");
const backdrop = document.querySelector(".backdrop");

toggleMenu.addEventListener("click", ()=>{
    toggleMenu.classList.toggle("open");
    navMobile.classList.toggle("open");
    backdrop.classList.toggle("open");
})

const headerWrapper = document.querySelector(".header_wrapper");

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 100){
        headerWrapper.classList.add("open")
    } else {
        headerWrapper.classList.remove("open");
    }
})