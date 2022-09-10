let socio = prompt("Eres socio? Si (y) No(n)").toLowerCase();
let ticket = parseFloat(prompt("Cuanto gastaste?"));

if (socio === "y") {
  if (ticket >= 25 && ticket < 50) {
    let total = ticket - 1;
    alert(`Te descontamos un 1, pagar ${total}`);
  } else if (ticket >= 50 && ticket < 100) {
    let total = ticket * 0.95;
    let ahorro = ticket * 0.05;
    alert(`Te descontamos ${ahorro}, pagar ${total}`);
  } else if (ticket >= 100) {
    let total = ticket - 15;
    alert(`Te descontamos 15, pagar ${total}`);
  }
} else if (socio === "n") {
  if (ticket >= 100) {
    let total = ticket - 5;
    alert(`Te descontamos 5, pagar ${total}`);
  } else {
    alert("No haz alcanzado el monto minimo para tener descuento");
  }
} else {
  alert("Lo siento, no logro entender lo que dijiste");
}
