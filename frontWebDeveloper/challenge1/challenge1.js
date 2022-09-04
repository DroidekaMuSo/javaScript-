/* let nombres = ["andres", "camila", "mariano", "andrea"];
let length = nombres.length;
for (let index = 0; index < length; index++) {
  console.log(nombres[index]);
}

let nombres2 = ["andres", "camila"];
nombres2.push("ernesto"); //Agrega elementos al final
console.log(nombres2);

nombres.unshift("Karla"); //Agrega elementos al princio
console.log(nombres);

nombres.pop(); //Quita el ultimo elemento del arreglo
console.log(nombres);

nombres.shift(); //Quita el primer elemento del pricipio
console.log(nombres);

nombres.splice(2, 2);
// nombres.splice(desde donde, cuantos elementos)
console.log(nombres);

nombres.join("**"); //Une en un string los elemtos por el elemento indicado
console.log(nombres);

let perritos = ["max", "firu", "zeus"];
let varios = perritos.concat(nombres3); // Concatena dos arreglos
console.log(varios);

let copia = nombres3.slice(1, 3); //Crea una copia del fragmento del arreglo
console.log(copia);

console.log(nombres.indexOf("andrea")); //Busca la posicion de un elemento dentro de un arreglo

console.log(nombres.includes("lucas")); //Valida si un elemento existe o no dento del arreglo.

console.log(nombres.reverse()); //Voltea la posicion de los elementos dentro del array

class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

let productos = [
  new Producto(1, "camisa", 1000),
  new Producto(2, "gorra", 1250),
  new Producto(3, "pantalones", 4000),
];

for (const iterator of productos) {
  console.log(iterator.nombre);
}

console.log(nombres.toString());

console.log(productos.join("*")); */
/* 
let nombres3 = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
console.log(nombres3.reverse());

let encontrar = nombres3.map((elemento) => elemento.length);
console.log(encontrar);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let encontrarNumero = numbers.map((elemento) => elemento * 10);
console.log(encontrarNumero);
 */
/* 
function mayorQue(n) {
  return (m) => m > n;
}

let mayorQueDiez = mayorQue(10);
console.log(mayorQueDiez());

function porCadaUno(arr, fn) {
  for (const iterator of arr) {
    fn(iterator);
  }
}
let numeros = [1, 2, 3, 4];
porCadaUno(numeros, console.log); */

/* let numero = [0,1,2,3,4,5,6,7,8,9,];
numero.forEach((num) =>{
  console.log(num)
}) */

/* let cursos = [
  { nombre: "JavaScript", precio: 15000 },
  { nombre: "ReactJS", precio: 22000 },
  { nombre: "AngularJs", precio: 22000 },
  { nombre: "Desarrollo Web", precio: 16000 },
];

let resultado = cursos.map((el) => {
  return {
    nombre: el.nombre,
    precio: el.precio * 1.25, 
  };
});
console.log(resultado);
 */

/* let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = numbers.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(total); */
//Numeros
/* let num = [1231, 512412, 65745, 3426436, 53247485, 23432];
num.sort((a, b) => a - b);
console.log(num);

//Strings
let items = [
  { name: "Pikachu", price: 21 },
  { name: "Charmander", price: 37 },
  { name: "Pidgey", price: 37 },
  { name: "Squirtle", price: 45 },
];

items.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }

  if (a.name < b.name) {
    return -1;
  }

  return 0;
});

console.log(items); */

/* console.log(Math.max(1231, 512412, 65745, 3426436, 53247485, 23432));
console.log(Math.min(1231, 512412, 65745, 3426436, 53247485, 23432)); */

const pi = Math.PI;

console.log(Math.ceil(pi));
console.log(Math.floor(pi));
console.log(Math.round(pi));

console.log(Math.sqrt(9));
console.log(Math.sqrt(99));
console.log(Math.sqrt(1));
console.log(Math.sqrt(-9));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10));

let navidad = new Date("December 25, 2022");
let hoy = new Date("December 17, 2022");

console.log((navidad - hoy) / 86400000);

