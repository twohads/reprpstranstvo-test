let windowWidth;
windowWidth = window.innerWidth;

run();

function run(){

    let leftGap = document.querySelector('.box-1-one-art').offsetWidth;
    let rightGap = document.querySelector('.box-4-one-art').offsetWidth;
    let articleContent = document.querySelector('.article-content-container');
    let articleSidebar = document.querySelector('.col-2-art');
    let widthBox3 = document.querySelector('.box-3-one-art ').offsetWidth;
    let widthMainFoto = document.querySelector('.art-main-blog').offsetWidth;
    let footerWrapp = document.querySelector('.footer-wrapper');

    articleContent.style.marginLeft = leftGap + 'px';
    articleContent.style.marginRight = rightGap + 'px';
    articleSidebar.style.paddingLeft = ((widthBox3 - widthMainFoto) + 20) + 'px';
    footerWrapp.style.paddingRight = rightGap + 'px';

    if (windowWidth <= 800) {
        articleSidebar.style.paddingLeft = 0;
    }



}

window.addEventListener('resize', run);