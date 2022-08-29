class Store {
  constructor(storeName, storeAddress, storeOwner, storeClass) {
    this.storeName = storeName;
    this.storeAddress = storeAddress;
    this.storeOwner = storeOwner;
    this.storeClass = storeClass;
  }
}

let stores = parseInt(prompt("Hola \nCuantas tiendas vas a ingresar?"));
let inputs = "";
for (let index = 0; index < stores; index++) {
  let store = new Store(
    prompt("Name"),
    prompt("Address"),
    prompt("Owner"),
    prompt("Class")
  );

  inputs += `Tienda: ${store.storeName}\nAddress: ${store.storeAddress}\nOwner: ${store.storeOwner}\nClass: ${store.storeClass} \n\n`;
}

alert(inputs);
