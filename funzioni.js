//dichiarazione di funzione

function saluto(tipoDiSaluto,nome){

   console.log(tipoDiSaluto + " " + nome);

}

//chiamata alla funzione

saluto("Ciao", "Pinco");
saluto("Hello", "Zio")
saluto("Vai a quel paese", "prof")
saluto("Ciao bro", "Palla")
saluto("Eeeeeeehh", "Ugo")




function somma(a,b){
    let risultato = a + b;
    console.log("La somma è: " + risultato);
}

somma(20,90);


function sePari(numero){

    if(numero % 2 === 0){
        console.log("il numero è pari")
    }else{
        console.log("il numero è dispari")
    }
}
sePari(5);