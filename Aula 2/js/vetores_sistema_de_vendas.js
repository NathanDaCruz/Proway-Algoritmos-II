//Precisamos catalogar todos os veiculos e seus valores
//Para isso precisamos de 2 vetores um oara os nomes e outro para os valores
//Cada posição sera respectivamente nome e valor
//A quantidade de veiculos é indefinida até que infore que não deseja continuar com o cadastro
//Após o cadastro exibir o nome e valor do primeiro veiculo e do ultimo

//primeiro é lista[0]
//ultimo é lista[lista.length-1]

let nomes = []
let valores = []
let resposta
do {
    nome = prompt("Informe o nome do veiculo")
    nomes.push(nome)

    valor = Number(prompt("Informe o valor do veiculo " + nome))
    valores.push(valor)

    resposta = prompt("Deseja continuar S/N ?")
} while (resposta == "S" || resposta == "s")

document.write("<br>O primeiro carro foi " + nomes[0] + ", o valor dele é R$" + valor)
document.write("<br>O ultimo foi " + nomes[nomes.length - 1] + ", o valor dele é R$" + valor)

alert("O primeiro carro foi " + nomes[0] + ", o valor dele é R$" + valor)
alert("O ultimo foi " + nomes[nomes.length - 1] + ", o valor dele é R$" + valor)