(function headerSlide() {
    const headerTopImg = document.querySelector('.Headimgbox .img2');
    const headerBottomNeBtn1 = document.querySelector('.Headimgbox .siled1');
    const headerBottomNeBtn2 = document.querySelector('.Headimgbox .siled2');



    headerBottomNeBtn1.addEventListener('click', () => {
        headerTopImg.classList.remove('ative');
        headerTopImg.classList.add('ative');
    })
    headerBottomNeBtn2.addEventListener('click', () => {
        headerTopImg.classList.add('ative');
        headerTopImg.classList.remove('ative');
    });
})();
// setInterval(콜백함수, 시간);
setInterval(function () {
    const headerTopImg = document.querySelector('.Headimgbox .img2');
    headerTopImg.classList.toggle('ative');
}, 4000);


