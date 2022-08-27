/* Estructura de una funcion 

function nombreFuncion(){
    codigo a ejecutar por la funcion
}
*/

// function saludar() {
//   let nombre = prompt("Ingrese el nombre");
//   let message = `Hola ${nombre}`;
//   alert(message);
// }

// saludar();

/* Estructura de una funcion con parametros 

function nombreFuncion(parametro1, parametro2, ...){
    codigo a ejecutar por la funcion
}
*/

// function sumar(numero1, numero2) {
//   alert(numero1 + numero2);
// }

// let num1 = parseInt(prompt("Ingrese el primer numero"));
// let num2 = parseInt(prompt("Ingrese el primer numero"));

// sumar(3, 5);

// function sumar(x,y) {
//     return x +y;

// }
// console.log(`Retorno de la suma ${sumar(4,5)}`);

// function calculadora(numero1, numero2, operacion) {
//   switch (operacion) {
//     case "+":
//       return numero1 + numero2;
//       break;
//     case "-":
//       return numero1 - numero2;
//       break;
//     case "/":
//       return numero1 / numero2;
//       break;
//     case "*":
//       return numero1 * numero2;
//       break;
//     default:
//       return "Operacion no valida";
//       break;
//   }
// }

// let numero1 = parseInt(prompt("Ingrese el primer numero"));
// let numero2 = parseInt(prompt("Ingrese el primer numero"));
// let operacion = parseInt(prompt("Ingrese la operacion"));
// let resultado = calculadora(numero1, numero2, operacion);

// alert(resultado);

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;
let precioProducto = 500;
let descuento = 50;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
console.log(nuevoPrecio);