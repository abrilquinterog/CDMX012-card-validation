const validator = { 
    isValid: function(numeroTarjeta){
        let digitosTarjetaReversa = numeroTarjeta.split('').reverse(); //para crear un array con el número ingresado
        //console.log(digitosTarjetaReversa);
        //console.log(numeroTarjeta);
        let sumaFinal=0;
    
        // Recorrer el array para convertir string en números.
        for (let indice = 0; indice < digitosTarjetaReversa.length; indice++) {
              digitosTarjetaReversa[indice] = parseInt(digitosTarjetaReversa[indice]);   
              //console.log(digitosTarjetaReversa[indice]);
        }
        // Recorrer el array por segunda vez multiplicar las posiciones indicadas por Luhn, a partir de 1 de dos en dos.
        for (let indice2 = 1; indice2 < digitosTarjetaReversa.length; indice2 += 2) {
            digitosTarjetaReversa[indice2]=digitosTarjetaReversa[indice2]*2;
            //console.log(digitosTarjetaReversa); 
        }
        // Recorrer el array por tercera vez para identificar si existen difitos mayores a 10 para simplificarlos a un dígito.
        for (let indice3 = 1; indice3<digitosTarjetaReversa.length; indice3 +=2) {
            if (digitosTarjetaReversa[indice3] >= 10){
                digitosTarjetaReversa[indice3] -= 9;
            }
                //console.log(digitosTarjetaReversa);
        }
         // Recorrer el array por cuarta vez para sumar todos los números del array.
         for (let s=0; s<digitosTarjetaReversa.length; s++){
             sumaFinal= sumaFinal + digitosTarjetaReversa[s];
            // console.log(sumaFinal);
         }
         if (sumaFinal%10 ==0){
             return true} 
             else {
                 return false
         }

    },

    
        maskify: function (numeroTarjeta) {
            let arregloCalNumber = numeroTarjeta.split('')
            let arregloVacio = ''
           
          //console.log(arregloCalNumber);
           for (let i=0; i<arregloCalNumber.length; i++){
            if(i < arregloCalNumber.length-4){
                arregloVacio += '#'
            }else {
                arregloVacio += arregloCalNumber[i]
            }
           
        }
        return arregloVacio;
      }

    
  
};

export default validator;
