class Client {
  constructor(name, budget, card, number) {
    this.name = name;
    this.budget = parseFloat(budget);
    this.card = card;
    this.number = number;
  }
  transferMoney(valor) {
    if (this.budget > 0 && valor < this.budget) {
      this.budget -= valor;
      return valor
    } else {
      return 0;
    }
  }
}

const client1 = new Client("Homero", 2000, true, "32051259213");
const client2 = new Client("Bart", 2000, true, "4384219541");
const client3 = new Client("Moe", 2000, true, "2521521485218");

for (let index = 0; index < 5; index++) {
  let enter = parseFloat(prompt("Enter amount"));

  if (client1.transferMoney(enter)) {
    alert(`El cliente ${client1.name} te puede pagar ${enter}`);
  }

  if (client2.transferMoney(enter)) {
    alert(`El cliente ${client2.name} te puede pagar ${enter}`);
  }

  if (client3.transferMoney(enter)) {
    alert(`El cliente ${client3.name} te puede pagar ${enter}`);
  }
}
