   
// 버튼 창

const certificateBtn = document.querySelectorAll('.material-symbols-outlined')
const certificateIn = document.querySelectorAll('.Complex_txt div')


for (let i = 0; i < certificateBtn.length; i++) {
  certificateBtn[i].addEventListener('click', function (e) {
    certificateIn.forEach(function (e) {
      e.classList.remove("active");
    });
    certificateBtn.forEach(function (e) {
      e.classList.remove("active");
    });
    certificateBtn[i].classList.toggle('active');
    certificateIn[i - 1].classList.toggle('active');
  })
}


// setInterval(콜백함수, 시간);
setInterval(function () {
    const headerTopImg = document.querySelector('.Headimgbox .img2');
    headerTopImg.classList.toggle('ative');
}, 4000);
   
   
//    메뉴바+프로모션 창 js
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
    


