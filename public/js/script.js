document.addEventListener("DOMContentLoaded", function () {

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener("submit", function (event) {
      console.log("SUBMIT CLICKED");

      if (!form.checkValidity()) {
        console.log("INVALID");
        event.preventDefault();
        event.stopPropagation();
      } else {
        console.log("VALID");
      }

      form.classList.add("was-validated");
    }, false);
  });
});