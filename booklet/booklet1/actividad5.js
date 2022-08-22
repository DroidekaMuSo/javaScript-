let precio = parseInt(prompt("Ingresa el precio"));
let descuento = parseInt(prompt("Ingresa el descuento"));


let pagar = precio - (precio * (descuento/100));
let mensaje = `Tienes que pagar ${pagar}`;

alert(pagar);
