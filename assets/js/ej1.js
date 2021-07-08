const formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("evento submit");

  const onlyLetters = /([A-Az-z])/g
  const inputNombre = document.getElementById("nombre");
  const inputAsunto = document.getElementById("asunto");
  const inputMensaje = document.getElementById("mensaje");

  const errorNombre = document.getElementById("errorNombre");
  const errorAsunto = document.getElementById("errorAsunto");
  const errorMensaje = document.getElementById("errorMensaje");

  let validNombre = false;
  let validAsunto = false;
  let validMensaje = false;


  if(onlyLetters.test(inputNombre.value)) {
    validNombre = true;
    errorNombre.innerHTML = "";
  } else {
    errorNombre.innerHTML = "El campo nombre no es válido";
  }

  if(onlyLetters.test(inputAsunto.value)) {
    validAsunto = true;
    errorAsunto.innerHTML = "";
  } else {
    errorAsunto.innerHTML = "El campo asunto no es válido";
  }

  if(onlyLetters.test(inputMensaje.value)) {
    validMensaje = true;
    errorMensaje.innerHTML = "";
  } else {
    errorMensaje.innerHTML = "El campo mensaje no es válido";
  }

  if (validNombre && validAsunto && validMensaje) {
    successResultado.innerHTML = "Exito";
  } else {
    successResultado.innerHTML = "";
  }
});
