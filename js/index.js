'use strict'
// <    >  =>

window.addEventListener('DOMContentLoaded', () => {
    const abrirBoton = document.querySelector('.open');
    const cerrarBoton = document.querySelector('.closet');
    const modal = document.getElementById('modal');
    const containerNav = modal.querySelector('.container-nav');

    abrirBoton.addEventListener('click', () => {
        modal.classList.add('show');
        containerNav.classList.remove('slide-out-right');
        containerNav.classList.add('slide-in-right');
        document.body.style.overflow = 'hidden';
    });

    cerrarBoton.addEventListener('click', () => {
        containerNav.classList.remove('slide-in-right');
        containerNav.classList.add('slide-out-right');
        
        setTimeout(() => {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }, 500);
    });
});