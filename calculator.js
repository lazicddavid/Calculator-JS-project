const btnElement = getElementById("calculate");
const billInput = document.getElementById("bill");
  const tipInput = document.getElementById("tip");
const totalSpan document.etElementById("total");

function calculateTotal() {

  const billValue = billValue.value;
  const tipValue = tipInput.value; 
  const totalValue = billValue * (1 + tipValue / 100);
  console.log(totalValue);
}

btnElement.addEventListener("Click", calculateTotal);

