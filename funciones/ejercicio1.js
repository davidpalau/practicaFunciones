function Ejercicio1() {
    const palabras = new Set();
    let salida = 1;
    let sigue = true;
    const arrayPalabras = [];
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
}