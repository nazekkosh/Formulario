document.addEventListener("DOMContentLoaded", function () {
  
  function validarCampo(campo) {
    let valido = true;
    const errorIcon = document.getElementById(`error-${campo.id}`); // icono

    campo.classList.remove("valid");
    campo.classList.remove("error");
    errorIcon.style.display = "none"; // Ocultar el icono de error

    if (campo.id === "nombre" || campo.id === "apellido") {
      if (campo.value.trim() === "") {
        valido = false;
        campo.classList.add("error"); // Añade el borde rojo
        campo.setCustomValidity("Este campo no puede estar vacío");
        errorIcon.style.display = "inline-block";
      } else {
        campo.setCustomValidity("");
        campo.classList.add("valid"); // Añade la clase "valid" si es válido
        errorIcon.style.display = "none"; 
      }
    }

    // Validación del teléfono
    if (campo.id === "telefono") {
      const telefonoPattern = /^\+?[0-9\s\-]{7,15}$/;
      if (!telefonoPattern.test(campo.value)) {
        valido = false;
        campo.classList.add("error");
        campo.setCustomValidity("Número de teléfono inválido");
        errorIcon.style.display = "inline-block";
      } else {
        campo.setCustomValidity("");
        campo.classList.add("valid");
        errorIcon.style.display = "none"; 
      }
    }

    // Validación del correo electrónico
    if (campo.id === "email") {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(campo.value)) {
        valido = false;
        campo.classList.add("error");
        campo.setCustomValidity("Correo electrónico inválido");
        errorIcon.style.display = "inline-block";
      } else {
        campo.setCustomValidity("");
        campo.classList.add("valid");
        errorIcon.style.display = "none";
      }
    }

    // calle
    if (campo.id === "calle") {
      if (campo.value.trim() === "") {
        valido = false;
        campo.classList.add("error");
        campo.setCustomValidity("La calle no puede estar vacía");
        errorIcon.style.display = "inline-block";
      } else {
        campo.setCustomValidity("");
        campo.classList.add("valid");
        errorIcon.style.display = "none";
      }
    }

    // ciudad
    if (campo.id === "ciudad") {
      if (campo.value.trim() === "") {
        valido = false;
        campo.classList.add("error");
        campo.setCustomValidity("La ciudad no puede estar vacía");
        errorIcon.style.display = "inline-block";
      } else {
        campo.setCustomValidity("");
        campo.classList.add("valid");
        errorIcon.style.display = "none";
      }
    }

    // Validación del código postal
    if (campo.id === "codigo-postal") {
      if (campo.value.trim() === "") {
        valido = false;
        campo.classList.add("error");
        campo.setCustomValidity("El código postal no puede estar vacío");
        errorIcon.style.display = "inline-block";
      } else {
        const codigoPostalPattern = /^\d{5}$/;
        if (!codigoPostalPattern.test(campo.value.trim())) {
          valido = false;
          campo.setCustomValidity(
            "El código postal debe contener solo números"
          );
          campo.classList.add("error");
          errorIcon.style.display = "inline-block";
        } else {
          campo.setCustomValidity("");
          campo.classList.add("valid");
          errorIcon.style.display = "none";
        }
      }
    }

    // provincia
    if (campo.id === "provincia") {
      if (campo.value.trim() === "") {
        valido = false;
        campo.classList.add("error");
        campo.setCustomValidity("La provincia no puede estar vacía");
        errorIcon.style.display = "inline-block";
      } else {
        campo.setCustomValidity("");
        campo.classList.add("valid");
        errorIcon.style.display = "none";
      }
    }

    // numero de tarjeta
    if (campo.id === "numero-tarjeta") {
      if (campo.value.trim() === "") {
        valido = false;
        campo.classList.add("error");
        campo.setCustomValidity("El número de tarjeta no puede estar vacío");
        errorIcon.style.display = "inline-block";
      } else {
        const numeroTarjetaPattern = /^[0-9]+$/;
        if (!numeroTarjetaPattern.test(campo.value.trim())) {
          valido = false;
          campo.classList.add("error");
          campo.setCustomValidity("El número de tarjeta debe contener solo números");
          errorIcon.style.display = "inline-block";
        } else {
          campo.setCustomValidity("");
          campo.classList.add("valid");
          errorIcon.style.display = "none";
        }
      }
    }

    // Validación de la fecha de vencimiento de la tarjeta
    if (campo.id === "fecha-vencimiento") {
      const fechaActual = new Date();
      const fechaVencimiento = new Date(campo.value + "-01");
      if (fechaVencimiento < fechaActual) {
        valido = false;
        campo.classList.add("error");
        campo.setCustomValidity("La tarjeta ha vencido");
        errorIcon.style.display = "inline-block";
      } else {
        campo.setCustomValidity("");
        campo.classList.add("valid");
        errorIcon.style.display = "none";
      }
    }

    // Validación del CVV
    if (campo.id === "CVV") {
      if (campo.value.length !== 3) {
        valido = false;
        campo.classList.add("error");
        campo.setCustomValidity("El CVV debe tener 3 dígitos");
        errorIcon.style.display = "inline-block";
      } else {
        campo.setCustomValidity("");
        campo.classList.add("valid");
        errorIcon.style.display = "none";
      }
    }

    //Notas
    if (campo.id === "notas") {
      if (campo.value.trim() === "") {
        valido = false;
        campo.classList.add("error");
        campo.setCustomValidity("Este campo no puede estar vacío");
        errorIcon.style.display = "inline-block";
      } else {
        campo.setCustomValidity("");
        campo.classList.add("valid");
        errorIcon.style.display = "none";
      }
    }

    return valido;
  }

  // Función para validar todos los campos
  function validarCampos() {
    const campos = document.querySelectorAll("input, textarea");
    campos.forEach((campo) => {
      validarCampo(campo);
    });
  }

  const campos = document.querySelectorAll("input, textarea");
  campos.forEach((campo) => {
  
    campo.addEventListener("blur", function () {
      validarCampo(campo);
    });

    campo.addEventListener("focus", function () {
      validarCampo(campo);
    });

    campo.addEventListener("input", function () {
      validarCampo(campo);
    });
  });
});
