$('.interior-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $('.interior-project-left-arrow'),
    nextArrow: $('.interior-project-right-arrow'),
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// SCRIPT FOR MODAL

let modal      = document.querySelector('.modal-window'),
    blackout   = document.querySelector('.blackout'),
    imagesForModal     = document.querySelectorAll('.interior-image'),
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






// Visualization

$('.visualization-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $('.arrow-left__slider-project'),
    nextArrow: $('.arrow-right__slider-project'),
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

let modalVisualization     = document.querySelector('.modal-visualization'),
    blackoutVisualization   = document.querySelector('.blackout-visualization'),
    imagesForModalVisualization  = document.querySelectorAll('.visualization-image'),
    closeVisualization      = document.querySelector('.close-visualization'),
    arrowLeftVisualization  = document.querySelector('.arrow-left-modal__visualization'),
    arrowRightVisualization = document.querySelector('.arrow-right-modal__visualization'),
    pictureVisualization    = document.querySelector('.picture-visualization'),
    numberVisualization = 0;

imagesForModalVisualization.forEach((img, index) => {
    img.addEventListener('click', function () {
        numberVisualization = index;
        modalVisualization.style.display = 'block';

        pictureVisualization.style.backgroundImage = this.style.backgroundImage;
    });
});

arrowRightVisualization.onclick = function () {
    numberVisualization++;

    if(numberVisualization == imagesForModalVisualization.length){
        numberVisualization =  0;
    }
    pictureVisualization.style.backgroundImage = imagesForModalVisualization[numberVisualization].style.backgroundImage
}

arrowLeftVisualization.onclick = function () {

    numberVisualization--;

    if(numberVisualization == -1){
        numberVisualization = imagesForModalVisualization.length - 1;
    }
    pictureVisualization.style.backgroundImage = imagesForModalVisualization[numberVisualization].style.backgroundImage
}

closeVisualization.onclick = function () {
    modalVisualization.style.display = "none";
}

modalVisualization.onclick = function (event) {
    if(event.target == blackoutVisualization){
        modalVisualization.style.display = "none";
    }
}



// All plane of project
$('.slider-plane').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    prevArrow: $('.arrow-left-modal__plane'),
    nextArrow: $('.arrow-right-modal__plane')
});


let modalPlane = document.querySelector('.modal-plane'),
    btnPlane = document.querySelector('#btn-plane'),
    blackoutPlane = document.querySelector('.blackout-plane'),
    imageAllPlane = document.querySelectorAll('plane-img'),
    closePlane = document.querySelector('.close-plane');


btnPlane.onclick = function () {
    modalPlane.style.display = 'block';
}

closePlane.onclick = function () {
    modalPlane.style.display = 'none';
}

modalPlane.onclick = function (event) {
    if(event.target == blackoutPlane){
        modalPlane.style.display = "none";
    }
}

