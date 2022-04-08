// Menu Responsivo:

let show = true;

const menuSection = document.querySelector('.header__menu__div');
const menuToggle = menuSection.querySelector('.menu-toggle');
    
menuToggle.addEventListener('click', function(){
    document.body.style.overflow = show ? 'hidden' : 'initial';
    
    menuSection.classList.toggle('on', show);
    show = !show;
})
