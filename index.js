// //ARENA 3x3
const jogadoresPareando = [
    {
        id: 1,
        nome: "AB",
        classe: "tank",
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
        classe: "tank",
        telefone: 11
    },
    {
        id: 5,
        nome: "IJ",
        classe: "tank",
        telefone: 85
    },
    {
        id: 6,
        nome: "KL",
        classe: "sup",
        telefone: 21
    },
]

const time1 = [];
const time2 = [];

function criandoTime(jogadoresPareando, time1, time2){
    const jogadoresDano = [];
    const jogadoresSup = [];
    const jogadoresTank = [];
    
    //mapeando as classes e colocando a info completa nos vetores acima
    for(let i=0; i<jogadoresPareando.length; i++){    
        if(jogadoresPareando[i].classe === "dano"){
            jogadoresDano.push(jogadoresPareando[i]);        
        }   
        if(jogadoresPareando[i].classe === "sup"){
            jogadoresSup.push(jogadoresPareando[i]);
        }
        if(jogadoresPareando[i].classe === "tank"){
            jogadoresTank.push(jogadoresPareando[i]);
        }
    }
    
    //exibir a qtd inicial de cada classe
    console.log("qtd de cada classe: \ndano: ", jogadoresDano.length,"  sup:",  jogadoresSup.length,"  tank:", jogadoresTank.length);
    
    if(jogadoresDano  ==  "")   console.log("Não possui classe de dano na fila")
    if(jogadoresSup   ==  "")   console.log("Não possui classe de sup na fila")
    if(jogadoresTank  ==  "")   console.log("Não possui classe de tank na fila")
   
    //preenchendo time1:
    for(let i=0; i<jogadoresPareando.length;  i++){
        if(time1.length < 3){
            if(jogadoresDano  !=  ""){
                time1.push(jogadoresDano[0]);
                jogadoresDano.shift();
            }
            if(time1.length == 3) break; 
            if(jogadoresSup  !=  ""){
                time1.push(jogadoresSup[0]);
                jogadoresSup.shift();
            }
            if(time1.length == 3) break; 
            if(jogadoresTank  !=  ""){
                time1.push(jogadoresTank[0]);
                jogadoresTank.shift();
            }
        }        
    }
    //preenchendo time2:
    for(let i=0; i<jogadoresPareando.length;  i++){
        if(time2.length < 3){
            if(jogadoresDano  !=  ""){
                time2.push(jogadoresDano[0]);
                jogadoresDano.shift();
            }
            if(time2.length == 3) break; 
            if(jogadoresSup  !=  ""){
                time2.push(jogadoresSup[0]);
                jogadoresSup.shift();
            }
            if(time2.length == 3) break; 
            if(jogadoresTank  !=  ""){
                time2.push(jogadoresTank[0]);
                jogadoresTank.shift();        
            }
        }        
    }
}
criandoTime(jogadoresPareando, time1, time2);

console.log("----------*---------------------*---------------------*-----------\n");
console.log("Time1:",time1);
console.log("Time2:",time2);
