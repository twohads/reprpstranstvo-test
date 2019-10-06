let line = document.querySelector('.line');
let images = document.querySelectorAll('.img-gallary');
let sliderWidth = document.querySelector('.wrap-img').offsetWidth;
let widthArray = [0];
let imageWidth;
let lineWidth = 0;
let offset = 0;
let step = 0;
let residue = 0;
let next = document.querySelector('.arrow-right');
let prev = document.querySelector('.arrow-left');
let lineLeft = 0;

let imageMain = document.querySelectorAll('.img-maim');

for (let i = 0; i < images.length; i++){
    widthArray.push(images[i].offsetWidth);
    lineWidth += images[i].offsetWidth + parseInt(getComputedStyle(images[i]).marginRight);
    imageWidth = images[0].offsetWidth + parseInt(getComputedStyle(images[i]).marginRight);
    images[0].classList.add('im-small-active');
}

for (let i = 0; i < imageMain.length; i++){
    if(imageMain[0]){
        imageMain[0].classList.add('im-main-active');
    }
}



line.style.width = lineWidth+'px';

next.onclick = function () {

    residue = lineWidth - sliderWidth + imageWidth;


    if(imageMain[step].classList.contains("im-main-active")){
        imageMain[step].classList.remove('im-main-active');
    }

    if(images[step].classList.contains('im-small-active')){
        images[step].classList.remove('im-small-active');
    }

    offset = offset + imageWidth;
    line.style.left = -offset+'px';
    step++;

    if(step < images.length){
        imageMain[step].classList.add('im-main-active');
        images[step].classList.add('im-small-active');
    }



    if(offset > residue){
        line.style.left =  parseInt(getComputedStyle(line).left)+'px';
        console.log(offset, step, residue, parseInt(getComputedStyle(line).left));
        console.log(imageMain[step]);
            if(step == images.length ){
                console.log('степ равен');
                step = 0;
                offset = 0;
                line.style.left = 0+'px';
                imageMain[0].classList.add('im-main-active');
                images[step].classList.add('im-small-active');
                return;
            }
    }



}

prev.onclick = function () {
    step--;

    if(imageMain[step].classList.contains("im-main-active")){
        imageMain[step].classList.remove('im-main-active');
    }

    if(images[step].classList.contains('im-small-active')){
        images[step].classList.remove('im-small-active');
    }

    imageMain[step].classList.add('im-main-active');
    images[step].classList.add('im-small-active');


    if(parseInt(getComputedStyle(line).left) >= 10 || parseInt(getComputedStyle(line).left) == 0){
        offset = 0;
        step = 0;
        line.style.left = parseInt(getComputedStyle(line).left)+'px';
        return;
    }
    line.style.left = parseInt(getComputedStyle(line).left) + imageWidth+'px';
    console.log(parseInt(getComputedStyle(line).left));
}