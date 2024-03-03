// escribe tu función acá
function distancia(primerCadena, segundaCadena) {
    var contador = 0;
    if (primerCadena.length > segundaCadena.length) {
        resultado = primerCadena.length - segundaCadena.length;
        longitud = segundaCadena.length;
    } else {
        resultado = segundaCadena.length - primerCadena.length;
        longitud = primerCadena.length
    }
    for (let i = 0; i < longitud; i++) {
        if (primerCadena[i] != segundaCadena[i]) {
            contador ++;
        }
    }
    return contador + resultado;
}
// código de prueba
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3