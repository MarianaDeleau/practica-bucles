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

//Ejercicio 6: Remover duplicados
//Definí una función removerDuplicados que tome por parámetros un array array y que devuelva un array con los mismos valores de array pero sin valores duplicados.

// const removerDuplicados = (array) =>{

// let nuevoArray= [];

// for(let i=0; i<array.length; i++){

// if(!nuevoArray.includes(array[i])){
//     nuevoArray.push(array[i])
    
// }

// }
// console.log(nuevoArray)
// }

//VERSION CON FOR EACH

// const removerDuplicados = (array)=>{
//     let nuevoArray= [];
//     array.forEach((numero) => { 
       
// if(!nuevoArray.includes(numero)){
//     nuevoArray.push(numero)
// }        
//     });
//     console.log(nuevoArray)
// }

// removerDuplicados([1, 1, 1])
// removerDuplicados([1, 1, 2, 2, 3, 3])
// removerDuplicados([5, 23, 8, 5, 5, 44, 23])

//Ejercicio 7: Repetir letras
//Definí una función repetirLetras que reciba como argumento un string palabra y un número entero cantidad, y devuelva una string donde cada letra de palabra esté repetida cantidad de veces.

// const repetirLetras = (string, cantidad) =>{

//     let nuevoString= string.split("");
//     const repetidas = nuevoString.map(letra=>letra.repeat(cantidad))

//     console.log(repetidas.join(""))
// }

//VERSION REPITE PERO DESORDENADO
// const repetirLetras = (string, cantidad) =>{

//     let nuevoString = "";
    
//     while(cantidad>0){
//     //for(let i=0; i<string.length; i++){
//         nuevoString += string;
//         cantidad--;

//     }
        
//     console.log(nuevoString)
// }

// repetirLetras('hola', 2)
// repetirLetras('ada', 3)
// repetirLetras('ah!', 5)
// repetirLetras('basta', 1)


//Ejercicio 8: Capitalizar palabras
//Definí una función capitalizarPalabras tome un string y devuelva un string donde cada palabra está capitalizada (con la primera letra mayúscula). Dejá las demás letras como están.

// const capitalizarPalabras = (string) => {

//     let stringSplit= string.split(" ");
//     let nuevoString=[];

//     for(let palabra of stringSplit){
    
//         nuevoString.push(palabra.replace(palabra[0], palabra[0].toUpperCase()));
       
        
//     }
//    console.log(nuevoString.join(' '))
    
//     }
    
//     capitalizarPalabras('Esto es un título')
//     capitalizarPalabras('había una vez')
//     capitalizarPalabras('OMG')

//Ejercicio 10: Es subconjunto
//Definí una función esSubconjunto que tome por parámetro dos arrays, subconjunto y conjunto, y devuelva si subconjunto es realmente subconjunto de conjunto, es decir, si todos los valores de subconjunto están en conjunto.

// const esSubconjunto = (subconjunto, conjunto) => {

//     if(subconjunto.length<=conjunto.length){
    
//         for(let i=0; i<subconjunto.length; i++){
                
//             if(conjunto.includes(subconjunto[i])){
//                 alert(true)
//             } else {            
//                 alert(false)        
//             }
//         }
//     } else {
//         alert(false)
//     }
// }


//esSubconjunto([1], [1, 2, 3])
//esSubconjunto([1, 2, 3], [1, 2, 3, 4, 5])
//esSubconjunto([27, 49, 54], [54, 27, 8, 27, 49])
//esSubconjunto([1, 2, 3], [1, 2])
//esSubconjunto([1], [2, 3, 4])

