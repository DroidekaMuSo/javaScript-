let equipo = [];
let ask = prompt("Ingresa el nombre del jugador");

while (ask != "ESC") {
  equipo.push(ask);
  ask = prompt("Ingresa el nombre del jugador");
}

for (let index = 0; index < equipo.length; index++) {
  alert(`Posicion: ${index}
    Jugador: ${equipo[index]}`);
}
