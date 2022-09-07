const productos = [
  { id: 1, nombre: "pantalon", precio: 1000, status: "no disponible" },
  { id: 2, nombre: "camisa", precio: 700, status: "disponible" },
  { id: 3, nombre: "zapato", precio: 1300, status: "no disponible" },
  { id: 4, nombre: "gorra", precio: 2000, status: "disponible" },
];

//Ejercicio 1
/* let precio = productos.map((element) => element.precio);
console.log(precio);

let nombres = productos.map((element) => element.nombre);
console.log(nombres);

let nuevosPrecios = productos.map((element) => {
  return {
    nombre: element.nombre,
    precio: element.precio,
  };
});
console.log(nuevosPrecios); */

// Ejercicio 2

/* let nombre = prompt("Ingrese el nombre del producto");
let producto = productos.find((element) => element.nombre === nombre);

let mensaje = `El producto ${nombre} tiene un precio de ${producto.precio}`;
alert(mensaje);
 */

//Ejercicio 3

let precioMin = parseInt(prompt("Ingrese el precio minimo que desea buscar"));
let precioMax = parseInt(prompt("Ingrese el precio maximo que desea buscar"));

let resultado = productos.filter(
  (element) =>
    element.precio >= precioMin &&
    element.precio <= precioMax &&
    element.status === "disponible"
);

resultado.forEach((element) => alert(element.nombre));
