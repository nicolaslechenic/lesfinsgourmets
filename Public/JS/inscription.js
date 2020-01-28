// let formValid = document.getElementById('bouton_envoie');
//        let forgetlastname = document.getElementById('forgetlastname');
//        let forgetfirstname = document.getElementById('forgetfirstname');
//        let forgetmail = document.getElementById('forgetmail');
//        let forgetpassword = document.getElementById('forgetpassword');
//        let forgetconfirmpassword = document.getElementById('forgetconfirmpassword');



//        formValid.addEventListener('click', function(event) {
//         event.preventDefault();
//         let nom = document.getElementById('nom').value;
//         let prenom = document.getElementById('prenom').value;
//         let mail = document.getElementById('mail').value;
//         let password = document.getElementById('password').value;
//         let confirm = document.getElementById('confirm').value;

//           if (nom === "") {
//             forgetlastname.innerText = 'Nom Manquant';
//             forgetlastname.style.color = 'red';  
//           }

//           if (prenom === "") {
//             forgetfirstname.innerText = 'Prénom Manquant';
//             forgetfirstname.style.color = 'red';  
//           }

//           if (mail === "") {
//             forgetmail.innerText = 'Email Manquant';
//             forgetmail.style.color = 'red';  
//           }

//           if (password === "") {
//             forgetpassword.innerText = 'Mot de Passe Manquant';
//             forgetpassword.style.color = 'red';  
//           }

//           if (confirm === "") {
//             forgetconfirmpassword.innerText = 'Confirmation Manquante';
//             forgetconfirmpassword.style.color = 'red';  
//           }


//            console.log(nom);
//            console.log(prenom);
//            console.log(mail);
//            console.log(password);
//            console.log(confirm);

//         });

//            function validation(event){
//             //Si le champs est vide 
//             if (nom.validity.valueMissing){
//                 forgetlastname.innerText = 'Nom Manquant';
//                 forgetlastname.style.color = 'red';
//             }
//            };
    
//            function validation(event){
//             //Si le champs est vide 
//             if (prenom.validity.valueMissing){
//                 forgetfirstname.innerText = 'Prénom Manquant';
//                 forgetfirstname.style.color = 'red';
//             }
//            };
    
//            function validation(event){
//             //Si le champs est vide 
//             if (mail.validity.valueMissing){
//                 forgetmail.innerText = 'Email Manquant';
//                 forgetmail.style.color = 'red';
//             }
//            };

//            function validation(event){
//             //Si le champs est vide 
//             if (password.validity.valueMissing){
//                 forgetpassword.innerText = 'Mot de Passe Manquant';
//                 forgetpassword.style.color = 'red';
//             }
//            };
    
//            function validation(event){
//             //Si le champs est vide 
//             if (confirm.validity.valueMissing){
//                 forgetconfirmpassword.innerText = 'Confirmation Manquante';
//                 forgetconfirmpassword.style.color = 'red';
//             }
//            };
