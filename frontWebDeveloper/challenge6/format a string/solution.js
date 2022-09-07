/* Given: an array containing hashes of names
Return: a string formatted as a list of names separated by commas except gor the last two names, which should be separated by an ampersand  
*/

function list(names) {
  if ((names.length = 0)) {
    return "";
  }
  if (names.length === 1) {
    return names[0].name;
  }

  let finalString = "";
  names.forEach((element, elementIndex) => {
    let name = element.name;
    if (elementIndex === names.length - 1) {
      finalString = finalString = finalString + " & " + name;
    } else if (elementIndex === names.length - 2) {
      finalString = finalString + name;
    } else {
      finalString = finalString + name + ", ";
    }
  });
  console.log(finalString);
  return finalString;
}
