let num = 10;
let correct = 0;
let error = 0;

function changeLevel() {
  if (select.value === "easy") {
    num = 10;
  } else if (select.value === "medium") {
    num = 20;
  } else {
    num = 30;
  }
}

function numPlus() {
  appendResult("+");
}

function numMin() {
  appendResult("-");
}

function numMultiply() {
  appendResult("*");
}

function numDivide() {
  appendResult("/");
}

function numRandom(number) {
  let num = number;
  return Math.ceil(Math.random() * num);
}

function appendResult(operator) {
  divResult.innerHTML = "";
  let a = numRandom(num);
  let b = numRandom(num);
  let html = `
  <p>${a} ${operator} ${b} = <input class="resultInput" type="text"></p>
  <button class="btn__chek">Проверить результат</button>
  `;
  divResult.insertAdjacentHTML("beforeend", html);

  chekResult(a, b, operator);
}

function chekResult(a, b, operator) {
  const resultInput = document.querySelector(".resultInput");
  const btnResult = document.querySelector(".btn__chek");

  btnResult.addEventListener("click", () => {
    let chekOperator;

    if (operator === "+") {
      chekOperator = a + b;
    } else if (operator === "-") {
      chekOperator = a - b;
    } else if (operator === "*") {
      chekOperator = a * b;
    } else if (operator === "/") {
      chekOperator = a / b;
    }

    if (Number(resultInput.value) === chekOperator) {
      const text = document.createElement("p");
      text.innerHTML = "Ответ верный";
      divResult.append(text);
      correct++;
      divResult.innerHTML = "Твой результат в статистике";
    } else {
      const text2 = document.createElement("p");
      text2.innerHTML = "Думай лучше";
      divResult.append(text2);
      error++;
      divResult.innerHTML = "Твой результат в статистике";
    }
  });
}

btnStat.addEventListener("click", () => {
  container.classList.add("container__modal");
  modal.classList.remove("modal__hidden");
  correctAnswer.innerHTML = "";
  errorAnswer.innerHTML = "";
  correctAnswer.append(`Верный ответ: ${correct}`);
  errorAnswer.append(`Неверный ответ: ${error}`);
});

modalClose.addEventListener("click", () => {
  container.classList.remove("container__modal");
  modal.classList.add("modal__hidden");
});

btnCleane.addEventListener("click", () => {
  correct = 0;
  error = 0;
});
