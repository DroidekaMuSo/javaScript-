let number = prompt("Selecciona entre 1 al 4");

while (number != "ESC") {
  switch (number) {
    case "1":
      alert("Tomate");
      break;
    case "2":
      alert("Papa");
      break;
    case "3":
      alert("Carne");
      break;
    case "4":
      alert("Pollo");
      break;

    default:
      alert("Dame un numero del 1 al 4");
      break;
  }
  number = prompt("Selecciona entre el 1 y el 4");
}
