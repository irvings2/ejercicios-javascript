// escribe tu respuesta acá
function sumarArreglo(arreglo, posicionInicial, posicionFinal) {
    if (posicionFinal == 0) {
        return 0;
    }
    var suma = 0;
    for (let i = posicionInicial; i <= posicionFinal; i++) {
        suma += arreglo[i];
    }
    return suma;
}
// código de prueba
console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0