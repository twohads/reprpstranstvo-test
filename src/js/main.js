let line = document.querySelector('.line');
let images = document.querySelectorAll('.img-gallary');
let imageWidth;
let lineWidth = 0;
let next = document.querySelector('.arrow-right');
let prev = document.querySelector('.arrow-left');

let imageMain = document.querySelectorAll('.img-maim');

let activeNumber = images.length - 1;
let countImages = images.length - 1;


windowWidth = window.innerWidth;

function  workOutContainer() {
    $(window).on('load', function(){
        imageWidth = images[activeNumber].offsetWidth + parseInt(getComputedStyle(images[activeNumber]).marginRight);
        lineWidth = imageWidth * (countImages + 1);
        line.style.width = lineWidth + 'px';
        images[activeNumber].classList.add('im-small-active');
        imageMain[activeNumber].classList.add('im-main-active');
    });
}

function nextItem() {
    images[activeNumber].classList.remove('im-small-active');
    imageMain[activeNumber].classList.remove('im-main-active');
    activeNumber = !activeNumber ? countImages : activeNumber - 1;

    images[activeNumber].classList.add('im-small-active');

    anime({
        targets: imageMain[activeNumber],
        opacity: 0.1,
        easing: 'linear',
        duration: 100,
        direction: 'reverse'
    });

    imageMain[activeNumber].classList.add('im-main-active');


    if (activeNumber > 0 || windowWidth < 800) {
        line.style.right =- (imageWidth * (countImages - activeNumber)) + 'px';
    }
}

function prevItem() {
    images[activeNumber].classList.remove('im-small-active');
    imageMain[activeNumber].classList.remove('im-main-active');

    activeNumber = activeNumber === countImages ? 0 : activeNumber + 1;

    images[activeNumber].classList.add('im-small-active');

    anime({
        targets: imageMain[activeNumber],
        opacity: 0.1,
        easing: 'linear',
        duration: 100,
        direction: 'reverse'
    });

    imageMain[activeNumber].classList.add('im-main-active');


    line.style.right =- (imageWidth * (countImages - activeNumber)) + 'px';

    if (!activeNumber && windowWidth >= 800) {
        line.style.right =- (imageWidth * (countImages - activeNumber - 1)) + 'px';
    }
}

if(windowWidth > 578) {
    workOutContainer();
}

next.onclick = nextItem;
prev.onclick = prevItem;
window.addEventListener('resize', workOutContainer);

// Mobile: change to slick

window.addEventListener("orientationchange", function() {
    window.location.reload();
}, false);
if(document.body.clientWidth < 578) {
    $('.line').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        //centerMode: true,
        // centerPadding: '20px',
        //variableWidth: true,
        infinite: false
    });
}



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
            breakpoint: 800,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
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

        picture.style.backgroundImage = this.style.backgroundImage;
    });
});

arrowRight.onclick = function () {
    number++;

    if(number == imagesForModal.length){
        number =  0;
    }
    picture.style.backgroundImage = imagesForModal[number].style.backgroundImage
}

arrowLeft.onclick = function () {

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
