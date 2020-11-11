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

    mapDeStrings.forEach((valor, clave) => {
        document.write(clave + ' = ' + valor + "<br>");
        console.log(clave + ' = ' + valor);
    });



    return mapDeStrings;
}

function Ejercicio2() {

    let condi = true;
    let seguimos;
    const arrayDeStrings = new Array;
    const mapDeStringsVista = new Map;

    do {
        seguimos = prompt("Introduce palabras de una en una.");
        arrayDeStrings.push(seguimos);
        arrayDeStrings
        if (seguimos == '' || seguimos == null) {
            condi = false;
        }
    } while (condi);

    mapDeStringsVista = mapaStringsFunction(arrayDeStrings);

    mapDeStringsVista.forEach((valor, clave) => {
        document.write(clave + ' = ' + valor + "<br>");
        console.log(clave + ' = ' + valor);
    });
}