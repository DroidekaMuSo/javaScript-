let pregunta = prompt("Si o no?").toLowerCase();

switch (pregunta) {
  case "si":
    alert("Nos han respondido que si");
    break;
  case "no":
    alert("Nos han respondido que no");
    break;
  default:
    alert("No hemos entendido la respuesta ");
    break;
}
