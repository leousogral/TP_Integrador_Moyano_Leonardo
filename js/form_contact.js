$(document).ready(function () {

    $('#services').select2({
        allowClear: true,
        theme: "classic"
    });

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
    });

    $("#resumen").hide();
    $("#botonPDF").hide();

    var arrayServicios = [];

    $("#enviar").click(function () {

        if ($("#form_contact").valid() == false) {
            return;
        }

        var servicios = $("#services").val();
        var name = $("#name").val();
        var email = $("#email").val();
        var tel = $("#tel").val();
        var mensaje = $("#mensaje").val();

        arrayServicios = servicios;

        $("#mostrar_resumen").html("<strong>Servicios: </strong>" + servicios + "<br><br>" +
                        "<strong>Nombre: </strong>" + name + "<br><br>" + 
                        "<strong>Email: </strong>" + email + "<br><br>" + 
                        "<strong>Telefono: </strong>" + tel + "<br><br>" + 
                        "<strong>Mensaje: </strong>" + mensaje);

        $("#contacto").hide();
        $("#resumen").fadeIn("fast");
    });

    $("#botonAtras").click(function () {

        $("#resumen").hide();
        $("#contacto").fadeIn("fast");

        $("#name").val() = "";
        $("#email").val() = "";
        $("#tel").val() = "";
        $("#mensaje").val() = "";
    });

    $("#botonAtras2").click(function () {

        location.reload();
    });

    $("#enviados").hide();
    $("#botonEnviar").click(function () {

        var name = $("#name").val();
        var email = $("#email").val();
        var tel = $("#tel").val();
        var mensaje = $("#mensaje").val();

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.text("Datos de la consulta", 100, 10, "center");
        doc.text("Servicios: " + arrayServicios, 15, 30);
        doc.text("Nombre: " + name, 15, 50);
        doc.text("Email: " + email, 15, 70);
        doc.text("Teléfono: " + tel, 15, 90);
        doc.text("Mensaje: " + mensaje, 15, 110);

        doc.save("consulta.pdf");

        $("#botonEnviar").fadeOut('slow');
        $("#resumen").fadeOut('slow');
        $("#enviados").fadeIn('fast');
        
        $("#name").val() = '';
        $("#email").val() = '';
        $("#tel").val() = '';
        $("#mensaje").val() = '';
    });
    
});