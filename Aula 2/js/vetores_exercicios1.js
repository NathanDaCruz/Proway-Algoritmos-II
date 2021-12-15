console.log("Criar um vetor de gostos pessoais");
console.log("Pode criar o vetor ja com valores ou não");
console.log("Se não tiver valores usar o push para incluir item a item");

console.log("exibir a lista toda com LOG");
console.log("Percorre a lista para apresentar cada valor com uma frase");
//vetor de gostos
let gostos = [   // gostos.push para colocar mais coisas na lista
    "Jogar CS",
    "Jogar BeachTennis",
    "Estudar (SóqNão)",
    "Basquete"

]
//Exibir em log como está a variavel na lista
console.log(gostos);

for (let contador = 0; contador < gostos.length; contador++) {
    console.log("Eu gosto de " + gostos[contador]);//Não esquecer de colocar [contador]
}

console.log(gostos[0]);
console.log("O que eu mais gosto é de "+gostos[0]);

