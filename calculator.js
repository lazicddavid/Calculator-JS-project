const btnElement = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");
let bill;
let tip;
let total;

// na input za bill i input za tip stavi EventListener "input"
//sacuvaj vrednosti iz tih inputa u varijable bill i tip
// onda na klik saberi ih, i to sacuvaj u varijabli total
// Varijablu total ispisi na ekran

function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * (1 + tipValue / 100);
  totalSpan.textContent = totalValue;
  console.log(totalValue);
}

btnElement.addEventListener("click", calculateTotal);
