let burgerIcon = document.querySelector('.burger'),
    burgerPopUp = document.querySelector('.gamburger-pop-up'),
    burgerOverlay  = document.querySelector('.burger-overlay'),
    closeMenu = document.querySelector('.close-menu');

burgerIcon.onclick = function () {
    burgerPopUp.style.display = 'block';
    anime({
        targets: burgerPopUp,
        opacity: 0.1,
        easing: 'linear',
        duration: 200,
        direction: 'reverse'
    });
}

closeMenu.onclick = function () {
    burgerPopUp.style.display = 'none';
    anime({
        targets: burgerPopUp,
        opacity: 0.1,
        easing: 'linear',
        duration: 200,
        direction: 'reverse'
    });
}

burgerOverlay.onclick = function () {
    burgerPopUp.style.display = 'none';
}
