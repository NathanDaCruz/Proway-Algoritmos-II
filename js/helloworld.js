
let nome = "Nathan"        // variavel do tipo string
let idade = 15           // variavel do tipo number
let distanciaProway = 50 // variavel do tipo number
let qualquer =

    console.log("Olá, meu nome é", nome, "e tenho", idade, "anos e moro a", distanciaProway, "km da Proway");

//let bairro= prompt("Informe o seu bairro")

//alert(bairro)

if (idade >= 18) {
    console.log("Vc é maior de idade");
} else {
    console.log("Vc é de menor");
}

if (idade <= 15) {
    console.log("Vc é uma criança");
} else {
    console.log("Vc não pe uma criança");
}

console.log("Escolha uma opção");
console.log("1 - Primaver ");
console.log("2 - Verão ");
console.log("3 - Outono");
console.log("4 - Inverno");

let opcao = 2

switch (opcao) {
    case 1:
        console.log("Você escolheu a primavera");
        break
    case 2:
        console.log("Você escolheu o verão");
        break

    case 3:
        console.log("Você escolheu o Outono");
        break
    case 4:
        console.log("Você escolheu Inverno");
        break

    default:
        console.log("você não escolheu nada");
        break
}


let quantidade = 15

for (let contador = 1; contador <= quantidade; contador++) {
    console.log("Repetindo pela", contador, "x");
}

for (let variavel = 1; variavel <= 5; variavel += 2) {
    console.log("Repetindo dnv pela", variavel, "x");
}
// let resposta
// do {
//     resposta = prompt("Tinham 2 dogs, pita e repita, pita morreu, quem ficou ?")

// } while (resposta == "repita");