import validator from './validator.js'; 
//input para insertar número de tarjeta
let botonValidar = document.getElementById("botonValidar");
botonValidar.addEventListener('click', function(){

    let numeroTarjeta = document.getElementById('numeroTarjeta').value;
    console.log(validator.isValid(numeroTarjeta))
//
//    console.log(numeroTarjeta);


}
)
