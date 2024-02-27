// escribe tu respuesta acá
function numeroDeAes(cadena) {
    var numeroDeAes = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == 'a' || cadena[i] == 'A') {
            numeroDeAes ++;
        }
    }
    return numeroDeAes;
}
// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0