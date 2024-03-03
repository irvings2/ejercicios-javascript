// escribe tu función acá
function duplicar(arreglo) {
    if (arreglo.length == 0) {
        return [];
    }
    var arregloDuplicado = [];
    for (let i = 0; i < arreglo.length; i++) {
        arregloDuplicado[i] = arreglo[i] * 2;
    }
    return arregloDuplicado;
}
// código de prueba
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []