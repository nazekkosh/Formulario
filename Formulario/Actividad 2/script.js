const steps = document.querySelectorAll(".step");
const accordionGroups = document.querySelectorAll(".acordeon_group");
const volverBtn = document.querySelector("#volver");
const siguienteBtn = document.querySelector("#siguiente_paso");
const enviarForm = document.querySelector("#enviar_form");

let currentStep = 0;

document.addEventListener("DOMContentLoaded", () => {
  handleFirstLoad();

  // Set events
  steps.forEach((step, index) => {
    step.addEventListener("click", () => {
      console.log("click", index);
      removePreviousActive();
      displayStep(index);
    });
  });

  accordionGroups.forEach((accordion, index) => {
    accordion.addEventListener("click", () => {
      console.log("click", index);
      removePreviousActive();
      displayStep(index);
    });
  });

  volverBtn.addEventListener("click", () => {
    if (currentStep > 0) {
      removePreviousActive();
      displayStep(currentStep - 1);
    }
  });

  siguienteBtn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      removePreviousActive();
      displayStep(currentStep + 1);
    }
  });

  enviarForm.addEventListener("click", (event) => {
    event.preventDefault();
    const formData = retrieveData();
    alert(JSON.stringify(formData, null, 2));
  });
});

const displayStep = (index) => {
  if (steps && accordionGroups) {
    steps[index].classList.add("step-active");
    accordionGroups[index].classList.add("active");

    setCurrentStep(index);
  }
};

const removePreviousActive = () => {
  steps.forEach((step) => {
    step.classList.remove("step-active");
  });

  accordionGroups.forEach((group) => {
    group.classList.remove("active");
  });
};

const setCurrentStep = (index) => {
  currentStep = index;
  console.log("Current step: ", currentStep);
  volverBtn.style.display = currentStep === 0 ? "none" : "block";
  siguienteBtn.style.display =
    currentStep === steps.length - 1 ? "none" : "block";
  enviarForm.style.display =
    currentStep === steps.length - 1 ? "block" : "none";
};

const handleFirstLoad = () => {
  removePreviousActive();
  displayStep(0);
};

const retrieveData = () => {
  const formData = {};
  const forms = document.querySelectorAll(".seccion_acordeon");

  forms.forEach((form) => {
    const inputs = form.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
      formData[input.name] = input.value;
    });
  });

  return formData;
};
