let basculerVisibilteModal = (idModal, etatFR) => {
    let idModalJQ = "#"+idModal;
    let etatEN = (etatFR == 'montrer')?'show':'hide';
    $(idModalJQ).modal(etatEN);  
  }
  let retour = () => {
    window.open("../index.html");
 }
 /*
 let listerProduits = (listeProduits,no) =>{
  let contenuTable = `
  <div id='divLst'>
  <i class="bi bi-file-excel" onClick="$('#divLst').toggle();"></i>   
  <table class="table table-primary table-striped table-hover">
      <thead>
          <tr>
          <th scope="col">CLIENT</th>
          <th scope="col">PRODUIT</th>
          <th scope="col">TOTAL1</th>
          <th scope="col">TOTAL2</th>
          <th scope="col">TOTAL3</th>
          <th scope="col">TOTAL4</th>
      </tr>
      </thead>
   
      <tbody>
      `;

      listeProduits.forEach(unProduit =>{

          let total = 'Qtr ' + no;
          if(unProduit[total] != null) {
              if(no=='1'){
                      contenuTable += `
                      <tr>
                      <td>${unProduit.Customer}</td>
                      <td>${unProduit.Product}</td>
                      <td>${unProduit[total]}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      </tr>
                                  
                      `; 
                      if(no=='2'){
                          contenuTable += `
                          <tr>
                          <td>${unProduit.Customer}</td>
                          <td>${unProduit.Product}</td>
                          <td></td>
                          <td>${unProduit[total]}</td>
                          <td></td>
                          <td></td>
                          </tr>
                                      
                          `;
                          if(no=='3'){
                              contenuTable += `
                              <tr>
                              <td>${unProduit.Customer}</td>
                              <td>${unProduit.Product}</td>
                              <td></td>
                              <td></td>
                              <td>${unProduit[total]}</td>
                              <td></td>
                              </tr>
                                          
                              `; 
                              if(no=='4'){
                                  contenuTable += `
                                  <tr>
                                  <td>${unProduit.Customer}</td>
                                  <td>${unProduit.Product}</td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td>${unProduit[total]}</td>
                                  </tr>
                                              
                                  `; 
                          }        
          
                      }        
       
                          
                  }        
  
              }        
      }     
      });
  
  contenuTable += `
  </tbody>    

  </table>
  </div>
  `;
  return contenuTable;
}

*/ 
