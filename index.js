let NomeHeroi = "Gekko";
let NivelDoHeroi = 1500;
let EloHeroi;

let Mensagem; 

if (NivelDoHeroi <= 1000) {
    EloHeroi = "Ferro";
} else if (NivelDoHeroi >= 1001 && NivelDoHeroi <= 2000) {
    EloHeroi = "Bronze";
} else if (NivelDoHeroi >= 2001 && NivelDoHeroi <= 5000) {
    EloHeroi = "Prata";
} else if (NivelDoHeroi >= 6001 && NivelDoHeroi <= 7000) {
    EloHeroi = "Ouro";
} else if (NivelDoHeroi >= 7001 && NivelDoHeroi <= 8000) {
    EloHeroi = "Platina";
} else if (NivelDoHeroi >= 8001 && NivelDoHeroi <= 9000) {
    EloHeroi = "Ascendente";
} else if (NivelDoHeroi >= 9001 && NivelDoHeroi <= 10000) {
    EloHeroi = "Ascendente";
} else if (NivelDoHeroi <= 10001) {
    EloHeroi = "Radiante";
}

Mensagem = "O herói de Nome: " + NomeHeroi + " está no ELO: " + EloHeroi;
console.log(Mensagem);



