//Ejercicio 2: Repetir
//Definí una función repetir que tome un valor valor y un número entero cantidad, y devuelva una array con valor repetido cantidad de veces. 

// const repetir = (valor, cantidad) => {
    
//     let valoresNuevos=[];
//    for(let i=0; i<cantidad; i++){
//        valoresNuevos.push(valor);
//    }
       
   
//     console.log(valoresNuevos)
// }
// repetir('lovelace', 3)

//Ejercicio 3: Sumar impares hasta
//Definí una función sumarImparesHasta que reciba como argumento un número numero y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.

// const sumarImparesHasta = (numero) =>{
//    let suma='';
//     for(let num=0; num<=numero; num++){
                 
//               if(num%2!==0){
              
//            suma=parseInt(suma+num);            
//        }      
//    }
//    console.log(suma)
// }
// sumarImparesHasta(5)
// sumarImparesHasta(47)
// sumarImparesHasta(13)

//Ejercicio 4: Crear cuenta regresiva
//Definí una función crearCuentaRegresiva que reciba como argumento un número entero numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

// const crearCuentaRegresiva  = (numeroInicial) =>{
//    let cuenta=[];
//     for(let num=0; num<=numeroInicial; num++){
               
                            
//            cuenta.push(num);
//            cuenta.sort().reverse();
                     
//        }      
//    console.log(cuenta)  
   
// }
// crearCuentaRegresiva(3)
// crearCuentaRegresiva(5)


//Ejercicio 5: Invertir
//Definí una función invertir que tome por parámetro un array array y que devuelva un array con los mismos valores pero en orden invertido.

// const invertir   = (array) =>{
   
//     for(let i=0; i<array.length; i++){
         
//            array.reverse();
           
//        }      
//        console.log(array)  
   
// }
// invertir([1, 2, 3]) 
// invertir([5, 7, 99, 34, 54, 2, 12])