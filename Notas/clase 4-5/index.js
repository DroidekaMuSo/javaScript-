// /* Estructura de una funcion 

// function nombreFuncion(){
//     codigo a ejecutar por la funcion
// }
// */

// // function saludar() {
// //   let nombre = prompt("Ingrese el nombre");
// //   let message = `Hola ${nombre}`;
// //   alert(message);
// // }

// // saludar();

// /* Estructura de una funcion con parametros 

// function nombreFuncion(parametro1, parametro2, ...){
//     codigo a ejecutar por la funcion
// }
// */

// // function sumar(numero1, numero2) {
// //   alert(numero1 + numero2);
// // }

// // let num1 = parseInt(prompt("Ingrese el primer numero"));
// // let num2 = parseInt(prompt("Ingrese el primer numero"));

// // sumar(3, 5);

// // function sumar(x,y) {
// //     return x +y;

// // }
// // console.log(`Retorno de la suma ${sumar(4,5)}`);

// // function calculadora(numero1, numero2, operacion) {
// //   switch (operacion) {
// //     case "+":
// //       return numero1 + numero2;
// //       break;
// //     case "-":
// //       return numero1 - numero2;
// //       break;
// //     case "/":
// //       return numero1 / numero2;
// //       break;
// //     case "*":
// //       return numero1 * numero2;
// //       break;
// //     default:
// //       return "Operacion no valida";
// //       break;
// //   }
// // }

// // let numero1 = parseInt(prompt("Ingrese el primer numero"));
// // let numero2 = parseInt(prompt("Ingrese el primer numero"));
// // let operacion = parseInt(prompt("Ingrese la operacion"));
// // let resultado = calculadora(numero1, numero2, operacion);

// // alert(resultado);

// // const suma = (a, b) => a + b;
// // const resta = (a, b) => a - b;
// // const iva = (x) => x * 0.21;
// // let precioProducto = 500;
// // let descuento = 50;

// // let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
// // console.log(nuevoPrecio);

// // function name(params) {

// // }

// /* CLASE 5 - OBJETOS*/

// /* Estructur DE UN OBJETO
// {
//     nombre:'Mariana',
//     edad: 43,
// }
// */

// // const persona = {
// //   nombre: "Fabio",
// //   edad: 45,
// //   direccion: "Av",
// //   colorCabello: "Negro",
// // };

// // console.log(persona.nombre);
// // console.log(persona.edad);
// // console.log(persona.direccion);
// console.log(persona.colorCabello);

// // let key = "Nombre";
// // console.log(persona[key]);
// // console.log(persona["edad"]);
// // console.log(persona["direccion"]);
// // console.log(persona["colorCabello"]);

// // persona["nombre"] = "Pepe";
// // persona.edad = 77;

// // console.log(persona);

// function Persona(nombre, edad, direccion) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
// }

// // const persona1 = new Persona('David', 77, 'Av');
// // console.log(persona1);

// // function Producto(imagen, precio, nombre) {
// //   this.imagen = imagen;
// //   this.precio = precio;
// //   this.nombre = nombre;
// // }

// // const producto1 = new Producto("https", 406.0, "Monitor Samsung");
// // const producto2 = new Producto("https", 749.0, "Base");
// // console.log(producto1);
// // console.log(producto2);

// // const suma = (a, b) => {return a + b;};

let resultado = 0;

function sumar(primerNumero, segundoNumero) {
  resultado = primerNumero + segundoNumero;
}

resultado = sumar(6, 6);
console.log(resultado);


class Persona{
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
    hablar(){
        console.log(`Hola soy ${this.nombre}`);
    }
}
const persona1 = new Persona('Homero',39,'Av.');
persona1.hablar();