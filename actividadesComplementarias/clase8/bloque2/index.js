/* const respuesta = () => {
  console.log("Hola click");
};

let boton = document.getElementById("boton");

// boton.addEventListener("click", respuesta);
boton.onclick = respuesta;
 */

let formulario = document.getElementById("formulario");
formulario.addEventListener(`submit`, validadFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log(`Formulario Enviado`);
}