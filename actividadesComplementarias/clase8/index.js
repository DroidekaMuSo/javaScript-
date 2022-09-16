//getElementById

let app = document.getElementById("aplicacion");
console.log(app.innerHTML);
console.log(app.innerText);

let parrafo = document.getElementById("parrafo");
console.log(parrafo.innerHTML);
console.log(parrafo.innerText);

//getElementByClassName

let perritos = document.getElementsByClassName("perritos");

for (const perrito of perritos) {
  console.log(perrito.innerHTML);
}

let contenedor = document.getElementById("contenedor");
console.log(perritos[0].innerHTML);
let seccion = prompt("Ingrese la seccion deseada");

if (seccion === "carrito") {
  contenedor.innerHTML = "Bienvenido al carrito";
  contenedor.className = "amarillo";
} else if (seccion === "favoritos") {
  contenedor.innerHTML = "Bienvenido a favoritos";
  contenedor.className = "verde";
} else {
  contenedor.innerHTML = "Bienvenido a nuestra pagina ";
}

console.log(perritos[1].innerHTML);
console.log(perritos[2].innerHTML);

//getElementByTagName

let divs = document.getElementsByTagName("div");
console.log(divs[0].innerHTML);

//Nodes creation
let div1 = document.createElement("div"); //Creacion del elemento
div1.innerHTML = "<h1>Hola a todos</h1>"; // Asignacion de contenido
document.body.append(div);

const producto = [
  { id: 1, nombre: "Camisa", precio: 700 },
  { id: 2, nombre: "Pantalon", precio: 600 },
  { id: 3, nombre: "Chamarra", precio: 1600 },
  { id: 4, nombre: "Tennis", precio: 800 },
  { id: 5, nombre: "Calcetas", precio: 250 },
  { id: 6, nombre: "Corbata", precio: 200 },
  { id: 7, nombre: "Saco", precio: 1400 },
  { id: 8, nombre: "Cinturon", precio: 350 },
  { id: 9, nombre: "Mono", precio: 300 },
];

let precio = parseInt(prompt('Ingrese el valor minimo'));
let filtrados = productos.filter( item => item.precio > precio)
for (const producto of poductos) {
  let div = document.createElement("div");
  div.innerHTML = `<h2>ID: ${producto.id}</h2>
    <p>Producto: ${producto.nombre}</p>
    <b>$${producto.precio}</b>`;
}
