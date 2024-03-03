// escribe tu función acá
function numAsteriscos(arreglo) {
    if (arreglo.length == 0) {
        return 0;
    }
    var contador = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] == "*") {
            contador ++;
        }
    }
    return contador;
}
// código de prueba
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0