/* You live in the city of Cartesia where all roads are laid out in a perfect grid.
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
The city providesnits citizens with a Walk generating app on theur phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk.
You always walk only a single block for each letter and you know it it takeks you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes and will, of course, return you to your starting point */

function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  let nOffset = 0,
    wOffset = 0,
    eOffset,
    sOffset = 0;

  walk.forEach((direction) => {
    switch (direction) {
      case "n":
        nOffset += 1;
        break;
      case "w":
        wOffset += 1;
        break;
      case "e":
        eOffset += 1;
        break;
      case "s":
        sOffset += 1;
        break;
    }
  });

  return nOffset - sOffset === 0 && wOffset - eOffset === 0;
}
