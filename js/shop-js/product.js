const option = document.querySelector("option");
const select = document.querySelector("select");
const product = document.querySelector(".SaleProduct_1t");
const p = document.querySelector(".SaleProduct_1 tr td p");

option.addEventListener("click", () => {
  p.style.display = "block";
});
