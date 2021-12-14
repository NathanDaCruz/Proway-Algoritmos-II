/*
Solicite uma quantidade de npumeros a serem capturados
para cada captura deve verificar qual o maior numero e o menor


Após a captura dos números exibir o maior o menor e a media geral desses números

*/

let quantidade = Number (prompt("Informe quantos números serão capturados"))
let menor
let maior 
let media  
let soma


soma=0

for(let contador=1;contador<=quantidade;contador++){
    let numero = Number (prompt("Informe o "+contador+"º número "))
soma+=numero
    if(contador==1){
        menor=numero
        maior=numero
    }else {
        if(numero<menor){
            menor=numero
        }
        if(numero>maior){
            maior=numero
        }
    }
}

media=soma/quantidade

alert("Menor "+menor)
alert("Maior "+maior)
alert("Média "+media)