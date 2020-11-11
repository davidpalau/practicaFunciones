function ejercicio3() {

    const arrayFactor = [2, 4, 6, 8];
    let factorial;

    arrayFactor.forEach((value) => {
        factorial = value;
        for (let i = value; i > 0; i--) {
            if (i == value) {
                console.log(" ", i, "! = ", i, " x ");
                document.write(" ", i, "! = ", i, " x ");
            } else if (i == 1) {
                console.log(i, " = ", factorial);
                document.write(i, "=", factorial, "<br>");
            } else {
                console.log(i, " X ");
                document.write(i, " X ");
            }

            factorial *= (i - 1);
        }
    });
}
