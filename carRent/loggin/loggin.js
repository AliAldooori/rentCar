import { getToken } from "./carRent/loggin/token.js"
    
$('.submit').css("color","red")

    $('.submit').click( async function () {
        
        
        
        let username = $("#username").val()
        let password = $('#pass').val()
        
        await getToken(username, password).then((res)=>{
            if(res.success === true){
                // logInSuccess()
                console.log('done');
            }else console.log('not connect');
        })
    })
    