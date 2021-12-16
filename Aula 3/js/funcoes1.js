console.log("Deu certo");

//Chamada de função
meApresentar()

let nome = capturaTexto("Informe o seu nome") //Usando a função captura texto passando o parâmetro "frase"
let idade = capturaNumeroEspecial("Informe sua idade")
let anoAtual = capturaNumeroEspecial("Informe o ano atual")
let cidade = capturaTexto("Informe sua cidade")

console.log("Meu nome é " + nome + ", tenho " + idade + " anos, estamos no ano de " + anoAtual + " e estou em " + cidade);


console.log("Quero saber o retorno dessa função " + retorneInteiro());


//Declaração da função
//Tem palavra resevadada function
//Tem nome da função
//() gaveta de parâmetros
//{} tudo que será executado
//Conteudo que eu quero executar
function meApresentar() {
    let nome = "Nathan"
    let idade = 15

    console.log("Oi, meu nome é " + nome + " tenho " + idade + " anos");

}
//Chamada de função
meApresentar()



function retornoSimples() {
    return "Ta aqui oq vc precisa"
}

function retorneInteiro() {
    return 10
}
// Quando eu chamo essa função devo informar um valor para esse parametro
function capturaTexto(texto) {
    let temporario = prompt(texto)
    return temporario
}
// Não preciso passar parametros pois não tem
function capturaNumero() {
    let temporario = Number(prompt("Informe um numero"))
    return temporario
}
// Essa função recebe parametro onde a função capturaNumero não recebia
//desse forma a função se torna dinamica pois é parametrizavel
function capturaNumeroEspecial(frase){
    let temporario=Number(prompt(frase))
    return temporario
}