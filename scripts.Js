function toggleDetails(id) {
    var detalhes = document.getElementById(id);
    var projetos = document.getElementsByClassName('projeto');
    
    for (var i = 0; i < projetos.length; i++) {
        var detalhes = projetos[i].getElementsByTagName('div')[1];
        
        if (!detalhes[i]) {
            detalhes[i] = {
                display: detalhes.style.display,
                width: projetos[i].style.width
            };
        }
        
        if (detalhes.id === id) {
            if (detalhes.style.display === '' || detalhes.style.display === 'none') {
                detalhes.style.display = 'block';
                projetos[i].classList.add('aberto');
                projetos[i].style.width = '60%'; 
            } else {
                detalhes.style.display = 'none';
                projetos[i].classList.remove('aberto');
                projetos[i].style.width = detalhes[i].width;
            }
        } else {
            if (detalhes.style.display === 'block') {
                detalhes.style.display = 'none';
                projetos[i].classList.remove('aberto'); // Remove a classe 'aberto'
                projetos[i].style.width = detalhes[i].width; // Restaura a largura original
            }
        }
        
    }
}

function callLinkedIn(){
    window.open('https://www.linkedin.com/in/leonardo-fonseca-97565326b/', '_blank');
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


