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
    
     
// 텍스트 효과


     addEventListener('scroll', () => {
        const txth2 = document.querySelector('.main_scalp_lab h2');
        const txtp = document.querySelector('.main_scalp_lab p');

           if(scrollY>500){
                txth2.style.opacity = '1'
                if(scrollY >= 600){
                    txth2.style.transform = 'translateY(0px)'
                }else{
                    txth2.style.transform = 'translateY(-90px)'
                }
            }else{
                txth2.style.opacity = '0'
            } 

            console.log(scrollY)

     });
    


//    헤더 js
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


