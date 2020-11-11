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

            console.log(mapDeStrings);
        }

    } while (!(nuevoArray.length == 1));

    return mapDeStrings;
}

function ejercicio2() {

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

    const mapaVista = mapaStringsFunction(arrayDeStrings);

    //console.log(mapaVista);

    mapaVista.forEach((clave, valor) => {
        document.write(clave + ' => ' + valor + "<br>");
    });
}
