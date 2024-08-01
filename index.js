let i1 = document.getElementById("t1");
let i2 = document.getElementById("t2");

let score1 = 0;
let score2 = 0;

function five() {
  let add = (score1 += 5);
  i1.innerText = add;
}
five();

function three() {
  let add = (score1 += 3);
  i1.innerText = add;
}
three();

function one() {
  let add = (score1 += 1);
  i1.innerText = add;
}
one();

function five1() {
  score2 += 5;
  i2.innerText = score2;
}
five1();

function three1() {
  score2 += 3;
  i2.innerText = score2;
}
three1();

function one1() {
  score2 += 1;
  i2.innerText = score2;
}
one1();

// Minus concepts
function minus5() {
  let add = (score1 -= 5);
  i1.innerText = add;
}
five();

function minus3() {
  let add = (score1 -= 3);
  i1.innerText = add;
}
three();

function minus1() {
  let add = (score1 -= 1);
  i1.innerText = add;
}
one();

function minusFive() {
  score2 -= 5;
  i2.innerText = score2;
}
five1();

function minusThree() {
  score2 -= 3;
  i2.innerText = score2;
}
three1();

function minusOne() {
  score2 -= 1;
  i2.innerText = score2;
}
one1();
