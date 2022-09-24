const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);

const name = document.getElementById("name");
name.addEventListener("moseout", (item) => {
  localStorage.setItem(item, item.value);
});

function validarFormulario(e) {
  e.preventDefault();
  console.log(e);
}
