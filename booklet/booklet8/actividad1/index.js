let btn = document.createElement("button");
btn.innerText = `Submit`;
btn.id = "btn";
document.body.append(btn);


btn.addEventListener("click", () => {
  let title = document.createElement("h3");
  title.innerHTML = `Hola man`;
  document.body.append(title);
});

