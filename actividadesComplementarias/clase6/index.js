class Producto {
  constructor(name, priece) {
    this.name = info.name;
    this.priece = info.priece;
  }
}

//Bienvenida de la pagina
let welcome = alert("Welcome to Unleash the Beast");
//Menu principal de la pagina
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

    switch (supplement) {
      //Protein
      case 1:
        const proteins = [];
        proteins.push(new Producto("SCITEC", 1200));
        proteins.push(new Producto("MYPROTEIN", 1200));
        proteins.push(new Producto("HSN", 1200));
        proteins.push(new Producto("OPTIMUM NUTRITION", 1200));
        proteins.push(new Producto("DYMATIZE", 1200));

        


        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
    }
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
