class Jugador {
  constructor(nombre, numero, edad, lesionadao) {
    this.nombre = nombre;
    this.numero = numero;
    this.edad = edad;
    this.lesionadao = lesionadao;
  }
}

let equipo = [];

equipo.push(new Jugador("David", 2, 23, "No"));
equipo.push(new Jugador("Diego", 2, 23, "No"));
equipo.push(new Jugador("Sandra", 2, 23, "No"));
equipo.push(new Jugador("Ignacio", 2, 23, "No"));
equipo.push(new Jugador("Cynthia", 2, 23, "No"));

function buscarJugador(equipo, jugador) {
  return equipo.find((element) => element.nombre === jugador);
}

for (let index = 0; index < equipo.length; index++) {
  let busqueda = buscarJugador(equipo, prompt("Ingresa el nombre del jugador"));

  if (busqueda != undefined) {
    alert(`Jugador ${busqueda.nombre}
        Camiseta: ${busqueda.numero}
        Edad: ${busqueda.edad}`);
  } else {
    alert("No existe jugador con ese nombre");
  }
}


