const bottoneAggiungi = document.getElementById('bottone-aggiungi')
const lista = document.getElementById('miaLista')
const bottoneSvuota = document.getElementById('svuota');


console.log(lista.children.length);

//al click del mouse attiva la funzione anomina
bottoneAggiungi.addEventListener('click', function () {

    const userInput = prompt("inserisci il testo");
    const nuovoElemento = document.createElement('li');
    const iconaCestino = document.createElement('span')

    nuovoElemento.textContent = userInput;
    iconaCestino.textContent = "🗑️"
    iconaCestino

    
}



)


bottoneTogli.addEventListener('click', function () {
    
    lista.lastElementChild.remove();
}

)
