document.getElementById("submitButton").addEventListener("click", function() {

});

function VerifyNombre(e) {
    e.preventDefault();

    var nombre = document.getElementById("formNombre");
    var x = nombre.value;
    if (x.length < 3) {
        const nameError = document.getElementById("nameError");
        nameError.classList.add("visible");
        nombre.classList.add("invalid");
        nameError.setAttribute("aria-hidden", false);
        nameError.setAttribute("aria-invalid", true);
    }

}