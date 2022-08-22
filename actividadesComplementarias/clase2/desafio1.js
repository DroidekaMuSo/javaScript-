/* Pida a usuario la edad y el sexo, para que la computadora le indique si ya puede jubilarse. Tome en cuenta
que un Hombre se puede jubilar cuando tenga 60 años o más, en cambio, una mujer mayor se jubilara si
tiene más de 54 años. */

let edad = parseInt(prompt("Cuantos anos tienes?"));
let sexo = prompt("Dame tu sexo M (Masculino) F (Femenino)");

if (edad >= 60 && (sexo = "M")) {
  alert("Ya te puedes jubilar");
} else if (edad >= 54 && (sexo = "F")) {
  alert("Ya te puedes jubilar");
} else {
  alert("Aun no puede jubilarse");
}
