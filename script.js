const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// when hamburger clicked add class that turns into an X and displays menu
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

// when menu item is clicked the pop up menu closes and hamburger sign returns
document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', ()=> {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
})