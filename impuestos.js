// escribe tu respuesta acá
function calcularImpuestos(edad, ingresos) {
    return edad >= 18 && ingresos >= 1000 ? ingresos * .4 : 0;
}
// código de prueba
console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0