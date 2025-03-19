const bottoneColore = document.getElementById("bottone-colore");
const contenitore = document.getElementById("box");



function cambiaColore(){
    let dado = Math.floor(Math.random()*6);

    let colore = "white";

    if(dado === 0){
        colore = "red";
    }
    else if(dado === 1){
        colore = "green";
    }
    else if(dado === 2){
        colore = "blue";
    }
    else if(dado === 3){
        colore = "pink";
    }
    else if(dado === 4){
        colore = "black";
    }
    else if(dado === 5){
        colore = "brown";
    }

    return colore;

}


console.log(cambiaColore());


bottoneColore.addEventListener("click",function(){

    contenitore.style.background = cambiaColore();

})


const bottoneMargine = document.getElementById("bottone-margine");


function cambiaMargine(){
    let dado = Math.floor(Math.random()*6);

    let margine = "0%";

    if(dado === 0){
        margine = "1%";
    }
    else if(dado === 1){
        margine = "2%";
    }
    else if(dado === 2){
        margine = "3%";
    }
    else if(dado === 3){
        margine = "4%";
    }
    else if(dado === 4){
        margine = "5%";
    }
    else if(dado === 5){
        margine = "10%";
    }

    return margine;

}


bottoneMargine.addEventListener("click",function(){

    contenitore.style.margin = cambiaMargine();

})


//aggiugere una funzione simile alle precendenti per modificare il colore del testo (contenitore.style.color)
