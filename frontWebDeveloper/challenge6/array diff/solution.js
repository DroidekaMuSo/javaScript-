/* 
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.
 */

function arrayDiff(a, b) {
  if (a.length === 0) {
    return [];
  }

  if (b.length === 0) {
    return a;
  }

  let newA = a;
  let newB = b;

  a.forEach((arrItem, arrIndex) => {
    let aCopy = newA.slice();
    let bCopy = newB.slice();

    if (b.includes(arrItem)) {
      newA = aCopy.filter((item) => item !== arrItem);
      newA = bCopy.filter((item) => item !== arrItem);
    }
  });

  console.log(newA);
  return newA;
}
