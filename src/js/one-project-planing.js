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
        //let foto = document.querySelector('.foto');
        let wrapperProductSlider = document.querySelector('.wrapper-product-slider');
        let wrappPlanningProject = document.querySelector('.planning-project-prew');
        //let consultWrapp = document.querySelector('.box-consultation-2');
        let footerWrapp = document.querySelector('.footer-wrapper');

        //foto.style.marginRight = lastColWidht + 'px';
        wrapperProductSlider.style.marginRight = lastColWidht + 'px';
        wrappPlanningProject.style.paddingRight = lastColWidht + 'px';

        //consultWrapp.style.marginRight = lastColWidht + 'px';
        footerWrapp.style.paddingRight = lastColWidht + 'px';

        if(document.body.clientWidth < 1280) {
            //consultWrapp.style.marginRight = 0 + 'px';
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
