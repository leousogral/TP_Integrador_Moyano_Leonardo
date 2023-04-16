function sendRequest() {
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?id=3433955&appid=3703eb6b830f455212008b6bf5b4a561&lang=es&units=metric',
        type: 'GET',
        dataType: "JSON",
        success: function (data) {
            var datos = mostrarDatos(data);
            $("#showApi").html(datos);
        },
        complete: function () {
            /* Se actualiza cada 60 segundos */
            setTimeout(function () {
                sendRequest();
            }, 60000);
        }
    });
};

$(function () {
    sendRequest();
});

function mostrarDatos(data) {
    return "<h3>" + data.main.temp + "&deg;C</h3>" +
        "<h3><img src='https://openweathermap.org/img/wn/" + 
        data.weather[0].icon + ".png'></h3>" + 
        "<h3>" + data.weather[0].description + "</h3>";
}