const toggleMenu = document.querySelector(".toggle_menu");
const navMobile = document.querySelector(".nav");

toggleMenu.addEventListener("click", ()=>{
    toggleMenu.classList.toggle("open");
    navMobile.classList.toggle("open");
})