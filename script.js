const btnSumm = document.querySelector(".btn__sum");
const btnMin = document.querySelector(".btn__min");
const btnMultiply = document.querySelector(".btn__multiply");
const btnDivide = document.querySelector(".btn__divide");
const btnStat = document.querySelector(".btn__stat");
const btnCleane = document.querySelector(".btn__cleane");
const divResult = document.querySelector(".result");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__btn");
const correctAnswer = document.querySelector(".correc__answer");
const errorAnswer = document.querySelector(".error__answer");
const container = document.querySelector(".container");
const select = document.querySelector(".select");

btnSumm.addEventListener("click", () => {
  numPlus();
});

btnMin.addEventListener("click", () => {
  numMin();
});

btnMultiply.addEventListener("click", () => {
  numMultiply();
});

btnDivide.addEventListener("click", () => {
  numDivide();
});

btnCleane.addEventListener("click", () => {
  divResult.innerHTML = "";
});

select.addEventListener("change", () => {
  changeLevel();
});
