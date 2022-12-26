

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