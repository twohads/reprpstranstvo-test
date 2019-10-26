run();

function run(){

    let leftGap = document.querySelector('.box-1-art').offsetWidth;
    let rightGap = document.querySelector('.box-4-art').offsetWidth;
    let articlePrewWrapp = document.querySelector('.article-prew-wrapp');
   let footerWrapp = document.querySelector('.footer-wrapper');

    articlePrewWrapp.style.marginLeft = leftGap + 'px';
    articlePrewWrapp.style.marginRight = rightGap + 'px';

   footerWrapp.style.paddingRight = rightGap + 'px';


}
window.addEventListener('resize', run);