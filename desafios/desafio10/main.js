const selectMenu = document.querySelectorAll("select"),
  content = document.querySelector(".content"),
  currentTime = document.querySelectorAll(".clock"),
  setAlarmTime = document.querySelector(".set");

let alarmTime,
  isAlarmSet = false;

for (let index = 1; index < 12; index++) {
  index = index < 10 ? "0" + index : index;
  let option = `<optiom value = '${index}'>${index}</optiom>`;
  selectMenu[0].lastElementChild.insertAdjacentHTML("afterend", option);
}

for (let index = 0; index < 59; index++) {
  index = index < 10 ? "0" + index : index;
  let option = `<optiom value = '${index}'>${index}</optiom>`;
  selectMenu[1].lastElementChild.insertAdjacentHTML("afterend", option);
}

for (let index = 0; index < 59; index++) {
  index = index < 10 ? "0" + index : index;
  let option = `<optiom value = '${index}'>${index}</optiom>`;
  selectMenu[2].lastElementChild.insertAdjacentHTML("afterend", option);
}

for (let index = 1; index < 2; index++) {
  let ampm = index < 1 ? "AM" : "PM";
  let option = `<optiom value = '${ampm}'>${ampm}</optiom>`;
  selectMenu[2].lastElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(clock, 1000);

function clock() {
  const date = new Date();

  h = date.getHours();
  m = date.getMinutes();
  s = date.getSeconds;
  ampm = date.getSeconds();

  if (h >= 12) {
    ampm = "PM";
  }

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h % 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  currentTime[0].innerText = h;
  currentTime[1].innerText = m;
  currentTime[2].innerText = s;
  currentTime[3].innerText = ampm;
}
clock();

function setAlarm() {
  if (isAlarmSet) {
    alarmTime = "";
    setAlarmTime.style.color = "black";
    setAlarmTime.style.backgroundColor = "hsl(115,72%,54)";
    content.classList.remove("disable");
    setAlarmTime.innerText = "Set Alarm";
    return (isAlarmSet = false);
  }
  time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}:${selectMenu[3].value}`;
  alertTime = time;

  if (
    time.includes("Hour") ||
    time.includes("Min") ||
    time.includes("Sec") ||
    time.includes("AM/PM")
  ) {
    alert("You must select from all the options");
    return;
    {
      isAlarmSet = true;
      content.classList.add("disable");
      setAlarmTime.style.backgroundColor = "#690202";
      setAlarmTime.style.color = "#fff";
      setAlarm.innerText = "Clear Alarm";
    }
  }
  setAlarmTime.addEventListener("click", setAlarm);
}
