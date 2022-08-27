let year = parseInt(prompt("Give a year"));

if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)) {
  alert(`El ano ${year} es bisiesto`);
} else {
  alert(`El ano ${year} no es bisiesto`);
}


