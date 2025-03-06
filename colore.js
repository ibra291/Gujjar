const bottoneColore = document.getElementById("bottone-colore");
const contenitore = document.getElementById("Box");

function cambiaColore(){
    let dado = Math.floor(Math.random()*6;

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
    else if(dado=== 3){
        colore = "pink";
    }  
    else if(dado === 4){
        colore = "blac";
    } 
    else if(dado === 5){
        colore = "purple";
    }  

    return colore;
    
}


console.log(cambiaColore());

bottoneColore.addEventListener("click",function(){

    contenitore.style.background = cambiaColore();

})