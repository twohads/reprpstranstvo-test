let line = document.querySelector('.line');
let images = document.querySelectorAll('.img-gallary');
let sliderWidth = document.querySelector('.wrap-img').offsetWidth;
let widthArray = [0];
let lineWidth = 0;
let offset = 0;
let step = 0;
let residue;
let next = document.querySelector('.arrow-right');
let prev = document.querySelector('.arrow-left');


for (let i = 0; i < images.length; i++){
    widthArray.push(images[i].offsetWidth);
    lineWidth += images[i].offsetWidth + parseInt(getComputedStyle(images[i]).marginRight);
}
console.log(lineWidth);
line.style.width = lineWidth+'px';


next.onclick = function () {

    residue = lineWidth - sliderWidth - (offset + widthArray[step]);

    if(residue >= 0){
        if(offset == 0){
            step = 1;
            offset = 1
        }
        offset = offset + widthArray[step];
        line.style.left = -offset+'px';
        console.log(offset, step);
        console.log('равно 0');
    }
    else {
        offset = 0;
        step = 0;
        line.style.left = -(lineWidth - sliderWidth)+'px';
        console.log(offset, step);
        console.log('больше 0');

    }

    if(step+1 == images.length){
        step = 0;
        offset = 0;
        line.style.left = 0;
        console.log(offset, step);
        console.log('условия равны');
    }
    else {
        step++;
        console.log(offset, step);
        console.log('мимо условий');
    }


}

prev.onclick = function () {
    step--;
    let currentLeft = parseInt(getComputedStyle(line).left);
    line.style.left = (currentLeft + widthArray[step])+'px';

    console.log(offset, step);



}