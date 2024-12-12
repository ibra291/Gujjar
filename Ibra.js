//visibilità globale cioè in tutte le partri del codice
{
    var miaVariabile = 80;
}


//visibilità di blocco
{
    let miaVariabile = 67;
    console.log("Dichiarata con il let: " + miaVariabile);
}
    

console.log("Dichiarata con var: " + miaVariabile); //ma vamos

//-------------------------------------------
//una variabile dichiarata con let può essere riassegnata
let esempio1 = 30;

console.log("esempio1= " + esempio1);

esempio1 = "castagne";

console.log("esempio1= " + esempio1);


//con const non può essere riassegnata(tranne per alcuni casi specificati)
const esempio2 = 7;
console.log("esempio2= " + esempio2) //ok

esempio2 = "Ananas";
console.log("esempio2= " + esempio2) //errore