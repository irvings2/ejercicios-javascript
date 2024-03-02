// escribe tu función acá
function posiciones(arreglo) {
    if (arreglo == []) {
        return [];
    }
    var posicionesArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            posicionesArreglo.push(i);
        }
    }
    return posicionesArreglo;
}
// código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []