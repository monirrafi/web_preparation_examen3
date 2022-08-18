let listeProduits =  [];
let listeClients = [];
let listeCommandes = [];
listeCommandes = tabCommandes['Source Data'];
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
let calculerUnTotal = (no) => {
        let somme=0.00;
        let total;
        if(no == 'Tous'){
            for(let i =1;i<5;i++){
                total = 'Qtr ' + i;
                for(let commande of listeCommandes){
                    let montant = commande[total]
                    if(montant != undefined){
                        montant = montant.substring(1);
                        montant = montant.replace(',','');
                        montant = parseFloat(montant);
                        somme += montant;
                        
                    }
                }

            }
            total = 'Tous'
        }else{
            total = 'Qtr ' + no;
            for(let commande of listeCommandes){
                let montant = commande[total]
                if(montant != undefined){
                    montant = montant.substring(1);
                    montant = montant.replace(',','');
                    montant = parseFloat(montant);
                    somme += montant;
                    
                }
            }
        }
        let contenuTable = `
        <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-bg-primary border-primary">
            <h4 class="my-0 fw-normal">Total du ${total}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">${somme.toFixed(2)}<small class="text-muted fw-light"> $</small></h1>
          </div>
        </div>
      </div>
    </div>
            `;
    return contenuTable;

}
let changerTotal = () => {
    let selTotal = document.getElementById('selTotal');
    let totalChoisi = listeTotal[selTotal.selectedIndex];

    if(totalChoisi == 'Tous'){
        document.getElementById('contenu').innerHTML = calculerUnTotal('Tous');//listerCommandes(listeCommandes);

    }else if(totalChoisi == '1'){
        document.getElementById('contenu').innerHTML = calculerUnTotal('1');//listerCommandes(listeCommandes);

    }else if(totalChoisi == '2'){
        document.getElementById('contenu').innerHTML = calculerUnTotal('2');//listerCommandes(listeCommandes);

    }else if(totalChoisi == '3'){
        document.getElementById('contenu').innerHTML = calculerUnTotal('3');//listerCommandes(listeCommandes);

    }else if(totalChoisi == '4'){
        document.getElementById('contenu').innerHTML = calculerUnTotal('4');//listerCommandes(listeCommandes);

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
