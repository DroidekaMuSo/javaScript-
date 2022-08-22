let producto1 = prompt("Dame un producto");
let producto2 = prompt("Dame un producto");
let producto3 = prompt("Dame un producto");
let producto4 = prompt("Dame un producto");

if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")) {
    alert(`Prodcuto 1: ${producto1} \nProdcuto 2: ${producto2} \nProdcuto 3: ${producto3} \nProdcuto 4: ${producto4} \n`)
}else{
    alert('Falta uno o mas productos, favor de llenar los campos')
}
