// escribe tu función acá
function pares(arreglo) {
    if (arreglo == []) {
        return [];
    }
    var arregloPares = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            arregloPares.push(arreglo[i]);
        }
    }
    return arregloPares;
}
// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []