// let num = 10;

// function changeLevel() {
//   if (select.value === "easy") {
//     num = 10;
//   } else if (select.value === "medium") {
//     num = 20;
//   } else {
//     num = 30;
//   }
//   console.log(select.value)
// }

// function numPlus() {
//   if (select.value === "easy") {
//     const numRandom = Math.random() * 10;
//     const a = Math.ceil(numRandom);
//     const b = Math.ceil(Math.random() * 10);
//     appendResult(a, b, "+");
//   } else if (select.value === "medium") {
//     const numRandom = Math.random() * 20;
//     const a = Math.ceil(numRandom);
//     const b = Math.ceil(Math.random() * 20);
//     appendResult(a, b, "+");
//   } else {
//     const numRandom = Math.random() * 30;
//     const a = Math.ceil(numRandom);
//     const b = Math.ceil(Math.random() * 30);
//     appendResult(a, b, "+");
//   }
// }

// function numMin() {
//   let num = 0;
//   if (select.value === "easy") {
//     num = 10;
//   } else if (select.value === "medium") {
//     num = 20;
//   } else {
//     num = 30;
//   }

//   const { a, b } = randomNum(num);
//   appendResult(a, b, "-");
// }

// function numMultiply() {
//   let num = 0;
//   if (select.value === "easy") {
//     num = 10;
//   } else if (select.value === "medium") {
//     num = 20;
//   } else {
//     num = 30;
//   }

//   const { a, b } = randomNum(num);
//   appendResult(a, b, "*");
// }

// function numDivide() {
//   // let num = 0;
//   // if (select.value === "easy") {
//   //   num = 10;
//   // } else if (select.value === "medium") {
//   //   num = 20;
//   // } else {
//   //   num = 30;
//   // }

//   // const {a, b} = randomNum(num);
//   // appendResult();
//   appendResult("/");
//   // appendResult(a, b, "/");
// }

// // function appendResult(a, b, operator) {

// //   const text = document.createElement("p");
// //   text.innerHTML = `${a} ${operator} ${b} =`;
// //   divResult.append(text);
// // }

// // function randomNum(num) {
// //   const numRandom = Math.random() * num;
// //   const a = Math.ceil(numRandom);
// //   const b = Math.ceil(Math.random() * num);
// //   return { a, b };
// // }

// function numRandomOne(number) {
//   let num = number;
//   return Math.ceil(Math.random() * num);
// }
// function numRandomTwo(number) {
//   let num = number;
//   return Math.ceil(Math.random() * num);
// }

// function appendResult(operator) {
//   let a = numRandomOne(num);
//   let b = numRandomTwo(num);
//   let c = `${a} ${operator} ${b} =`;
//   const text = document.createElement("p");
//   text.innerHTML = c;
//   divResult.append(text);
//   return c;
// }


// function num(a, b){
//   console.log(a + b)
// }
// num(1, 2)

// function text(selector){
//   const element = document.querySelector(`.${selector}`)
//   element.classList.toggle('hidden')
// }
// text('btn__stat');
// text("btn__cleane");

// function appendResult(operator) {
//   let a = numRandom(num);
//   let b = numRandom(num);
//   const input = document.createElement("input");
//   input.classList.add("class");
//   let c = `${a} ${operator} ${b} = `;
//   const text = document.createElement("p");
//   text.innerHTML = c;
//   text.append(input);
//   divResult.append(text);
//   return c;
// }
