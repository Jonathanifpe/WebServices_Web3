function listar(){
	$.ajax({
        type: 'GET',
        url: "http://localho:8082/usuario",
        success: function (data, status) {
        	if (status == 200) {
	            console.log(data);
	            var table = document.createElement("TABLE");
	            table.setAttribute("id","table");
	            var cabecalho = document.createElement("THEAD");
	            var corpo = document.createElement("TBODY");
	            table.style.border = "1px solid";
	            var tr = document.createElement('tr');
	           
	            cabecalho.appendChild(tr);
	            var numberTable=0;
	            for (var i = 0; i < data.getElementsByTagName("cd").length; i++)
	            {
	                
	                            
	                if (data.getElementsByTagName("cd").item(i).childNodes.item(i) !== null)

	                {
	                    if (data.getElementsByTagName("cd").item(i).childNodes.item(i).nodeType != 3)
	                    {
	                        th = data.createElement('th');
	                        numberTable++;
	                        th.innerHTML = data.getElementsByTagName("cd").item(i).childNodes.item(i).nodeName;
	                        
	                        tr.appendChild(th);
	                    }
	                }
	            }

	            for (i = 0; i < data.getElementsByTagName("cd").length
	                    ; i++)
	            {
	                
	                var tr = document.createElement('tr');
	             
	                for (j = 0; j < data.getElementsByTagName("cd").item(j).childNodes.length; j++)
	                {
	                    if (data.getElementsByTagName("cd").item(j).childNodes.item(j) !== null)
	                    {
	                        if (data.getElementsByTagName("cd").item(j).childNodes.item(j).nodeType === 1)
	                        {
	                              var td = document.createElement('td');
	                                 td.innerHTML =data.getElementsByTagName("cd").item(i).childNodes.item(j).firstChild.nodeValue;
	                                 tr.appendChild(td);        
	                            
	                        }
	                      
	                    }
	                }
	                corpo.appendChild(tr);
	            }

	            table.appendChild(cabecalho);
	            table.appendChild(corpo);

	            var div = document.getElementById("table");
	            div.appendChild(table);
	        }
            if(data.mensagem === "sucesso"){
                alert('Foi!');
            } else{
                alert('Não foi. Tente novamente!');
            }
            console.log(data);
        }, error: function (data, status) {
            alert('Contate um administrador.!');
            console.log(data);
        },

   
	});
	}

	
	
	
