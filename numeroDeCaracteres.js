// escribe tu respuesta acá
function numeroDeCaracteres(cadena, caracter) {
    var numeroDeCaracteres = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == caracter) {
            numeroDeCaracteres ++;
        }
    }
    return numeroDeCaracteres;
}
// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4