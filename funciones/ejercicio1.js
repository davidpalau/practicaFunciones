function ejercicio1() {
    let palabras = new Set();
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

    document.getElementById('respuesta').innerHTML = arrayPalabras.join("<br>");
    console.log((arrayPalabras));


<<<<<<< HEAD
}
=======
}
>>>>>>> ba4e07e6be5694ab9a8672082d66990e09a0c9c9
