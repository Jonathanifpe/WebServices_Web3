
function listar(){

	$.ajax({
        type: 'GET',
        crossDomain : true,

        url: "http://localhost:8082/usuario",
        success: function (data, status) { 
	        	
        		
	            var trHTML = '';
	            $.each(data, function (i, item) {
	            	
	                trHTML += '<tr><td>' + item.idUsuario + '</td><td>' + 
	                item.txtEmail + '</td><td>' + item.txtLogin + '</td></td>'+
	                item.txtNome + '</td><td>' + item.txtOcupacao + '</td><td>'+
	                item.txtSenha + '</td><td>' + item.txtTelefone + '</td><td>'+
	                item.endTxtBairro + '</td><td>' + item.endTxtCidade + '</td><td>'+
	                item.endTxtEstado + '</td><td>' + item.endTxtNumero + '</td><td>'+
	                item.endTxtRua + '</td><td>'+
	                '<button onClick="deletar('+item.idUsuario+')">'
	                +'Excluir'+'</button>'+'</td></td>';
	            });
	           $('#table').append(trHTML);
	        
            
            console.log(data);
        }, error: function (data, status) {
            alert('Contate um administrador.!');
            console.log(data);
        },
        

   
	});
	}

	
	
	
