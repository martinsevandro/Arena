// //ARENA 3x3
// const grupo = {
//     jogador1: "", //nome
//     jogador2: "",
//     jogador3: "",
//     dano: "",   //quantidade 
//     sup: "", 
//     tank: "" };
 
function Grupo(conta1, conta2, conta3){
    this.jogador1 = conta1.nome;
    this.jogador2 = conta2.nome;
    this.jogador3 = conta3.nome;
    // this.dano = conta1.newClasseConvertida + conta2.newClasseConvertida + conta3.newClasseConvertida;
    // this.sup = conta1.newClasseConvertida + conta2.newClasseConvertida + conta3.newClasseConvertida;
    // this.tank = conta1.newClasseConvertida + conta2.newClasseConvertida + conta3.newClasseConvertida;
}
    
function Pareamento(conta1, conta2, conta3, conta4, conta5, conta6){
    let grupo1 = new Grupo(conta1,"","");    
    let grupo2 = new Grupo("","","");
    // console.log("grupo 1:",grupo1);
    console.log('c1:',conta1.classe);
    console.log('c2:',conta2.classe);

    if (conta1.classe === conta2.classe) {
        grupo2 = new Grupo(conta2,"","");
    } else {
        let rand = parseInt(Math.random()*100);
        // console.log(rand);
        if (rand < 50){
            grupo1 = new Grupo(conta1,conta2,"");
            // console.log("grupo 1:",grupo1);

            if ((conta1.classe === conta3.classe) || conta2.classe === conta3.classe){
                grupo2 = new Grupo(conta3,"","");
                // console.log("grupo 2:",grupo2);                
            }
        } else {
            grupo2 = new Grupo(conta2,"","");
            // console.log("grupo 2:",grupo2);            
        }           
    }
    
    // let rand = parseInt(Math.random()*100);
    // console.log(rand);
    // if (rand < 50){
    //     grupo1 = new Grupo(conta1,conta2,conta3);
    //     console.log("grupo 1:",grupo1);
    // } else {
    //     grupo2 = new Grupo(conta2,conta3,"");
    //     console.log("grupo 2:",grupo2);
    // }

    // grupo1 = new Grupo(conta1, conta2, conta3);
    // grupo2 = new Grupo(conta4, conta5, conta6);
}

function ConverteClasse(classe){
    this.classe = classe;    
    switch (this.classe) {
        case 'dano':
            this.classe = '1'; //corresponde a classe de dano   
            return this.classe;         
        case 'sup':
            this.classe = '2'; //corresponde a classe de sup   
            return this.classe;         
        case 'tank':
            this.classe = '3'; //corresponde a classe de tank           
            return this.classe;
        default:
            this.classe = '0'; //não corresponde a nenhuma classe 
            return console.log("erou!");
    }    
}
function Conta(nome, classe){
    this.nome = nome;
    this.classe = classe;
    const newClasseConvertida = new ConverteClasse(classe);    //1dano 2sup ou 3tank
    // console.log(newClasseConvertida);
    // this.classe = newClasseConvertida;
}
const player1 = new Conta('userAB', 'dano');
const player2 = new Conta('userCD', 'tank');
const player3 = new Conta('userEF', 'dano');
const player4 = new Conta('userGH', 'sup');
const player5 = new Conta('userIJ', 'sup');
const player6 = new Conta('userKL', 'tank');

console.log(player1);
const resultado = Pareamento(player1, player2, player3, player4, player5, player6);
