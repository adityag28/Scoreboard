let tOne = document.getElementById("t1");
let tTwo = document.getElementById("t2");

let score1 = 0;
let score2 = 0;

function five() {
  score1 = score1 + 5;
  tOne.innerText = score1;
}

function three() {
  score1 = score1 + 3;
  tOne.innerText = score1;
}

function one() {
  score1 = score1 + 1;
  tOne.innerText = score1;
}

function five1() {
  score2 = score2 + 5;
  tTwo.innerText = score2;
}

function three1() {
  score2 = score2 + 3;
  tTwo.innerText = score2;
}

function one1() {
  score2 = score2 + 1;
  tTwo.innerText = score2;
}

// Minus concepts
function minus5() {
  score1 = score1 - 5;
  tOne.innerText = score1;
}

function minus3() {
  score1 = score1 - 3;
  tOne.innerText = score1;
}

function minus1() {
  score1 = score1 - 1;
  tOne.innerText = score1;
}

function minusFive() {
  score2 = score2 - 5;
  tTwo.innerText = score2;
}

function minusThree() {
  score2 = score2 - 3;
  tTwo.innerText = score2;
}

function minusOne() {
  score2 = score2 - 1;
  tTwo.innerText = score2;
}
