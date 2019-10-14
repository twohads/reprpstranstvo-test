let line = document.querySelector('.line');
let images = document.querySelectorAll('.img-gallary');
let imageWidth;
let lineWidth = 0;
let next = document.querySelector('.arrow-right');
let prev = document.querySelector('.arrow-left');

let imageMain = document.querySelectorAll('.img-maim');

let activeNumber = images.length - 1;
let countImages = images.length - 1;

imageWidth = images[activeNumber].offsetWidth + parseInt(getComputedStyle(images[activeNumber]).marginRight);

lineWidth = imageWidth * (countImages + 1);
line.style.width = lineWidth + 'px';

images[activeNumber].classList.add('im-small-active');
imageMain[activeNumber].classList.add('im-main-active');

windowWidth = window.innerWidth;

function nextItem() {
    images[activeNumber].classList.remove('im-small-active');
    imageMain[activeNumber].classList.remove('im-main-active');
    activeNumber = !activeNumber ? countImages : activeNumber - 1;

    images[activeNumber].classList.add('im-small-active');
    imageMain[activeNumber].classList.add('im-main-active');
    anime({
        targets: '.im-main-active',
        opacity: 0.1,
        easing: 'linear',
        duration: 100,
        direction: 'reverse'
    });


    if (activeNumber > 0 || windowWidth < 800) {
        line.style.right =- (imageWidth * (countImages - activeNumber)) + 'px';
    }
}

function prevItem() {
    images[activeNumber].classList.remove('im-small-active');
    imageMain[activeNumber].classList.remove('im-main-active');

    activeNumber = activeNumber === countImages ? 0 : activeNumber + 1;

    images[activeNumber].classList.add('im-small-active');
    imageMain[activeNumber].classList.add('im-main-active');
    anime({
        targets: '.im-main-active',
        opacity: 0.1,
        easing: 'linear',
        duration: 100,
        direction: 'reverse'
    });

    line.style.right =- (imageWidth * (countImages - activeNumber)) + 'px';

    if (!activeNumber && windowWidth >= 800) {
        line.style.right =- (imageWidth * (countImages - activeNumber - 1)) + 'px';
    }
}
$(window).on('load resize', function() {
    next.onclick = nextItem;
    prev.onclick = prevItem;
});


// Mobile: change to slick

$(window).on('load resize', function() {
    if ($(window).width() < 580) {
        $('.line').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            prevArrow: null,
            nextArrow: null,
            infinite: false,
        });
    }
});


// Product slider
$('.slider-product-items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $('.arrow-left__slider-project'),
    nextArrow: $('.arrow-right__slider-project'),
    responsive: [

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

let productSlider1 = document.querySelectorAll('.slider-product-item');

for (let i = 0; i < productSlider1.length; i++){
    productSlider1[i].onclick = function (event) {
    }
}

run();

function run(){

    if(document.body.clientWidth >= 576){
        let lastColWidht = document.querySelector('.box-3').offsetWidth;
        let foto = document.querySelector('.foto');
        let wrapperProductSlider = document.querySelector('.wrapper-product-slider');
        let wrappProject = document.querySelector('.wrapp-project');
        let consultWrapp = document.querySelector('.box-consultation-2');
        let footerWrapp = document.querySelector('.footer-wrapper');
        console.log(lastColWidht);
        foto.style.marginRight = lastColWidht + 'px';
        wrapperProductSlider.style.marginRight = lastColWidht + 'px';
        wrappProject.style.paddingRight = (lastColWidht - 50) + 'px';

        consultWrapp.style.marginRight = lastColWidht + 'px';
        footerWrapp.style.paddingRight = lastColWidht + 'px';

        if(document.body.clientWidth < 1280) {
            consultWrapp.style.marginRight = (lastColWidht - 30) + 'px';
        }
    }
}
window.addEventListener('resize', run);

// SCRIPT FOR MODAL

let modal      = document.querySelector('.modal-window'),
    blackout   = document.querySelector('.blackout'),
    imagesForModal     = document.querySelectorAll('.img-slider-product'),
    close      = document.querySelector('.close'),
    arrowLeft  = document.querySelector('.arrow-left-modal'),
    arrowRight = document.querySelector('.arrow-right-modal'),
    picture    = document.querySelector('.picture'),
    number = 0;

imagesForModal.forEach((img, index) => {
    img.addEventListener('click', function () {
        number = index;
        modal.style.display = 'block';
        anime({
            targets: modal,
            opacity: 0.1,
            easing: 'linear',
            duration: 200,
            direction: 'reverse'
        });
        anime({
            targets: '.picture',
            opacity: 0.1,
            easing: 'linear',
            duration: 100,
            direction: 'reverse'
        });
        picture.style.backgroundImage = this.style.backgroundImage;
    });
});

arrowRight.onclick = function () {
    anime({
        targets: '.picture',
        opacity: 0.5,
        width: '0%', // -> from '28px' to '100%',
        easing: 'linear',
        direction: 'reverse'
    });
    number++;

    if(number == imagesForModal.length){
        number =  0;
    }
    picture.style.backgroundImage = imagesForModal[number].style.backgroundImage
}

arrowLeft.onclick = function () {
    anime({
        targets: '.picture',
        width: '0%', // -> from '28px' to '100%',
        easing: 'easeInOutQuad',
        direction: 'reverse'
    });

    number--;

    console.log(number);
    if(number == -1){
        console.log(number);
        number = imagesForModal.length - 1;
    }
    picture.style.backgroundImage = imagesForModal[number].style.backgroundImage
}

close.onclick = function () {
    modal.style.display = "none";
}

modal.onclick = function (event) {
    if(event.target == blackout){
        modal.style.display = "none";
    }
}


let bouncingBall = anime({
    targets: '.picture',
    width: '100%', // -> from '28px' to '100%',
    easing: 'easeInOutQuad',
    duration: 200,
    direction: 'alternate'
});

let burgerIcon = document.querySelector('.burger'),
    burgerPopUp = document.querySelector('.gamburger-pop-up'),
    burgerOverlay  = document.querySelector('.burger-overlay');

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

burgerOverlay.onclick = function () {
    burgerPopUp.style.display = 'none';
}