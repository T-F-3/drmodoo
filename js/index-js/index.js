/* ----------nav------------ */
function Promotion(){
    const AtopPromotionBtn = document.querySelector('.x');
    const AtopPromotion = document.querySelector('.top_promotion')

     AtopPromotionBtn.addEventListener('click', () => {
        AtopPromotion.style.height = '0'
        AtopPromotion.style.transform = 'translateY(-10px)'
        AtopPromotion.style.color = 'transparent'
        AtopPromotionBtn.style.display = 'none'
     })
}

Promotion();


 addEventListener('scroll', () => {
    const Navbg = document.querySelector('.nav_left');
        scrollY > 90 ? Navbg.style.width = '100%' : Navbg.style.width = '50%';

 });


 /* ----------header---------- */
 (function headerSlide() {
    const headerTopImg1 = document.querySelector('.Headimgbox .img1');
    const headerTopImg2 = document.querySelector('.Headimgbox .img2');
    const headerBottomNeBtn1 = document.querySelector('.Headimgbox .siled1');
    const headerBottomNeBtn2 = document.querySelector('.Headimgbox .siled2');



    headerBottomNeBtn1.addEventListener('click', () => {
        headerTopImg2.classList.toggle('ative');
    })
    headerBottomNeBtn2.addEventListener('click', () => {
        headerTopImg2.classList.toggle('ative');
    });
    /* 슬라이드1 a링크 z-index */
    headerBottomNeBtn1.addEventListener('click', () => {
        headerTopImg1.classList.toggle('ative');
    })
    headerBottomNeBtn2.addEventListener('click', () => {
        headerTopImg1.classList.toggle('ative');
    });
})();
// setInterval(콜백함수, 시간);
setInterval(function () {
    const headerTopImg2 = document.querySelector('.Headimgbox .img2');
    headerTopImg2.classList.toggle('ative');
    const headerTopImg1 = document.querySelector('.Headimgbox .img1');
    headerTopImg1.classList.toggle('ative');
}, 4000);



/* ----------main_swiper--------------- */
let mainSswiper = new Swiper(".swiper1", {
    speed: 400,
    effect : 'fade',
    parallax: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: false,
    },
    navigation: {
        nextEl: "#main_swiper .swiper-button-next",
        prevEl: "#main_swiper .swiper-button-prev",
    },
});


let mainreview = new Swiper("#swiper2", {
        loop: false,
        autoplay: false,
        slidesPerView: 3.5,
        spaceBetween: 15,
        slidesPerGroup: 3,
        freeMode: true,
        observer: true,	// 추가
        observeParents: true,	// 추가
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        navigation: {
            nextEl: '#main_review .swiper-button-next',
            prevEl: '#main_review .swiper-button-prev',
        },
});

/* anination */

addEventListener('scroll', () => {
    const ani1 = document.querySelector('.reorgaTxt p');
    const ani2 = document.querySelector('.scalplabTxt p');

    if(scrollY>2537){
        ani1.style.opacity = '1'
        if(scrollY >= 2600){
            ani1.style.transform = 'translateY(0px)'
        }else{
            ani1.style.transform = 'translateY(-120px)'
        }
    }else{
        ani1.style.opacity = '0'
    } 
    if(scrollY>3300){
        ani2.style.opacity = '1'
        if(scrollY >= 3440){
            ani2.style.transform = 'translateY(0px)'
        }else{
            ani2.style.transform = 'translateY(-120px)'
        }
    }else{
        ani2.style.opacity = '0'
    } 
    console.log(scrollY)

    
})
