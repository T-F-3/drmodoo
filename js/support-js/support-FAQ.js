const faqs = document.querySelectorAll('.customer_fnq');
const ownerAnswers = document.querySelectorAll('.owner_answer');

Array.from(faqs).forEach((item, idx) => {
   item.addEventListener('click', () => {
      // ownerAnswers[idx].classList.toggle('show');
      Array.from(ownerAnswers).forEach((inner, idxA) => {
         if (idxA != idx) {
            ownerAnswers[idxA].classList.remove('show');
         }
      });
      ownerAnswers[idx].classList.toggle('show');
   });
});
