
//A classe Pessoa agrega tudo que foi identificado como COMUM entre as classes Aluno,Professor...
class Pessoa {
    //esse atributos nçao precisam mais ser declarados em cada classe que herde da Pessoa
    nome
    idade
    altura
    salario
    //basta repassar os parametros que vem no NEW para o contructor da SUPER CLASSE
    constructor(nome, idade, altura, salario) {
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.salario = salario
    }
}

//O comando extends + nome da classe, garante a herança de atributos e metodos da SUPER CLASSE
class Diretor extends Pessoa {
    //Esse atributo só existe na classe Diretor
    //não preciso informar o nome e idade novamente aqui
    qtdProfessores

    //o constructor tem o objetivo de preencher os valores antes de gerar um objeto do tipo Diretor
    //por isso preciso informar nome e idade no NEW porém devo repassar esses valores para o constructor
    //da super classe ou CLASSE PAI
    constructor(nome, idade, qtdProfessores) {
        super(nome, idade)
        this.qtdProfessores = qtdProfessores
        //Os atributos herdados repasso para o constructor da SUPER CLASSE 

    }
}


class Aluno extends Pessoa {
    //nome
    // idade
    matricula

    //Consructor utilizado no new que recebe os parametros para inicializar
    //os atributos no novo objeto do tipo aluno
    constructor(nome, idade, matricula) {
        //para cada parametro inicializo respectivamente o atributo do objeto
        //o (this.) é utilizado para identificar que o atributo é do objeto
        //isso ajuda a não confundir parametro com atributo
        super(nome, idade)
        this.matricula = matricula
    }
    meApresentar() {
        return "Olá meu nome é " + this.nome + ", tenho " + this.idade + " anos e minha matricula é " + this.matricula
    }

}


//Professor
//nome, idade, qtdAlunos
//meApresentar

class Professor extends Pessoa {
    //nome
    //idade
    qtdAlunos

    constructor(nome, idade, qtdAlunos, altura, salario) {
        //O super deve ser chamado primeiro para garantir que a SUPER CLASSE faça o seu constructor primeiro
        super(nome, idade, altura, salario)
        //depois inicializo meus atributos especificos da classe Professor
        this.qtdAlunos = qtdAlunos
    }

    meApresentar() {
        return "Olá meu nome é " + this.nome + ", tenho " + this.idade + " anos e tenho " + this.qtdAlunos + " alunos"
    }
}

let prof1 = new Professor("Oliota", 32, 15, 1.8, 0)
console.log(prof1);
console.log(prof1.nome);
console.log(prof1.idade);
console.log(prof1.qtdAlunos);

let paulo = new Diretor("Paula Y Kano", 80, 30)
paulo.altura = 1.5
paulo.salario = 25000
console.log(paulo);

