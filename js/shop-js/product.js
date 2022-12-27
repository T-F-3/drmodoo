const select = document.querySelector("select");
const option = document.querySelector("option");
const result = document.querySelector("p");
const right = document.querySelector(".right");

option.addEventListener("click", (e) => {
  e.preventDefault();
  if ((value = "P000000O000G")) {
    result.classList.add = "toggle";
    right.style.display = "block";
  } else {
    alert("옵션을 선택하세요.");
  }
});
