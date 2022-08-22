const driverLicense = 'B47U89RE243';
let name = "Bart";
let lastName = "Simpson";
let number = '742';
let street = "Evergreen Terr.";
let city = "Springfield";
let country = "USA";
let month = '02';
let day = '11'
let year = '70'
let sex = 'M'
let height = "4'0"
let eyes = 'BL'
let weight = '85'

let carnet = ` ID ${driverLicense} \n\n Nombre: ${name} ${lastName} \n Direccion: ${number} ${street} ${city} ${country} \n\n Birthday: ${month}-${day}-${year} \n SEX HT EYES WT \n  ${sex}  ${height}  ${eyes} ${weight}`

console.log(carnet);
