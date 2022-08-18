let listeProduits =  [];
let listeClients = [];
let listeCommandes = [];
listeCommandes = tabCommandes['Source Data'];
/*let listeTotal = [{"id":0,"valeur":"Tous"},{"id":1,"valeur":"1"},{"id":2,"valeur":"2"},
                  {"id":3,"valeur":"3"},{"id":4,"valeur":"4"}
                 ];*/

let listeTotal = ["Tous","1","2","3","4"];

let chargerTab = () => {
    for(let commande of listeCommandes){
        
        if(listeProduits.indexOf(commande.Product) == -1){
            listeProduits.push(commande.Product);
        }
        
        if(listeClients.indexOf(commande.Customer) == -1){
            listeClients.push(commande.Customer);
        }
    }

}
let chargerCommandes = () => {
    
    chargerTab();
    let selProduits = document.getElementById('selProduits');
    let selClients = document.getElementById('selClients');
    let selTotal = document.getElementById('selTotal');
    for(let produit of listeProduits){
            selProduits.options[selProduits.options.length] = new Option(produit);
    }
    for(let client of listeClients){
        selClients.options[selClients.options.length] = new Option(client);
    }
    for(let val of listeTotal){
        selTotal.options[selTotal.options.length] = new Option(val);    
    }
    
    document.getElementById('contenu').innerHTML = listerCommandes(listeCommandes);
   
}
let clickProduits = () => {
    document.getElementById('contenu').innerHTML = listerCommandes(listeCommandes);

}
let changerProduit = () => {
    chargerTab();
    let selProduits = document.getElementById('selProduits');
    let produitChoisi = listeProduits[selProduits.selectedIndex];
    document.getElementById('contenu').innerHTML= listerCommandes(listerUnCle('Product',produitChoisi));


}
let changerTotal = () => {
    let selTotal = document.getElementById('selTotal');
    let totalChoisi = listeTotal[selTotal.selectedIndex];

    if(totalChoisi == 'Tous'){
        document.getElementById('contenu').innerHTML = listerCommandes(listeCommandes);

    }else{
        totalChoisi = 'Qtr ' + totalChoisi;
        document.getElementById('contenu').innerHTML= listerCommandes(listerUnCle(totalChoisi,'totalChoisi'));

    }
}
let changerClient = () => {
    chargerTab();
    let selClients = document.getElementById('selClients');
    let clientChoisi = listeClients[selClients.selectedIndex];
    document.getElementById('contenu').innerHTML= listerCommandes(listerUnCle('Customer',clientChoisi));


}

let listerUnCle = (cle,valeur) => {
    let listeCle = [];
    listeCommandes.forEach(unCommande => {
        if(unCommande[cle]==valeur){
            listeCle.push(unCommande);
        }else if(valeur == 'totalChoisi'){
            if(unCommande[cle]!=undefined){
                listeCle.push(unCommande);
            }
        }

    });
    return listeCle;
}

let entete = () => {
        let contenuTable = `
        <div id='divLst'>
        <i class="bi bi-file-excel" onClick="$('#divLst').toggle();"></i>   
        <table class="table table-primary table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">CILENT</th>
                <th scope="col">PRODUIT</th>
                <th scope="col">Qrt1</th>
                <th scope="col">Qrt2</th>
                <th scope="col">Qrt3</th>
                <th scope="col">Qrt4</th>
            </tr>
            </thead>
         
            <tbody>
            `;
            return contenuTable;
    
}
let calculerUnTotal = (no) => {
    let total = 'Qtr ' + no;
    let somme=0;
    for(let commande of listeCommandes){
        let montant = commande[total]
        if(montant != undefined){
            montant = replace()
        }
    }
}
let listerCommandes = (liste) =>{
    let contenuTable = entete();
        liste.forEach(unCommande =>{
            contenuTable += `
            <tr>
                <td>${unCommande.Customer}</td>
                <td>${unCommande.Product}</td>
        `;    
            if(unCommande['Qtr 1'] != undefined){
                contenuTable+=`
                <td>${unCommande['Qtr 1']}</td>

                `;
            } else{
                contenuTable+=`
                <td></td>
                `;
            }

            if(unCommande['Qtr 2'] != undefined){
                contenuTable+=`
                <td>${unCommande['Qtr 2']}</td>

                `;
            } else{
                contenuTable+=`
                <td></td>
                `;
            }
            if(unCommande['Qtr 3'] != undefined){
                contenuTable+=`
                <td>${unCommande['Qtr 3']}</td>

                `;
            } else{
                contenuTable+=`
                <td></td>
                `;
            }
            if(unCommande['Qtr 4'] != undefined){
                contenuTable+=`
                <td>${unCommande['Qtr 4']}</td>

                `;
            } else{
                contenuTable+=`
                <td></td>
                `;
            }



            contenuTable +=
        `    
            </tr>
        `;        
        });
    contenuTable += `
    </tbody>    

    </table>
    </div>
    `;
    return contenuTable;
}
