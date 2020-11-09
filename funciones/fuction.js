/*
Práctica 1 (Obligatoria)

Crea una aplicación web que pida al usuario palabras continuamente hasta que que el popup se deje vacío o se cancele.

A continuación se eliminarán todas las palabras repetidas y además se ordenarán en español, pero en orden inverso (de la Z a la A) y se mostrará el resultado por pantalla.

Utilizar funciones flecha, si se considera apropiado. */

function ejercicio1() {
    var palabras = new Set();
    let salida = 1;
    let sigue = true;
    let arrayPalabras = [];
    for (let i = 0; sigue; i++) {
        palabras.add(salida = prompt('Dame una palabra.'));

        if (salida == '' || salida == null) {
            arrayPalabras = Array.from(palabras);
            arrayPalabras.sort((a, b) => a.localeCompare(b));
            arrayPalabras = arrayPalabras.reverse();
            sigue = false;
        }


    }

    document.getElementById('respuesta').innerHTML = arrayPalabras.join("</li><li>");
}
/*

Práctica 2 (Obligatoria)


Crea una aplicación web que pida al usuario palabras continuamente hasta
 que que el popup se deje vacío o se cancele.

Crear una función que recibirá todas las palabras y volverá un mapa que
 contenga como clave cada palabra y el valor será el número de veces que
  aparece esa palabra en el array. Mostrar resultados por pantalla.

Se valorará positivamente si también se hacen los tests unitarios
 apropiados de la función que se ha desarrollado mediante Jester.

 */

function mapaStrings(nuevoArray) {
    var mapDeStrings = new Map;
    let muestra = nuevoArray[0];
    let contar = 0;

    for (let i = 0; i < nuevoArray.length; i++) {

        if (nuevoArray[i] == muestra) {
            contar++;
            mapDeStrings.set(muestra, contar);
            nuevoArray.splice(i, 1);
            i--;
        }

    }

    if (nuevoArray.length > 0) {
        mapaStrings(nuevoArray);
    }

}

function ejercicio2() {

    let condi = true;
    let seguimos;
    var arrayDeStrings = [];
    arrayDeStrings

    do {
        arrayDeStrings.push(seguimos = prompt("Introduce palabras de una en una."));
        if (seguimos == '' || seguimos == null) {
            condi = false;
        }
    } while (condi);

    mapaStrings(arguments);



}
/*


Práctica 3 (Opcional)

El método filter los arrays permite indicar una función callback, para aplicar un filtro a los elementos del array.

Es una buena práctica para aprender a implementar funciones callback tratar de crear nuestras propias funciones.

Crea una función que se diga filtro y que reciba un array y una función callback. La función callback entenderá que sólo tiene un parámetro. Esta función se aplicará a cada elemento del array y el resultado se volverá a guardar en el mismo array.

Por ejemplo: Array [1,2,3,4]

función = multiplicar por 2

Resultado: [2, 4, 6, 8]

Crear otros dos casos:

Dado un array de palabras en minúsculas, pasarlo a mayúsculas
Dado un array de números, calcular el factorial de cada uno (https://es.wikipedia.org/wiki/Factorial) */