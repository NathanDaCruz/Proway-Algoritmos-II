//Criar uma classe professor com os atributos
//nome = string
//idade = Number
//qtdAlunos = Number

//Metodos 
//fazerChamada que recebe o parametro o nome do aluno e retorna (presença verificada)
//calculaMedia recebe 3 notas e devolve a media

//Após criar a classe instanciar 1 objeto da classe Professor para atribuir os valores
//atualizar algum valor de atributo do professor
//utilizar os metodos do professor

class Professor {
    nome
    idade
    qtdAlunos

    constructor(nome, idade, qtdAlunos) {
        this.nome = "Marcio"
        this.idade = 38
        this.qtdAlunos = 30
    }

    fazerChamada(nomeAluno) {
        return "Presença verificada, " + nomeAluno + " marcado na lista"
    }

    calcularMedia(nota1, nota2, nota3) {
        return (nota1 + nota2 + nota3) / 3
    }

}

let professor2 = new Professor("Fabricio", 37, 33)
professor2.qtdAlunos = 30

console.log(professor2.fazerChamada("Nathan"));

let media = professor2.calcularMedia(10, 7, 8)

console.log(media)

//Instanciaem outro professor e utilizem seus atributos e metodos 
//ler valores separadamente
//atualizar valores e ver o ANTES e DEPOIS
//fazer mais de uma CHAMDA
//calcular mais de uma MEDIA

let professor3 = new Professor("Marcio",28,15)
console.log(professor3);
console.log(professor3.nome);
console.log(professor3.idade);
console.log(professor3.qtdAlunos);

professor3.nome = "Junior"
console.log(professor3.nome);

console.log(professor3.fazerChamada("Willian"));
console.log(professor3.fazerChamada("Gustavo"));


console.log(professor3.calcularMedia(6,4,5));
console.log(professor3.calcularMedia(8,9,10));
