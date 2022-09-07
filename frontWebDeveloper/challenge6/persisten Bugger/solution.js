/* Write a function, presistence, that takes in a positive parameter num and returns its multipilcative persistence, which is the number of times you must multiply the digits in num until you reach single digit  */

function persistence(num) {
  if (num < 10) {
    return 0;
  }

  let strVersion = num.toString();
  let arrVersion = strVersion.split("");
  let multiplicationValue = arrVersion.reduce((acc, num) => (acc *= num));
  
  if (multiplicationValue >= 10) {
    return 1 +persistence(multiplicationValue);
  } else{
    return  1;
  }
}

function persistence(num) {
    let times = 0;
    num =num.toString();

    while(num.length > 1){
        times ++;
        num = num.split('').map(Number).reduce((a,b) => a*b).toString();
    }
    return times
}
