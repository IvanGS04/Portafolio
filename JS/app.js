if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./serviceWorker.js')
    .then(registrado=> console.log("el service worker se registro",
    registrado))
    .catch(error=>console.log("error al registrar el service worker",
    error));
}else{ 
    console.log("El service worker no es compatible")
}