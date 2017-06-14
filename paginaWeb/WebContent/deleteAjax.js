$(document).ready(function () {
function deletar()
{ 
$.ajax({
            type: 'POST',
            url: "localhost:8082/usuario/delete/",
            data: {"id":2},
            success: function (data, status) {
                console.log(data);
            }, error: function (data, status) {
                console.log(data);

            },
            crossDomain: false,
            contentType: 'application/json'

        });
}
});