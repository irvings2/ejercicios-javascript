// escribe tu respuesta acá
function contarRango(limInferior, limSuperior) {
    var contador = 0;
    for (let i = limInferior + 1; i < limSuperior; i++) {
        contador ++;
    }
    return contador;
}
// código de prueba
console.log(contarRango(1, 9)); // 7
console.log(contarRango(1332, 8743)); // 7410
console.log(contarRango(5, 6)); // 0
console.log(contarRango(33, 44)); // 0