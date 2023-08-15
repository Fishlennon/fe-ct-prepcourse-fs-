/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrayPadre=[]
     
   for (const propiedad in objeto){
         var arrayshi = [propiedad, objeto[propiedad]];
         arrayPadre.push(arrayshi)
      }
      return(arrayPadre)
      
   }



function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let objetoso={}
   let arrayan=[]
   let arrayani=[]
   let tringSeparado = string.split('')
   let abcdario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
   
    for (let index = 0; index < abcdario.length; index++) {
      var letraabcedario= abcdario[index]
      var contandor=0
      for (let i = 0; i < tringSeparado.length; i++) {
         var letrastring = tringSeparado[i]
         
      if(letraabcedario===letrastring){
         contandor++;
            }    
         }
         if(contandor>0){
            objetoso[letraabcedario]=contandor
         }
      }
    
      
   return(objetoso)
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let stringo=string.split('')
   let strinMayuscula=[]
   let stringminuscula=[]
   let arrawe=[]
   for(let i =0;i<stringo.length;i++){
      strinMayuscula.push(stringo[i].toUpperCase());
      stringminuscula.push(stringo[i].toLowerCase())
      if(stringo[i]===strinMayuscula[i]){
         arrawe.push(stringo[i])
         }        
       }
       for(let i =0;i<stringo.length;i++){
         if (stringo[i]===stringminuscula[i]){
            arrawe.push(stringo[i])
            }
      }
      /*for(let i =0;i<stringo.length;i++){
         if(stringo[i]===stringo[i].toUpperCase()){
            arrawe.push(stringo[i])
      }}
      for(let i =0;i<stringo.length;i++){
         if (stringo[i]===stringo[i].toLowerCase()){
            arrawe.push(stringo[i])
            }
      }*/
      let arrawey=arrawe.join('')
   return(arrawey)
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let arrayFrase= frase.split(' ')
   
   let fraseAlrevez=[]
   for(let i =0;i<arrayFrase.length;i++){
      let palabraAlrevez=[]
      let palabrass=arrayFrase[i]
      for(let iq =0;iq<palabrass.length;iq++){
      palabraAlrevez.unshift(palabrass[iq])
   } let palabraBien=palabraAlrevez.join('') ;
    fraseAlrevez.push(palabraBien);
    
   } return(fraseAlrevez.join(' '))
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numerostring = numero.toString()
   let longitud = numerostring.length
   /*if((numerostring[0]===numerostring[longitud-1]) && (numerostring[1]===numerostring[longitud-2])){
      return("Es capicua")
   } else return "No es capicua"*/
   for (let index = 0; index < numerostring.length; index++) {
      if(numerostring[index]===numerostring[numerostring.length-1-index]){
         return ('Es capicua')
      } else return ('No es capicua') 
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let stringArray = string.split('')
   let arrayostring=[]
   for (let index = 0; index < stringArray.length; index++) {
      if(stringArray[index]!=="a" && stringArray[index]!=="c" && stringArray[index]!=="b"){
         arrayostring.push(stringArray[index])
      }
      
   } let stringArrayy = arrayostring.join('')
   return stringArrayy
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let arregloOrdenado=[]
   for (let index = 1; index < 20; index++) {
      for (let indexo = 0; indexo < arrayOfStrings.length; indexo++) {
      if(arrayOfStrings[indexo].length===index) {
         arregloOrdenado.push(arrayOfStrings[indexo])
      };
   }
      
   } return arregloOrdenado
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arregloComun= []
   for (let index = 0; index < array1.length; index++) {
      for (let indexo = 0; indexo < array2.length; indexo++) {
         if(array1[index]===array2[indexo]){
            arregloComun.push(array1[index])
         }
         
      }
      
   }return arregloComun
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
