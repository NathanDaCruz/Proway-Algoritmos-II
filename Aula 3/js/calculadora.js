


function capturarNumeros(acao) {

    let nA = promptNumero("Informe o primeiro numero")
    let nB = promptNumero("Informe o segundo numero")

    switch (acao) {
        case "somar":
            somar(nA, nB)
            break

        case "subtrair":
            subtrair(nA, nB)
            break

        case "dividir":
            dividir(nA, nB)
            break

        case "multiplicar":
            multiplicar(nA, nB)
            break

        default:
            console.log("Fazer nada pq não tem uma opção certa aqui");
            break

    }

}   // Escolher em um switch as operações

function promptNumero(frase) {
    let temporario = Number(prompt(frase))
    return temporario
}

function somar(nA, nB) {
    alert(nA + nB)
}
function subtrair(nA, nB) {
    alert(nA - nB)
}
function dividir(nA, nB) {
    alert(nA / nB)
}
function multiplicar(nA, nB) {
    alert(nA * nB)
}