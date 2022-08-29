class Store {
  constructor(name, address, owner, field) {
    this.name = name;
    this.address = address;
    this.owner = owner;
    this.field = field;
  }
  isOpen(hour) {
    if ((hour >= 8 && hour <= 12) || (hour >= 15 && hour <= 19)) {
      return true;
    } else {
      return false;
    }
  }
}

const store4 = new Store("Target", "Av.", "David", "Clothes");

for (let index = 0; index < 3; index++) {
    let enter = parseInt(prompt('Enter an hour '));

    if (store4.isOpen(enter)) {
        alert(`The store is open at ${enter}`)
    } else {
        alert(`The store is close at ${enter}`)
    }
}


