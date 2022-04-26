const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const links = nav.querySelectorAll('a');

burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener('click', ()=>{
        burger.classList.toggle('active');
        nav.classList.toggle('active');
    });
});