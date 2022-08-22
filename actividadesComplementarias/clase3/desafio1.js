/* Imprima la suma de todos los números impares entre 1 y 100 */

let suma = 0;
for (let index = 0; index < 100; index++) {
  if (index % 2 !== 0) {
    suma = suma + index;
  }
}
console.log(`La suma de todos los numeros impares entre 1 - 100 es: ${suma}`);
