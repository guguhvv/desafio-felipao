class heroi {
    constructor(nome,idade,tipo){
        
        this.nome=nome
        this.idade=idade
        this.tipo=tipo

    }

    atacar(){

        let ataque
        let arma

            switch(this.tipo.toLowerCase()){

                case "mago":
                    ataque = "Magias"
                    arma="Recebeu Cajado"
                    break
                
                case 'guerreiro':
                    ataque = "Espadadas"
                    arma="Recebeu Espada"
                    break

                case "monge":
                    ataque = "Artes Marcias"
                    arma = "Aprende artes marciais"
                    break
                   
                case "ninja":
                    ataque = "ninjtsus e shurikens"
                    arma ="Aprende a arte ninja"
                    break

                default:
                    ataque = "Classe informada não presente no Jogo"

                    


            }
            
        if(ataque==="Classe informada não presente no Jogo"){
            console.log(ataque)
        }
        else{
            console.log(`Ola Heroi: ${this.nome}, ao selecionar a Classe: ${this.tipo} Voce ${arma} e seus ataque são : ${ataque}`)
        }

    }


}

let Heroi1 = new heroi("Veigar",333,"Mago")
Heroi1.atacar()

let Heroi2 = new heroi("Lee Sin",33,"Monge")
Heroi2.atacar() 