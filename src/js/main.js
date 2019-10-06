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



for (let i = 0; i < images.length; i++){
    widthArray.push(images[i].offsetWidth);
    lineWidth += images[i].offsetWidth + parseInt(getComputedStyle(images[i]).marginRight);
    imageWidth = images[0].offsetWidth + parseInt(getComputedStyle(images[i]).marginRight);
}


line.style.width = lineWidth+'px';

next.onclick = function () {

    residue = lineWidth - sliderWidth + imageWidth;

    offset = offset + imageWidth;
    line.style.left = -offset+'px';
    console.log(offset, step, residue);

    if(offset > residue){
        offset = 0;
        step = 0;
    }


}

prev.onclick = function () {
    step--;
    line.style.left = + offset+'px';
}