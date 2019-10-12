let line = document.querySelector('.line');
let images = document.querySelectorAll('.img-gallary');
let imageWidth;
let lineWidth = 0;
let next = document.querySelector('.arrow-right');
let prev = document.querySelector('.arrow-left');

let imageMain = document.querySelectorAll('.img-maim');

var activeNumber = images.length - 1;
var countImages = images.length - 1;

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

    line.style.right =- (imageWidth * (countImages - activeNumber)) + 'px';

    if (!activeNumber && windowWidth >= 800) {
        line.style.right =- (imageWidth * (countImages - activeNumber - 1)) + 'px';
    }
}

next.onclick = nextItem;
prev.onclick = prevItem;

//var hammertime = new Hammer(line);
//hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

//hammertime.on("swipeleft", prevItem);
//hammertime.on("swiperight", nextItem);


// Product slider
$('.slider-product-items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $('.arrow-left__slider-project'),
    nextArrow: $('.arrow-right__slider-project'),
    centerMode: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 660,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }
    ]
});

let productSlider1 = document.querySelectorAll('.slider-product-item');

for (let i = 0; i < productSlider1.length; i++){
    productSlider1[i].onclick = function (event) {
        console.log('мимсоль');
    }
}
run();

function run(){
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
}
window.addEventListener('resize', run);
