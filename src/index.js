import validator from './validator.js'; 
//input para insertar número de tarjeta
let botonValidar = document.getElementById("botonValidar");
let numeroTarjeta = document.getElementById("numeroTarjeta");

botonValidar.addEventListener('click', function(){
    if (validator.isValid(numeroTarjeta.value)){
        alert("La tarjeta de crédito es válida"); 
    } else{ (validator.isValid(numeroTarjeta.value)==false) 
        alert("La tarjeta de credito no es valida")
    }
    
   
   let resMaskify = validator.maskify(numeroTarjeta.value)
  //console.log(resMaskify, numeroTarjeta.value);
   numeroTarjeta.value = resMaskify;
    
})

//console.log(validator.maskify(numeroTarjeta))
