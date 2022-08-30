function Product(info) {
  this.name = info.name;
  this.priece = info.priece;
  this.position = info.position;
}

let welcome = alert("Welcome to Unleash the Beast");
let product = parseInt(
  prompt(
    `What do you need? 
    1.- Supplements 
    2.- Workout routine
    3.- Diet 
    4.- Accesories
    `
  )
);

switch (product) {
  //Supplement Menu
  case 1:
    let supplement = parseInt(
      prompt(`What do you want to order
    1.- Protein
    2.- BCAAs 
    3.- Collagen
    4.- PreWorkouts
    5.- Creatine
    `)
    );

    if (supplement) {
      let quantity = parseInt(prompt(`How many are you goint to order?`));

      // Declaracion de Objetos
      const protein = new Product({
        name: "Protein",
        priece: 60,
        position: 1,
      });

      const bcaas = new Product({
        name: "BCAAs",
        priece: 30,
        position: 2,
      });

      const collagen = new Product({
        name: "Collagen",
        priece: 20,
        position: 3,
      });

      const preWorkouts = new Product({
        name: "PreWorkOut",
        priece: 25,
        position: 1,
      });

      const creatin = new Product({
        name: "Protein",
        priece: 60,
        position: 1,
      });

      switch (supplement) {
        case protein.position:
          total = protein.priece * quantity;
          alert(
            `You will have to pay $${total} for ${quantity} ${protein.name}`
          );
          break;
        case bcaas.position:
          total = bcaas.priece * quantity;
          alert(`You will have to pay $${total} for ${quantity} ${bcaas.name}`);
        case collagen.position:
          total = collagen.priece * quantity;
          alert(
            `You will have to pay $${total} for ${quantity} ${collagen.name}`
          );
        case preWorkouts.position:
          total = preWorkouts.priece * quantity;
          alert(
            `You will have to pay $${total} for ${quantity} ${preWorkouts.name}`
          );
        case creatin.position:
          total = creatin.priece * quantity;
          alert(
            `You will have to pay $${total} for ${quantity} ${creatin.name}`
          );
        default:
          alert(`Sorry, I didn't understand you`);
          break;
      }
    }
    break;
  //WorkOut Routine
  case 2:
    let selection = parseInt(
      prompt(`Select one of our routiens:
    
    1.- Workouts for men
    2.- Workouts for women
    3.- Muscle Building
    4.- Fat Loss
    5.- Increase Strength
    6.- Ab Workout
    7.- Full Body
    8.- Sports Performance
    9.- Bodyweight
    10.- Beginner
    11.- At home
    12.- Celebrity
    13.- Cardio 
    14.- Chest Workouts 
    15.- Back Workouts 
    16.- Bicep Workouts 
    17.- Shoulder Workouts 
    18.- Leg Workouts 
    19.- Tricep Workouts 
    20.- Glute Workouts
    `)
    );

    //Aqui va un swtich para que les salga los ejercicios de cada una de las opciones de arriba XD
    /*     switch (key) {
        case value:
            
            break;
    
        default:
            break;
    } */

    break;
  //Diet menu
  case 3:
    let diet = parseInt(
      prompt(`Select one of our diets:
      1.- Keto Diet
      2.- Vegan Diet
      3.- Paleo Diet 
      4.- Mediterranean Diet 
      5.- Low Carb Diet 
      6.- Low Fat Diet 
      7.- High Protein Diet 
      8.- Gluten Free Diet 
      9.- Other Diet Types`)
    );

    //Aqui va un swtich para que les salga los ejercicios de cada una de las opciones de arriba XD
    /*     switch (key) {
        case value:
            
            break;
    
        default:
            break;
    } */

    break;
  //Accessorie menu
  case 4:
    let Accessorie = parseInt(
      prompt(`Select one of our Accesories:
        1.- Hoodies
        2.- T-Shirts
        3.- Sneakers
        4.- Dumbbells Sets 
        5.- Straps, belts, wrist wraps, kneepads`)
    );
    break;

  default:
    alert(`Sorry, I didn't understand you`);
    break;
}
