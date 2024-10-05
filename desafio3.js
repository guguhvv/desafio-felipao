class heroi {
    constructor(nome,idade,tipo){
        
        this.nome=nome
        this.idade=idade
        this.tipo=tipo

    }

    atacar(){

        let ataque

            switch(this.tipo.toLowerCase()){

                case "mago":
                    ataque = "Magia"
                    break
                
                case 'guerreiro':
                    ataque = "Espadada"
                    break

                case "monge":
                    ataque = "Artes Marcias"
                    break
                   
                case "ninja":
                    ataque = "Usou um ninjtsu"
                    break

                default:
                    ataque = "Classe informada não presente no Jogo"

                    


            }
            
        if(ataque==="Classe informada não presente no Jogo"){
            console.log(ataque)
        }
        else{
            console.log(`O ${this.tipo}, cujo nome e: ${this.nome} atacou usando ${ataque}`)
        }

    }

}

let Heroi1 = new heroi("Veigar",333,"Mago")
Heroi1.atacar()

let Heroi2 = new heroi("Lee Sin",33,"Monge")
Heroi2.atacar() 