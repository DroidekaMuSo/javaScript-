//Chapter 2 - Functions
//2.1 Looping a triangle
function triangle() {
  let hashtag = "#";

  while (hashtag.length < 7) {
    console.log(hashtag);
    hashtag = hashtag + "#";
  }

  console.log(hashtag);
}

// triangle();

//2.2 FizzBuzz
function fizzBuzz() {
  for (let counter = 0; counter <= 100; counter++) {
    if (counter % 5 == 0 && counter % 3 == 0) {
      console.log("FizzBuzz");
    } else if (counter % 5 == 0) {
      console.log("Fizz");
    } else if (counter % 3 == 0) {
      console.log("Buzz");
    } else {
      console.log(counter);
    }
  }
}

function fizzBuzz() {
  for (let index = 0; index <= 100; index++) {
    console.log(
      (index % 3 == 0 ? "Fizz" : "") + (n % 5 == 0 ? "Buzz" : "") || index
    );

    /* Conditional ternary operator syntax
        condition ? iftrue : iffalse
        */
  }
}

// fizzBuzz();

//2.3 Chessboard
function chessBoard() {
  let size = 8;

  let board = "";

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }

  console.log(board);
}

// Chapter 3
//3.1 Minimun
function minimun(a, b) {
  if (a > b) return b;
  else return a;
}

//3.2 Recursion
// Diego
function isEven(number) {
  if (number < 0) {
    console.log("Give me a positive or greater number than zero");
  } else {
    if (number % 2 === 0) {
      console.log(true);
    } else if (number % 2 === 1) {
      console.log(false);
    } else {
      console.log(isEven(number - 2));
    }
  }
}

//3.3 Bean Counting
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
    return counted;
  }
}

function countBs(string){
    return countChar(string,"B");
}

console.log(countBs("BBC"));
