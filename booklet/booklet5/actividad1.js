class Store {
  constructor(storeName, storeAddress, storeOwner, storeClass) {
    this.storeName = storeName;
    this.storeAddress = storeAddress;
    this.storeOwner = storeOwner;
    this.storeClass = storeClass;
  }
}

let store1 = new Store("Tagert", "Texas", "David", "Super Market");
let store2 = new Store("Walmart", "LA", "Diego", "Super Market");
let store3 = new Store(`Macy's`, "Chicago", "Alfredo", "Super Market");

console.log(store1);
console.log(store2);
console.log(store3);
