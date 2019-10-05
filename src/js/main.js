let line = document.querySelector('.line');
let images = document.querySelectorAll('.img-gallary');
let sliderWidth = document.querySelector('.wrap-img').offsetWidth;
let widthArray = [0];
let lineWidth = 0;
let offset = 0;
let step = 0;
let residue;
var isResizeble = false;

for (let i = 0; i < images.length; i++){
    widthArray.push(images[i].offsetWidth);
    lineWidth += images[i].offsetWidth;
}

line.style.width = (18*(images.length+1)) + lineWidth+'px';

document.onclick = function () {

    residue = lineWidth - sliderWidth - (offset + widthArray[step]);
    if(residue >= 0){
         if(offset == 0){
             step = +1;
         }
        offset = offset + widthArray[step];
        line.style.left = -offset+'px';
    }
    else {
        line.style.left = -(lineWidth - sliderWidth)+'px';
        offset = 0;
        step = -1;
    }

    if(step+1 == images.length){
        step = 0;
        offset = 0;
    }
    else {
        step++;
    }


}