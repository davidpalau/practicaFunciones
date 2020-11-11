function Ejercicio1() {
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

function mapaStringsFunction(nuevoArray) {

    mapDeStrings = new Map;

    do {
        let contar = 0;
        var muestra = nuevoArray[0];

        if (nuevoArray.length != 0) {
            for (let i = 0; i < nuevoArray.length; i++) {


                if (nuevoArray[i] == muestra && (nuevoArray[i] != '' || nuevoArray[i] != null)) {
                    contar++;
                    mapDeStrings.set(muestra, contar);
                    nuevoArray.splice(i, 1);
                    i--;
                }

            }

        }

    } while (!(nuevoArray.length == 1));

    mapDeStrings.forEach(function(valor, clave) {
        document.write(clave + ' = ' + valor + "<br>");
        console.log(clave + ' = ' + valor);
    });



    return mapDeStrings;
}

function Ejercicio1() {

    let condi = true;
    let seguimos;
    var arrayDeStrings = new Array;

    do {
        seguimos = prompt("Introduce palabras de una en una.");
        arrayDeStrings.push(seguimos);
        arrayDeStrings
        if (seguimos == '' || seguimos == null) {
            condi = false;
        }
    } while (condi);

    mapaStringsFunction(arrayDeStrings);


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