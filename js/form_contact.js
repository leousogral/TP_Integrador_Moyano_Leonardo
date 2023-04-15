$(document).ready(function () {

    var services = document.querySelector("#services");

    console.log(services)
    $("#form_contact").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true,
                number: true,
                minlength: 10
            },
            'services[]': {
                required: true,
            },
            mensaje: {
                required: true,
            maxlength: 300
        }
    },
    messages: {
        name: {
            required: "Debe ingresar un nombre",
            minlength: "El nombre debe tener almenos 3 caracteres"
        },
        email: {
            required: "Debe ingresar un email",
            email: "Ingrese un correo valido"
        },
        tel: {
            required: "Debe ingresar un número de teléfono",
            number: "Solo puede ingresar números",
            minlength: "Como mínimo 10 números"
        },
        'services[]': {
            required: "Debe seleccionar al menos uno o mas servicios",
        },
        mensaje: {
            required: "Debe ingresar un comentario",
            maxlength: "El mensaje debe tener menor a 300 caracteres"
        }
    },
    success: function(span) {
        span.addClass("validacionOK").text("!Correcto¡");
    },
    errorElement: 'span'
});
});