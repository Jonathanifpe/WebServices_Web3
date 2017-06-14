$(function () {
$("#enviar").click(function () {
		
	  var emailForm = $("#email").val();
      var loginForm = $("#login").val();
      var nomeForm = $("#nome").val();
      var ocupacaoForm = $("#ocupacao").val();
      var senhaForm = $("#senha").val();
      var telefoneForm = $("#telefone").val();
      var bairroForm = $("#bairro").val();
      var cidadeForm = $("#cidade").val();
      var estadoForm = $("#estado").val();
      var numeroForm = $("#numero").val();
      var ruaForm = $("#rua").val();
      
      var objeto = {
      txtEmail:emailForm,
      txtLogin:loginForm,
      txtNome:nomeForm,
      txtOcupacao:ocupacaoForm,
      txtSenha:senhaForm,
      txtTelefone:telefoneForm,
      endTxtBairro:bairroForm,  
      endTxtCidade:cidadeForm, 
      endTxtEstado:estadoForm, 
      endTxtNumero:numeroForm, 
      endTxtRua:ruaForm};
      var cliente = JSON.stringify(objeto);
    
        $.ajax({
            type: "POST",
            url: "http://localhost:8082/usuario/inserir",
            data: cliente,
            contentType: "application/json",
            
            success: function (data, status) {
            	 console.log(data);
            	alert("sucesso");
                location.href = "Home.html";
                
            }, error: function (data) {
            	 console.log(data);
            	alert("erro");
                location.href = "Home.html";
            }
        });

        // Para não redirecionar para outra página
        $("#inserirNovo").submit(function (event) {
            event.preventDefault();
        });
    });
});