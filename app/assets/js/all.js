(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

let openTextarea = document.querySelector(".openTextarea");
let cancel = document.querySelector(".cancel");
let body = document.querySelector(".w-0");
openTextarea.addEventListener("click", function (e) {
  body.style.width = "100%";
  body.style.height = "330px";
});
cancel.addEventListener("click", function (e) {
  body.style.width = "0%";
  body.style.height = "0px";
});
