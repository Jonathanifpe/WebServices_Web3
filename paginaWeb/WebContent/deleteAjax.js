
function deletar(id)
{ 
$.ajax({
            type: 'DELETE',
            url: "http://localhost:8082/usuario/delete/"+id,
            
            success: function (data, status) {
                alert("Deletado");
            }, error: function (data, status) {
                alert("Não Deletado");

            },
            

        });
}
