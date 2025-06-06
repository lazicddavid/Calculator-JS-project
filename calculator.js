/*
let bill;
let tip;
let total;

// na input za bill i input za tip stavi EventListener "input"
//sacuvaj vrednosti iz tih inputa u varijable bill i tip
// onda na klik saberi ih, i to sacuvaj u varijabli total
// Varijablu total ispisi na ekran
*/

let bill = 0;
let tip = 0;
let total = 0;

const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");
const btnElement = document.getElementById("calculate");

billInput.addEventListener("input", function (e) {
  bill = Number(billInput.value);
  console.log(e.target.value);
  console.log(e);
});

tipInput.addEventListener("input", function () {
  tip = Number(tipInput.value);
});

btnElement.addEventListener("click", function () {
  total = bill + (bill * tip) / 100;
  totalSpan.textContent = total;
});

function (
input
)

//umesto da se desava na klik, neka se desava na eventSubmit, racucanje totala
// da bi to uradio, moras imati formu, i na formu staviti EventListener submit

//how to add submit Event on a form on JS
