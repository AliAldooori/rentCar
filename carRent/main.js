$(document).ready(function(){

$('#loggin').click(function(){
$('#loggin').addClass('hide')
$('#cars').show()
$('#bocking').show()
$('#loggout').show()

$('.view').load("/carRent/loggin/loggin.html"), 
function(responseTxt , statusTxt , xhr){
    if (statusTxt == "success") {
        alert("External content loaded successfully!")
        if (statusTxt == "error") 
        alert("Error: "+ xhr.status + ": " + xhr.statusText) 
        
    }
}
})
$('#loggout').click(function(){

$('.view').load("/carRent/index.html .view"), 
function(responseTxt , statusTxt , xhr){
    if (statusTxt == "success") {
        alert("External content loaded successfully!")
        if (statusTxt == "error") 
        alert("Error: "+ xhr.status + ": " + xhr.statusText) 
        
    }
}
})

$('#cars').click(function(){
    
$('.view').load("/carRent/carList/carList.html"), 
function(responseTxt , statusTxt , xhr){
    if (statusTxt == "success") {
        alert("External content loaded successfully!")
    if (statusTxt == "error") 
       alert("Error: "+ xhr.status + ": " + xhr.statusText) 
     
    }
}})
$('.img button').click(function(){
    $(this).css("color","red")
$('.view').load("/carRent/bocking/bocking.html"), 
function(responseTxt , statusTxt , xhr){
    if (statusTxt == "success") {
        alert("External content loaded successfully!")
    if (statusTxt == "error") 
       alert("Error: "+ xhr.status + ": " + xhr.statusText) 
     
    }
}})

})
 $('#cars').click(function(){
   
    console.log( getAllCars());
 }) 




const getAllCars = async ()=>{
    await fetch('http://localhost:8085/api/v1/cars', {
        method:'GET',
        headers:{
            'authorization': 'Bearer ' + localStorage.getItem('aliToken'),
            'accept': '*/*',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }).then(async(response)=>{
        console.log(response);
        if (response.status === 403) {
            console.log('Unauthorized');
        }
        if (response.status === 401) {
            console.log('You need to log in first');
        }
        const result = await response.json()
        console.log(result);
        if (response.status === 302) {
            showIt(result)
        }
    }).catch((err)=>{
        console.log(err);
    })
}