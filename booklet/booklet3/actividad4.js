let entrada = prompt("Ingresa nombre");
let ingresados = "";

while (entrada != "Voldemort") {
  ingresados += entrada + "\n";
  entrada = prompt("Ingresar nombre");
}

alert(ingresados);
