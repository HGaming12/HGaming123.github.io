burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
RightNav = document.querySelector('.RightNav')
navlist = document.querySelector('.nav-list')




burger.addEventListener('click', ()=>{
    RightNav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-class-resp')

})