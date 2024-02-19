// Armazena os estilos originais da div
var estilosOriginais = {};

function toggleDetails(id) {
    var detalhes = document.getElementById(id);
    var projetos = document.getElementsByClassName('projeto');
    
    for (var i = 0; i < projetos.length; i++) {
        var detalhe = projetos[i].getElementsByTagName('div')[1];
        
        if (!estilosOriginais[i]) {
            // Armazena os estilos originais da div
            estilosOriginais[i] = {
                display: detalhe.style.display,
                width: projetos[i].style.width
            };
        }
        
        if (detalhe.id === id) {
            if (detalhe.style.display === 'none') {
                detalhe.style.display = 'block';
                projetos[i].classList.add('aberto'); // Adiciona a classe 'aberto'
                projetos[i].style.width = '60%'; 
            } else {
                detalhe.style.display = 'none';
                projetos[i].classList.remove('aberto'); // Remove a classe 'aberto'
                projetos[i].style.width = estilosOriginais[i].width; // Restaura a largura original
            }
        } else {
            detalhe.style.display = 'none';
        }
    }
}


function downloadPDF(filename) {
    // Cria um link temporário
    var link = document.createElement('a');
    link.href = filename;
    link.download = filename;

    // Adiciona o link ao corpo do documento
    document.body.appendChild(link);

    // Simula um clique no link para iniciar o download
    link.click();

    // Remove o link temporário do corpo do documento
    document.body.removeChild(link);
}


