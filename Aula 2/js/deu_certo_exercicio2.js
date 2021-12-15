console.log("Deu certo, Exercício 2");

document.write("Que legal")
document.write("<br>Criar um vetor de números e solicitar do usuario uma quantidade de números")
document.write("<br>Conforme a quantidade repetir a aptura número a número até acabar o laço")
document.write("<br>Depois que o laço acabar, percorrer a lista para determinar qual o maior e menor número")

let numeros = []
let quantidade
let numero
//                  leia com escreval
quantidade = Number(prompt("Informe quantos números deseja capturar"))

for (let contador = 1; contador <= quantidade; contador++) {
    numero = Number(prompt("Informe o " + contador + "ª número"))
    numeros.push(numero)//assim vai aumentar a cada push
}
console.log(numeros);

let menor
let maior

for (let contador = 0; contador < numeros.length; contador++) {
    if (contador == 1) {
        menor = numeros[contador]
        maior = numeros[contador]
    } else {
        if (numeros[contador] < menor) {
            menor = numeros[contador]
        }
        if (numeros[contador] > maior) {
            maior = numeros[contador]
        }
    }
}


document.write("<br>O menor número é "+menor)
document.write("<br>O maior número é "+maior)
