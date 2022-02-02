const validator = { 
    isValid: function(calNumber){
        let digitosTarjetaReversa = calNumber.split('').reverse(); //para crear un array con el número ingresado
        console.log(digitosTarjetaReversa);
        console.log(calNumber);
        let sumaFinal=0;
    
        // Recorrer el array para convertir string en números.
        for (let indice = 0; indice < digitosTarjetaReversa.length; indice++) {
              digitosTarjetaReversa[indice] = parseInt(digitosTarjetaReversa[indice]);   
              //console.log(digitosTarjetaReversa[indice]);
        }
        // Recorrer el array por segunda vez multiplicar las posiciones indicadas por Luhn, a partir de 1 de dos en dos.
        for (let indice2 = 1; indice2 < digitosTarjetaReversa.length; indice2 += 2) {
            digitosTarjetaReversa[indice2]=digitosTarjetaReversa[indice2]*2;
            console.log(digitosTarjetaReversa); }
        // Recorrer el array por tercera vez para identificar si existen difitos mayores a 10 para simplificarlos a un dígito.
        for (let indice3 = 1; indice3<digitosTarjetaReversa.length; indice3 +=2) {
            if (digitosTarjetaReversa[indice3] >= 10){
                digitosTarjetaReversa[indice3] -= 9;
            }
                console.log(digitosTarjetaReversa);
        }
         // Recorrer el array por cuarta vez para sumar todos los números del array.
         for (let s=0; s<digitosTarjetaReversa.length; s++){
             sumaFinal= sumaFinal + digitosTarjetaReversa[s];
             console.log(sumaFinal);
         }
         if (sumaFinal%10 ==0){
             return true} 
             else {
                 return false
         }

    }

           
           

        //for (let indice4=0; indice4<digitosTarjetaReversa.lenght; indice4++){
            //sumaFinal= sumaFinal+digitosTarjetaReversa[indice4];
            //console.log(sumaFinal);
        


            
        
        
            
            //for (let b = 1; b < digitosTarjetaReversa.length; b+=2) {
            //if(digitosTarjetaReversa[b] > 9){
            //digitosTarjetaReversa[b] -= 9;}
            //console.log(digitosTarjetaReversa);
            //numerosParaSumar.push(digitosTarjetaReversa);
            //console.log(numerosParaSumar);


            //for (let s = 0; s< numerosParaSumar.length; s++) {
                //sumaFinal +=numerosParaSumar[s];}
                //console.log(sumaFinal);

                     //if(sumaFinal % 10 === 0){
                       //  return true;}
                       //  else{(sumaFinal != 0)
                    // return false;} 
           
     
        
        






       //let digitoActual = digitosTarjetaReversa[i];
       //console.log (digitoActual);
       //console.log(i);
       //if ([i] % 2 !=0){
           //digitoActual*=2;
           //if (digitoActual > 9){
             //  digitoActual =-9
          // }
       //}
       //suma += digitoActual;
      // console.log(suma);
    //}
    //console.log("La tarjeta es")
    //return "jajajajaja"
    //}
    
    
  
};

export default validator;
