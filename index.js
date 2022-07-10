import validator from './validator.js'; 
//input para insertar número de tarjeta
let botonValidar = document.getElementById("botonValidar");
let numeroTarjeta = document.getElementById("numeroTarjeta");

botonValidar.addEventListener('click', function(){
    if ((numeroTarjeta.value.length>=1)&&(validator.isValid(numeroTarjeta.value))){
        //alert("La tarjeta de crédito es válida");
        document.getElementById("bloqueValido").style.display = "block";
    }
    else if ((numeroTarjeta.value.length>=1)&&(validator.isValid(numeroTarjeta.value)==false)){
        //alert("La tarjeta de credito no es valida");
        document.getElementById("bloqueNoValido").style.display = "block";

    }
    
   
   let resMaskify = validator.maskify(numeroTarjeta.value)
  //console.log(resMaskify, numeroTarjeta.value);
   numeroTarjeta.value = resMaskify;

    
})

//console.log(validator.maskify(numeroTarjeta))

//document.querySelector('#primer-pregunta').style.display = 'none';