if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(ref=>console.log('Exito',reg))
    .catch(err=>console.warn('Error'))
}