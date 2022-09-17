const productosDB = [
  {
    id: 1,
    title: "StormTrooper",
    priece: 2000,
    img: "https://media.gamestop.com/i/gamestop/11162009/Funko-POP-Star-Wars-Celebration-Stormtrooper-3.8-in-Vinyl-Bobblehead",
  },
  {
    id: 2,
    title: "Tie Figther",
    priece: 1200,
    img: "https://static.wikia.nocookie.net/esstarwars/images/9/92/TIEfighter2-Fathead.png/revision/latest?cb=20190506153548",
  },
  {
    id: 3,
    title: "Lightsaber",
    priece: 1800,
    img: "https://ae01.alicdn.com/kf/Hce90cc53b9c248ea979469264c992a68F/LGT-Lightsaber-Luke-Skywalker-Force-Heavy-Dueling-Light-Saber-Infinite-Color-Changing-with-Sensitive-Smooth-Swing.jpg_Q90.jpg_.webp",
  },
  {
    id: 4,
    title: "Imperial Army's Death Star",
    priece: 2600,
    img: "https://static.wikia.nocookie.net/esstarwars/images/e/ee/DeathStar2.jpg/revision/latest?cb=20171220231910",
  },
];

const carrito = [];

const items = document.querySelector("#items");
const carritoHTML = document.querySelector("#carrito");

//Pintar productos en la tienda

function rednderizarProductos() {
  productosDB.forEach((element) => {
    let prodcutoHTML = `
    <div class="col-12 col-md-6 mb-5 d-flex justify-content-center">
    <div class="card text-light bg-dark" style="width: 18rem;">
      <img class="card-img-top" src="${element.img}" alt="${element.title}" />
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up th bulk
          of the card's content
        </p>
        <p>$${element.priece}</p>
        <button
          class="btn btn-primary"
          onclick="agregarProductoAlCarrito(${producto.id})"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  </div>
    `;
    items.innerHTML += prodcutoHTML;
  });
}
rednderizarProductos();

//Anadir productos al carrito
//Identificar que prodcuto eligio
//Mostrar informacion del producto
//Si el producto ya esta modifico la cantidad - renderizo
//Calcular el total

function agregarProductoAlCarrito(id) {
  let producto = productosDB.find((element) => element.id === id);

  let productoEnCarrito = carrito.find((element) => element.id === id);

  if (productoEnCarrito) {
    producto.cantidad++;
  } else {
    producto.cantidad = 1;
    carrito.push(producto);
  }

  rednderizarCarrito();
  calcularTotal();
}

function rednderizarCarrito() {
  let htmlCarrito = "";
  carrito.forEach(element, (id) => {
    htmlCarrito += `
        <div class="col-12 mb-5 d-flex flex-row justify-content-center">
            <div class="card text-dark flex-row" style="width: 30rem">
                <div>
                    <img style="width: 100px" src="${element.img}" alt="Card image cap" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p>${element.price}$</p>
                    <p>Cantidad: ${element.cantidad}</p>
                    <button
                    class="btn btn-danger"
                    onclick="eliminarProductoDelCarrito(${id})"
                    >
                    Eliminar
                    </button>
                </div>
            </div>
        </div>    
        `;
  });
  carritoHTML.innerHTML = htmlCarrito;
}

function calcularTotal() {
  let total = 0;

  carrito.forEach((element) => {
    total += element.price * element.cantidad;
  });

  const t = document.getElementById("total");
  t.innerHTML = `
  <h5>${total}</h5>`;
}
//Editar carrito
//

function eliminarProductoDelCarrito(id) {
  carrito[id].cantidad--;

  if (carrito[id].cantidad === 0) {
    carrito.splice(id, 1);
    rednderizarCarrito();
    calcularTotal();
  }
}

function vaciarCarrito() {
  carrito = [];
  rednderizarCarrito();
  calcularTotal();
}

const vaciar = document.querySelector("#boton-vaciar");
vaciar.addEventListener("click", vaciarCarrito);
