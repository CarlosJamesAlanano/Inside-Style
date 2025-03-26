const toggleMenu = document.querySelector(".toggle_menu");
const navMobile = document.querySelector(".nav");
const backdrop = document.querySelector(".backdrop");

toggleMenu.addEventListener("click", ()=>{
    toggleMenu.classList.toggle("open");
    navMobile.classList.toggle("open");
    backdrop.classList.toggle("open");
})