// //ARENA 3x3
// const grupo = {
//     jogador1: "", //nome
//     jogador2: "",
//     jogador3: "",
//     dano: "",   //quantidade 
//     sup: "", 
//     tank: "" };
const jogadoresPareando = [
    {
        id: 1,
        nome: "AB",
        classe: "dano",
        telefone: 88    
    },
    {
        id: 2,
        nome: "CD",
        classe: "dano",
        telefone: 77
    },
    {
        id: 3,
        nome: "EF",
        classe: "dano",
        telefone: 66
    },
    {
        id: 4,
        nome: "GH",
        classe: "dano",
        telefone: 11
    },
    {
        id: 5,
        nome: "IJ",
        classe: "dano",
        telefone: 85
    },
    {
        id: 6,
        nome: "KL",
        classe: "tank",
        telefone: 21
    },
]

const gruposPareando  = [
    {
        id: 1,
        nome: "Grupo 1",
        jogador1: "",
        jogador2: "",
        jogador3: "",
    },
    {
        id: 2,
        nome: "Grupo 2",
        jogador1: "",
        jogador2: "",
        jogador3: "",
    }
]
const gruposAux  = [[],[]];

//salvar grupo.classe também, talvez em um vetor de string e ir comparando sempre se ja existe
function criandoGrupo(jogadores, grupos){
    grupos[0] = jogadores[0];
    // console.log(grupos);
    for(let i=0; i<jogadores.length-1; i++){
        if((grupos[0].length == 3) && (grupos[1].length == 3)){
            break;
        }    
        if(grupos[0].classe === jogadores[i+1].classe){
            if(grupos[1].length<3){
                grupos[1].push(jogadores[i+1]);
                console.log("grupo2-length: ",grupos[1].length);
            } else if(grupos[0].length<3){
                grupos[0].push(jogadores[i+1]);
                console.log("grupo1-length: ",grupos[1].length);
            }            
        }
        else{
            let rand = parseInt(Math.random()*100); 
                   
            if (rand < 50){
                // grupos[0].unshift(jogadores[i+1]);
                if(grupos[0].length<3){
                    grupos[1].push(jogadores[i+1]);
                    // console.log("grupo1-length: ",grupos[0].length);
                } else if(grupos[1].length<3){
                    grupos[1].push(jogadores[i+1]);
                    // console.log("grupo2-length: ",grupos[1].length);
                } 
            } else {
                if(grupos[1].length<3){
                    grupos[1].push(jogadores[i+1]);
                    // console.log("grupo2-length: ",grupos[1].length);
                } else if(grupos[0].length<3){
                    grupos[0].push(jogadores[i+1]);
                    // console.log("grupo1-length: ",grupos[1].length);
                } 
                // console.log("grupo 2: ",grupos[1]);            
            }
        }
    }
    
}
 
criandoGrupo(jogadoresPareando, gruposAux);
console.log(gruposAux);
// function Grupo(conta1, conta2, conta3){
//     this.jogador1 = conta1.nome;
//     this.jogador2 = conta2.nome;
//     this.jogador3 = conta3.nome;

//     let Qtddano = parseInt(conta1.dano + conta2.dano + conta3.dano);
//     let Qtdsup = parseInt(conta1.sup + conta2.sup + conta3.sup);
//     let Qtdtank = parseInt(conta1.tank + conta2.tank + conta3.tank);

//     console.log(conta1.dano); 
// }
    
// function Pareamento(jogador1, jogador2, jogador3, jogador4, jogador5, jogador6){
//     let grupo1 = new Grupo(jogador1,"","");    
//     let grupo2 = new Grupo("","","");
//     // console.log("grupo 1:",grupo1);
//     console.log('g1: ', grupo1.jogador1.classe);
//     // console.log('g2: ', grupo2.jogador1.classe);

//     if (grupo1.jogador1.classe === jogador2.classe) {          //jogador1 tem a mesma classe do jogador2?
//         grupo2 = new Grupo(jogador2,"","");
//     } else {
//         let rand = parseInt(Math.random()*100);        
//         if (rand < 50){
//             grupo1 = new Grupo(jogador1,jogador2,"");
//             // console.log("grupo 1:",grupo1);
//         } else {
//             grupo2 = new Grupo(jogador2,"","");
//             // console.log("grupo 2:",grupo2);            
//         }           
//     }    
      
        
// }

// // function ConverteClasse(classe){
// //     this.classe = classe;    
// //     switch (this.classe) {
// //         case 'dano':
// //             this.classe = '1'; //corresponde a classe de dano   
// //             return this.classe;         
// //         case 'sup':
// //             this.classe = '2'; //corresponde a classe de sup   
// //             return this.classe;         
// //         case 'tank':
// //             this.classe = '3'; //corresponde a classe de tank           
// //             return this.classe;
// //         default:
// //             this.classe = '0'; //não corresponde a nenhuma classe 
// //             return console.log("erou!");
// //     }    
// // }
// function Conta(nome, classe, dano, sup, tank){
//     this.nome = nome;
//     this.classe = classe;
//     this.dano = 0;
//     this.sup = 0;
//     this.tank = 0;
//     switch (this.classe) {
//         case 'dano':
//             this.dano = 1;     //corresponde a classe de dano   
//             break;         
//         case 'sup':
//             this.sup = 1;      //corresponde a classe de sup   
//             break;
//         case 'tank':
//             this.tank = 1;     //corresponde a classe de tank           
//             break;
//         default:
//             console.log("Erou!"); //não corresponde a nenhuma classe 
//             break;
//     }    
// }
// const player1 = new Conta('userAB', 'dano', '0', '0', '0');
// const player2 = new Conta('userCD', 'tank', '0', '0', '0');
// const player3 = new Conta('userEF', 'dano', '0', '0', '0');
// const player4 = new Conta('userGH', 'sup', '0', '0', '0');
// const player5 = new Conta('userIJ', 'sup', '0', '0', '0');
// const player6 = new Conta('userKL', 'tank', '0', '0', '0');

// // console.log(player1.classe);
// const resultado = Pareamento(player1, player2, player3, player4, player5, player6);
