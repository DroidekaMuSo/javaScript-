const calculate = document.querySelector(".calculate");
calculate.addEventListener("click", (e) => {
  let enteredDate = new Date(document.querySelector("date").value);

  let inputDate = {
    year: enteredDate.getFullYear(),
    month: enteredDate.getMonth(),
    day: enteredDate.getDay(),
  };

  let date = new Date(),
    d2 = date.getDate(),
    m2 = 1 + date.getMonth(),
    y2 = date.getFullYear(),
    month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (inputDate.day > d2) {
    d2 = d2 + month(m2 - 1);
    m2 = m2 - 1;
  }
  if (inputDate.month > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  let d = d2 - inputDate.day,
    m = m2 - inputDate.month,
    y = y2 - inputDate.year;

  let year = (document.querySelector(".year").innerHTML = y),
    months = (document.querySelector(".months").innerHTML = m),
    day = (document.querySelector(".day").innerHTML = d);
});
