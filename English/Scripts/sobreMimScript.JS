const texto = "Hi, I'm Leonardo Fonseca and I've been passionate about technology since my college days at UNIFESP. I've always enjoyed delving into this fascinating universe, constantly seeking to learn and grow. Additionally, I really enjoy solving problems and view each challenge as an opportunity for personal and professional development.";
const velocidadeDigitacao = 30; // Milissegundos por caractere

let index = 0;

function digitar() {
    if (index < texto.length) {
        document.getElementById("texto-animado").innerHTML += texto.charAt(index);
        index++;
        setTimeout(digitar, velocidadeDigitacao);
    } else {
        digitar2(); // Inicia a função digitar2() quando digitar() estiver concluída
    }
}

digitar();


const texto2 = 
"With a solid background in technology and a great interest in innovation, I'm always searching for creative and meaningful solutions. I believe that the combination of my academic background and my personal motivation enables me to tackle any challenge effectively, thus contributing to continuous progress both personally and professionally.";
const velocidadeDigitacao2 = 30; // Milissegundos por caractere

let index2 = 0;

function digitar2() {
    if (index2 < texto2.length) {
        document.getElementById("texto2-animado").innerHTML += texto2.charAt(index2);
        index2++;
        setTimeout(digitar2, velocidadeDigitacao2);
    }
}
