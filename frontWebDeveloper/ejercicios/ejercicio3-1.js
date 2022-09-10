limit = 3000;

for (let year = 2000; year < limit; year++) {
  if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)) {
    console.log(`El ano ${year} es bisiesto`);
  } else {
    console.log(`El ano ${year} no es bisiesto`);
  }
}
