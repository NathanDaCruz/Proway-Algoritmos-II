//Criar um vetor vazio para solicitar do usuario frases aleatórias,
//Repetir essa captura té que o usuario digite ""
//Para cada repetição, escrever em tela a frase capturada

let frases
let frase

do {
    frase= prompt("Informe uma frase")

    document.write("<br>"+frase)
} while (frase != "")
