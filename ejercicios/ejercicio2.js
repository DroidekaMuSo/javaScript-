let nombre = prompt('Que producto quieres agregar?').toLowerCase();
let cantidad = parseInt(prompt(`Cuantos?`));

if (nombre === "refresco") {
  let total = cantidad * 1;
  alert(`Por ${cantidad} ${nombre} debes de pagar ${total}`);
} else if (nombre === "cerveza") {
  let total = cantidad * 2.2;
  alert(`Por ${cantidad} ${nombre} debes de pagar ${total}`);
} else if (nombre === "patatas") {
  let total = cantidad * 5;
  alert(`Por ${cantidad} ${nombre} debes de pagar ${total}`);
} else {
  alert(`Por el momento no cuento con ${nombre} en el sistema`);
}
