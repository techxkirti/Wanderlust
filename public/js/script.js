document.addEventListener("DOMContentLoaded", function () {
  console.log("JS RUNNING ");

  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    console.log("SUBMIT CLICKED");

    if (!form.checkValidity()) {
      console.log("INVALID ");
      event.preventDefault();
      event.stopPropagation();
    } else {
      console.log("VALID");
    }

    form.classList.add("was-validated");
  });
});