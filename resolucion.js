/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. 
miFunción("Hola Mundo") devolverá 10 */

function contarCadena(string){
return string.length;
}

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe.
 miFunción("Hola Mundo", 4) devolverá "Hola" */

 function recortarCadena(string, num){
    return string.split("", num).join("");
 }

 /* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
     miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */

function devolverArray(string, string2){
    return string.split(string2);
}

/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 
3) devolverá Hola Mundo Hola Mundo Hola Mundo */

function repetirTexto(string, num){
    return string.repeat(num);
}

/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo")
 devolverá "odnuM aloH" */

 function invertirString(string){
    return string.split("").reverse().join("");
 }

 /* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. 
 miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */

 function contarRepetidos(string1, string2){
    let array = string1.split(" ");
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] === string2){
            suma += 1;
        }  
    }
    return suma; 
 };

 /* 7) Programa una función que valide si una palabra o frase dada, es un 
 palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true */
 
 function revisarPalindromo(string){
    let reple = /[^A-Za-z0-9]/g;
    let nuevoString = string.toLowerCase().replace(reple, '');
    let stringDos = nuevoString.toLocaleLowerCase().split("").reverse().join("");
    if(nuevoString === stringDos){
        return true;
    } else {
        return false;
    }
 }

 /* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. 
 miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5 */
 function elimiarPatron(string1, string2){
    
 }