const materias = ["Matematicas", "Espanol", "Fisica", "Biologia", "Ingles"];
let select = document.createElement("select");

for (let index = 0; index < materias.length; index++) {
  select.innerHTML += `<option value='${index}'>${materias[index]}</option>`;
}
select.addEventListener("change", function (e) {
  let h3 = document.createElement("h3");
  h3.innerHTML = materias[e.target.value];
  document.body.appendChild(h3);
});

document.body.appendChild(select);
