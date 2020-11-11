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
<<<<<<< HEAD

    //console.log(mapaVista);

=======

    //console.log(mapaVista);

>>>>>>> ba4e07e6be5694ab9a8672082d66990e09a0c9c9
    mapaVista.forEach((clave, valor) => {
        document.write(clave + ' => ' + valor + "<br>");
    });
}
