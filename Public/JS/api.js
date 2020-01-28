function test(){


    var apiUrl = "https://slack.com/api/chat.postMessage";
    var token = creds.token;
    var channel = "api-slack";
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var mail = document.getElementById('mail').value;
    var objet = document.getElementById('objet').value;
    var message = document.getElementById('message').value;
    
    
     $.ajax({                   
        data: {
            "token": token,
            "channel": channel,
            "text": nom + " " + prenom + " " + mail + " " + objet + " " + message + " ",
            
            
        },                      
        dataType: 'text',
        type: 'POST',           
        url: apiUrl,
        error: function(xhr,status,error){              
            console.log("error: " + error);
        },
        success: function(data) {
            console.log("result: " + data);
        }
    })
    };