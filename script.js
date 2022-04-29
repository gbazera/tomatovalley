const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const links = nav.querySelectorAll('a');

const theme = document.querySelector('.theme');

window.addEventListener('load', ()=>{
    var bool = JSON.parse(localStorage.getItem('light'));
    if(bool == true) document.body.classList.add('light');
});

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
    window.scroll(0, document.body.scrollTop);
}

theme.addEventListener('click', ()=>{
    var toggle = document.body.classList.toggle('light');
    theme.querySelector('i').classList.toggle('bxs-sun');
    theme.querySelector('i').classList.toggle('bxs-moon');
    localStorage.setItem('light', toggle);
})