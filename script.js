const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const links = nav.querySelectorAll('a');

burger.addEventListener('click', ()=>{
    ToggleNav();
});

links.forEach(link => {
    link.addEventListener('click', ()=>{
        if(nav.classList.contains('active')) ToggleNav();
    });
});

function ToggleNav(){
    burger.classList.toggle('active');
    burger.querySelector('i').classList.toggle('bx-menu');
    burger.querySelector('i').classList.toggle('bx-x');
    nav.classList.toggle('active');
    document.body.classList.toggle('active');
}