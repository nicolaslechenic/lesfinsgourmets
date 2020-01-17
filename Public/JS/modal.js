let connectValid = document.getElementById('bouton_envoieConnect');
       //------POUR LE NOM-----------
       let lastNameConnect = document.getElementById('lastNameConnect');
       let forgetNameConnect = document.getElementById('forgetLastNameConnect');
       let nomValid = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
        //SERT A DETECTER LE CLIQUE D'UN UTILISATEUR
       connectValid.addEventListener('click', validationNameConnect);


       function validationNameConnect(event) {
         
         if (lastNameConnect.validity.valueMissing) {
           //SERT A VERIFIER DANS LA CONSOLE SI LA FONCTION MARCHE BIEN
           console.log('->valeur vide');
           //SERT A ANNULER LE DECLENCHEMENT SI CELUI CI EST ANNULABLE
           event.preventDefault();
           forgetNameConnect.textContent = 'Nom Manquant';
           forgetNameConnect.style.color = 'red';
           
         } else if (nomValid.test(lastNameConnect.value) == false) {
           console.log('->valeur incorrect');
           event.preventDefault();
           forgetNameConnect.textContent = 'Format incorrect';
           forgetNameConnect.style.color = 'blue';
         } else {
           console.log('->valeur ok');
           forgetNameConnect.textContent = '';
         }
       }


        //------POUR LE PRENOM-----------
        let firstNameConnect = document.getElementById('firstNameConnect');
        let forgetFirstNameConnect = document.getElementById('forgetFirstNameConnect');
        
         //SERT A DETECTER LE CLIQUE D'UN UTILISATEUR
        connectValid.addEventListener('click', validationFirstNameConnect);
 
 
        function validationFirstNameConnect(event) {
          
          if (firstNameConnect.validity.valueMissing) {
            //SERT A VERIFIER DANS LA CONSOLE SI LA FONCTION MARCHE BIEN
            console.log('->valeur vide');
            //SERT A ANNULER LE DECLENCHEMENT SI CELUI CI EST ANNULABLE
            event.preventDefault();
            forgetFirstNameConnect.textContent = 'Prénom Manquant';
            forgetFirstNameConnect.style.color = 'red';
            
          } else if (nomValid.test(firstNameConnect.value) == false) {
            console.log('->valeur incorrect');
            event.preventDefault();
            forgetFirstNameConnect.textContent = 'Format incorrect';
            forgetFirstNameConnect.style.color = 'blue';
          } else {
            console.log('->valeur ok');
            forgetFirstNameConnect.textContent = '';
          }
        }

        //------POUR LE MOT DE PASSE-----------
        let passwordConnect = document.getElementById('passwordConnect');
        let forgetPasswordConnect = document.getElementById('forgetPasswordConnect');
        let passwordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;

        
         //SERT A DETECTER LE CLIQUE D'UN UTILISATEUR
        connectValid.addEventListener('click', validationPasswordConnect);
 
 
        function validationPasswordConnect(event) {
          if (passwordConnect.validity.valueMissing) {
            //SERT A VERIFIER DANS LA CONSOLE SI LA FONCTION MARCHE BIEN
            console.log('->valeur vide');
            //SERT A ANNULER LE DECLENCHEMENT SI CELUI CI EST ANNULABLE
            event.preventDefault();
            forgetPasswordConnect.textContent = 'Mot de Passe Manquant';
            forgetPasswordConnect.style.color = 'red';
            
          
        }
        else if (passwordValid.test(passwordConnect.value) == false) {
          console.log('->valeur incorrect');
          event.preventDefault();
          forgetPasswordConnect.textContent = 'Format incorrect';
          forgetPasswordConnect.style.color = 'blue';
        } 
        else {
          console.log('->valeur ok');
          forgetPasswordConnect.textContent = '';
        }
   }



    //------POUR LE MAIL-----------
    let signValid = document.getElementById ('bouton_envoieSign');
    let mailSign = document.getElementById('mailSign');
    let forgetMailSign = document.getElementById('forgetMailSign');
    let mailValid = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

    
     //SERT A DETECTER LE CLIQUE D'UN UTILISATEUR
    signValid.addEventListener('click', validationMailSign);


    function validationMailSign(event) {
      
      if (mailSign.validity.valueMissing) {
        //SERT A VERIFIER DANS LA CONSOLE SI LA FONCTION MARCHE BIEN
        console.log('->valeur vide');
        //SERT A ANNULER LE DECLENCHEMENT SI CELUI CI EST ANNULABLE
        event.preventDefault();
        forgetMailSign.textContent = 'Email Manquant';
        forgetMailSign.style.color = 'red';
        
      } else if (mailValid.test(mailSign.value) == false) {
        console.log('->valeur incorrect');
        event.preventDefault();
        forgetMailSign.textContent = 'Format incorrect';
        forgetMailSign.style.color = 'blue';
      } else {
        console.log('->valeur ok');
        forgetMailSign.textContent = '';
      }
    }

    //------POUR LE MOT DE PASSE INSCRIPTION-----------
     
      let passwordSign = document.getElementById('passwordSign');
      let forgetPasswordSign = document.getElementById('forgetPasswordSign');
      let passwordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;

    
     //-----SERT A DETECTER LE CLIQUE D'UN UTILISATEUR
     connectValid.addEventListener('click', validationPasswordSign);


     function validationPasswordSign(event) {
       if (passwordSign.validity.valueMissing) {
        //SERT A VERIFIER DANS LA CONSOLE SI LA FONCTION MARCHE BIEN
         console.log('->valeur vide');
        //SERT A ANNULER LE DECLENCHEMENT SI CELUI CI EST ANNULABLE
         event.preventDefault();
         forgetPasswordSign.textContent = 'Mot de Passe Manquant';
         forgetPasswordSign.style.color = 'red';
        
      
     }
     else if (passwordValid.test(passwordSign.value) == false) {
       console.log('->valeur incorrect');
       event.preventDefault();
       forgetPasswordSign.textContent = 'Format incorrect';
       forgetPasswordSign.style.color = 'blue';
    } 
     else {
       console.log('->valeur ok');
       forgetPasswordSign.textContent = '';
      }
  }

   