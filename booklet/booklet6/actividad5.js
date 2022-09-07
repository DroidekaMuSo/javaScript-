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

function filtroJugadores(equipo, edad) {
  return equipo.filter((element) => element.edad === edad);
}

function listJugadores(jugadores) {
  let lista = "";
  for (const jugador of jugadores) {
    lista += `Jugador: ${Jugador.nombre}
        Camiseta: ${Jugador.numero}
        Edad: ${Jugador.edad} \n`;
  }
  return lista;
}

for (let index = 0; index < equipo.length; index++) {
  let filtro = filtroJugadores(
    jugadores,
    prompt("Ingresa el nombre del jugador")
  );
  if (filtro.length > 0) {
    alert(listJugadores(filtro));
  } else {
    alert("No existe jugadores con esa edad");
  }
}
