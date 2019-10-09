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
    centerMode: false,
    focusOnSelect: true
});

let productSlider1 = document.querySelectorAll('.slider-product-item');

for (let i = 0; i < productSlider1.length; i++){
    productSlider1[i].onclick = function (event) {
        console.log('мимсоль');
    }
}

/*
let commonWrapp = document.querySelector('.common-project-small-wrapp').offsetWidth;
let boxWrapp = document.querySelector('.project-box2').offsetWidth;
let imgProjectSmall = document.querySelectorAll('.wrapper-project-small');
console.log(commonWrapp, boxWrapp);

for (let i = 0; i < imgProjectSmall.length; i++){
    imgProjectSmall[i].style.width = commonWrapp / 2 - 30+'px';
}

document.addEventListener("DOMContentLoaded", function(event)
{
    window.onresize = function() {
        for (let i = 0; i < imgProjectSmall.length; i++){
            console.log('hbdtt');
            imgProjectSmall[i].style.width = commonWrapp / 2 - 30+'px';
        }
    };
});
*/
