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
        mensaje: {
            required: "Debe ingresar un comentario",
            maxlength: "El mensaje debe tener menor a 300 caracteres"
        }
    },
    success: function(label) {
        label.addClass("validacionOK").text("!Correcto¡");
    },
    errorElement: 'div'
});