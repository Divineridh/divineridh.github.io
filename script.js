window.onload = function () {

    document.getElementById("submitButton").addEventListener("click", function () {
        VerifyNombre();
        VerifyApellido();
        VerifyEmail();
        VerifyEdad();
    });

    var nombre = document.getElementById("formNombre");
    var apellido = document.getElementById("formApellido");
    var email = document.getElementById("formEmail");
    var edad = document.getElementById("formEdad");
    var genero = document.getElementById("formGenero");


    function VerifyNombre(e) {
        var x = nombre.value;
        if (x.length < 3) {
            nombre.setCustomValidity("El nombre debe tener por lo menos 3 caracteres");
            nombre.classList.add("form-error");
        }
    }

    function VerifyApellido(e) {
        var x = apellido.value;
        if (x.length < 3) {
            apellido.setCustomValidity("El apellido debe tener por lo menos 3 caracteres");
            apellido.classList.add("form-error");
        }
    }

    function VerifyEmail(e) {
        var x = email.value;
        const isValidEmail = x => {
            const re = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
            return re.test(String(x).toLowerCase());
        }
        if (x.length < 3) {
            email.setCustomValidity("El apellido debe tener por lo menos 3 caracteres");
            email.classList.add("form-error");
        }
    }

    function VerifyEdad(e) {
        var x = edad.value;
        if (x < 1 && x > 99) {
            edad.setCustomValidity("La edad debe ser un numero entre 0 y 100");
            edad.classList.add("form-error");
        }
    }
}