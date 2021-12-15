console.log("Deu certo");

let nomes=[]  // Criando um vetor sem itens

console.log(nomes);


// Criando um vetor ja com itens
let cursos=[  
    "Algoritmos 1",
    "Algoritmos 2",
    "Java fundamentos",
    "Fundamentos em html5",
    "Javascript avançado",
    "Mysql",
    "Typescript",
    "Fundamentos em css"
]

console.log(cursos);

console.log(cursos[5]);//Acessando o valor no index 5, lembrando que começa com 0
console.log(cursos.indexOf("Fundamentos em html5"));

console.log(cursos.indexOf("Typescript"));

cursos.splice(4,3)//posição 4, deletar 3 itens

//Para deletar um item na lista é necessário informar
//a posição do item e a quantidade de intens para deletar

console.log(cursos);


cursos.push("Python")//Inserindo item no final da lista
cursos.push("Angular")//Inserindo item no final da lista

console.log(cursos);
//Iniciando o contaor com zero pois o indice na lista começa com zero
//Enquanto for menor que o tamanhho da lista, ou seja tamanho -1
//incremento de 1 em 1
for(let contador=0;contador<cursos.length;contador++){ 
    //acessando o valor de cursos na posição [contador]
    console.log("Na posição "+contador+" tem o valor = "+cursos[contador]);
}
//Iniciando o contador com 1 pq é mais intuitivo fazer a contagem com 1
//mas tenho que ir ate o tamanho da lista
//incremento de 1 em 1
console.log("=========================================");
for(let contador=1;contador<=cursos.length;contador++){
    //ajustando o acesso ao valor para localuzar o indice correto, pois começa com o 0
    //se eu inicio com 1 eu estaria pulando o primeiro item e acesso um item extra que não existe
    console.log("Na posição "+contador+" tem o valor = "+cursos[contador-1]);

}