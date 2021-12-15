/*
Criar variaveis para o nome do aluno, as 3 notas e
calcular a media

Podem usar 3 variaveis para as notas OU usar repitição para
a quantidade de notas

*/

let nome = "Nathan"


// let nota1 = Number(prompt("Informe a 1ª nota do aluno " + nome))  //O NUMBER tem que ter a primeira letra maiuscula 
// let nota2 = Number(prompt("Informe a 2ª nota do aluno ", +nome))  //O NUMBER tem que ter a primeira letra maiuscula 
// let nota3 = Number(prompt("Informe a 3ª nota do aluno ", +nome))  //O NUMBER tem que ter a primeira letra maiuscula 

// let media = (nota1 + nota2 + nota3) / 3

let qtdNotas
let nota
let soma

qtdNotas = Number(prompt("Informe quantas notas você deseja capturar"))


//Variavel temporaria com ponto de partida
//Condição de permanencia 
//Incremento
soma = 0
for (let contador = 1; contador <= qtdNotas; contador += 1) {
    nota = Number(prompt("Informe a " + contador + "ª do aluno " + nome))
    soma += nota
}
let media = (soma) / qtdNotas

alert("Média é " + media)

if (media < 7) {
    alert("Reprovado");
} else {
    alert("Aprovado");
}
