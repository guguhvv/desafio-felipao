function calcularElo(vitorias,derrotas){

    //calcular saldo de vitorias:
    let saldoVitorias = vitorias - derrotas

    //criação da variavel nivel:
    let nivel

    //determinar o elo do jogador baseado no saldo de vitorias:
    if(saldoVitorias <= 10){
        nivel= "Ferro"
    }
    else if(saldoVitorias>= 11 && vitorias <=20){
        nivel = "Bronze"
    }
    else if(saldoVitorias>= 21 && vitorias <=50){
        nivel = "Prata"
    }
    else if(saldoVitorias>= 51 && vitorias <=80){
        nivel = "Ouro"
    }    
    else if(saldoVitorias>= 81 && vitorias <=90){
        nivel = "Diamante"
    }
    else if(saldoVitorias>= 91 && vitorias <=100){
        nivel = "Lendario"
    } 
    else {
        nivel = "iMortal"
    }   

    //exibe a mensagem final contendo a quantidade de vitorias a mais que derrotas e o Elo do jogador:
    return `O saldo de vitorias do Heroi e de: ${saldoVitorias} e por isto esta no Elo: ${nivel}`

}


let resultado = calcularElo(200,1)
console.log(resultado)

