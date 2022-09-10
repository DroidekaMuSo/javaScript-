class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

}

alert("Welcome to Unleash the Beast");
let menu = parseInt(
  prompt(
    `What supplement do you need? 
        1.- Protein 
        2.- BCAA
        3.-PreWorkout
        `
  )
);
let minPrice = parseInt(prompt("What is the minimun price you want to pay?"));
let marketCar =  [];

switch (menu) {
  // Protein
  case 1:
    const proteins = [];
    proteins.push(new Product("OPTIMUM NUTRITION", 779));
    proteins.push(new Product("BIRDMA", 1015));
    proteins.push(new Product("ISOPURE", 1900));
    proteins.push(new Product("MUSCLTECH", 1349));

    let newProteins = proteins.filter((element) => element.price >= minPrice);
    newProteins.forEach((element) => {
      let message = `
      ${element.name}:${element.price}`;
      alert(message);
    });

    break;
  // BCAA
  case 2:
    const bcass = [];
    bcass.push(new Product("BSN", 545));
    bcass.push(new Product("EVOLUTION", 469));
    bcass.push(new Product("INSANE LABZ", 450));
    bcass.push(new Product("BIRDMAN", 559));
    let newBcaa = proteins.filter((element) => element.price >= minPrice);
    newProteins.forEach((element) => {
      let message = `
      ${element.name}:${element.price}`;
      alert(message);
    });

    break;
  //Preworkout
  case 3:
    const preWorout = [];
    bcass.push(new Product("CELLUCOR", 569));
    bcass.push(new Product("BIRDMAN", 469));
    bcass.push(new Product("GAT SPORT", 699));
    bcass.push(new Product("ELEMENTAL", 660));
    break;

    let newPreWorkout = proteins.filter((element) => element.price >= minPrice);
    newProteins.forEach((element) => {
      let message = `
      ${element.name}:${element.price}`;
      alert(message);
    });
}
