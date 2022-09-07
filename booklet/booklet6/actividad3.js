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

console.log(equipo);
