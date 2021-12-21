console.log("Deu certo");

//Aluno

//Atributos = variaveis (5)
//nota = Number
//nome = string
//idade = Number
//matricula 
//senha

//Metodos "comportamento" = funcoes sem o comando function 

//conversar(ouviu) ---> return resposta 
//responderChamada(professor) ---> " professor, MEU_NOME presente"
//meApresentar() ---> "Oi, meu nome é NOME tenho xx anos, minha matricula é xxx"


class Aluno {
    nome
    idade
    matricula
    senha
    nota
    //declaração do construtor que sera chamado de forma externa
    //para criar um OBJETO da classe Aluno
    constructor(nome, idade, matricula, senha, nota) {
        //passando os valores dos parametros para os meus atributos diferenciando com (THIS.)
        this.nome = nome
        this.idade = idade
        this.matricula = matricula
        this.senha = senha
        this.nota = nota
    }

    conversar(ouviu) {
        return ouviu + ", Hmmm que interessante..."
    }
    chamarProfessor(mensagem) {
        return "Já resolveu era isso (" + mensagem + ")"
    }
    meApresentar() {
        return "Olá, meu nome é " + this.nome +
            ", tenho " + this.idade + " anos, minha senha é = não vou informar (tonystark)"
    }
}

let nome = "Nathan"

let aluno1 = new Aluno("Nathan", 15, "71562", "123#321", 10)

let alunoX = new Aluno("Miranha", 20, "miranha3", "tonystark", 10)

console.log(aluno1);
console.log(aluno1.nome);
console.log(aluno1.matricula);

console.log(alunoX.senha);

aluno1.nome = "XXX"
console.log(aluno1);

alunoX.nome = "Outro nome"
alunoX.idade = 13
alunoX.matricula = "71562"
alunoX.senha = "123"
alunoX.nota = 2

console.log(alunoX);
console.log(alunoX.idade);

let colega = new Aluno("Willian", 16, "will123", "123", 3.5)
console.log(colega);
colega.matricula = "will321"
console.log(colega);

console.log(aluno1.conversar("sobre o filme do miranha"));

document.write(aluno1.conversar("sobre o filme do miranha"))

let resposta = aluno1.conversar("sobre o filme do miranha")

console.log(resposta);

console.log(alunoX.conversar("Nada a declarar"));

//Como eu crio um objeto da classe aluno ?
//instaciando um objeto da classe Aluno com os valores dos atributos passados no construtor
let aluno2 = new Aluno("Derik", 20, "90909", "euSouDerik", 2)

//Como eu acesso cada atributo do objeto ? (Ver no minimo 3)
console.log("Ola meu nome é " + aluno2.nome);
document.writeln("Oi, eu tenho " + aluno2.idade + " anos")
let variavel = aluno2.matricula

//Como eu atualizo o atributo de um objeto ? (atualizar 3 atributos)

aluno2.nome = "Willian"
aluno2.idade = 16
aluno2.senha = "will123321"
console.log(aluno2);

//Executando metodos de um objeto da classe Aluno
console.log(aluno2.conversar("Aprendi orientação a objetos"))

console.log(aluno2.chamarProfessor("erro na linha 64"));

console.log(aluno1.meApresentar()); 