let number = parseInt(prompt("Dame un numero"));

if (number >= 0 && number <= 1000) {
  alert("Presupuesto bajo");
} else if (number >= 1001 && number <= 3000) {
  alert("Presupuesto Medio");
} else if (number > 3000) {
  alert("Presupuesto Alto");
} else {
  alert("Dame un valor mayor a 0");
}
