// escribe tu función acá
function min(arreglo) {
    var min = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] < min) {
            min = arreglo[i];
        }
    }
    return min;
}
// código de prueba
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2