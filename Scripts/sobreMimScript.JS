const texto =
  "Oi, sou o Leonardo Fonseca, formado pela UNIFESP e um entusiasta fervoroso da tecnologia. Desde os tempos de faculdade, mergulhei de cabeça nesse universo fascinante. Conhecido pelo meu foco implacável e pela busca constante de crescimento, tanto pessoal quanto profissionalmente.";
const velocidadeDigitacao = 10; // Milissegundos por caractere

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
  "Com um olhar afiado para solucionar problemas, encaro cada desafio como uma oportunidade de aprendizado e crescimento. Acredito que a combinação da minha formação acadêmica com minha paixão pela tecnologia me capacita a enfrentar obstáculos de forma eficaz, buscando sempre soluções inovadoras e impactantes.";
const velocidadeDigitacao2 = 10; // Milissegundos por caractere

let index2 = 0;

function digitar2() {
  if (index2 < texto2.length) {
    document.getElementById("texto2-animado").innerHTML +=
      texto2.charAt(index2);
    index2++;
    setTimeout(digitar2, velocidadeDigitacao2);
  }
}
