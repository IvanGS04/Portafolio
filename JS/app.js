if('serviceWorker' in navigator ){

   
    navigator.serviceWorker.register('./serviceWorker.js')
    .then(registrado => console.log("ServiceWorker registrado", registrado))
    .catch(error =>console.log("error al registrar el servicio", error))


}else{
    console.log("El serviceworker no es compatible");
}