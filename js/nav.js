function Promotion() {
   const AtopPromotionBtn = document.querySelector('.x');
   const AtopPromotion = document.querySelector('.top_promotion');

   AtopPromotionBtn.addEventListener('click', () => {
      AtopPromotion.style.height = '0';
      AtopPromotion.style.transform = 'translateY(-10px)';
      AtopPromotion.style.color = 'transparent';
      AtopPromotionBtn.style.display = 'none';
   });
}

Promotion();

addEventListener('scroll', () => {
   const Navbg = document.querySelector('.nav_left');
   scrollY > 90 ? (Navbg.style.width = '100%') : (Navbg.style.width = '50%');
});
