//Criar uma classe calculadora com os atributos numerA e numeroB
//criar os metodos somar, subtrair, dividir, multiplicar e capturarNumeros
//todos recebem por parametro o valor de A e B (com prompt)
//esses metodos serão chamados botoes no html usando onclick="nomeDaFunca()"

class Calculadora{
    numeroA
    numeroB

    constructor(numeroA,numeroB){
        this.numeroA = numeroA
        this.numeroB = numeroB
    }
    capturarNumeros(nA,nB,operacao){
        this.numeroA = nA
        this.numeroB = nB
        
        switch(operacao){

            case "somar":
                return this.somar()
                break;
            case "subtrair":
                return this.subtrair()
                break;    
        }
    }
    somar(){
        return this.numeroA+this.numeroB
    }
    subtrair(){
        return this.numeroA-this.numeroB
    }
    dividir(){
        return this.numeroA/this.numeroB
    }
    multiplicar(){
        return this.numeroA*this.numeroB
    }
    

}

let calculadora = new Calculadora(1,2)
console.log("A soma é "+calculadora.somar());
console.log("A sobtração é "+calculadora.subtrair());
console.log("A operação de soma é "+calculadora.capturarNumeros(5,3,"somar"));
console.log("A operação de subtração é "+calculadora.capturarNumeros(5,3,"subtrair"));