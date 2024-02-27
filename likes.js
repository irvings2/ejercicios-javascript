// escribe tu respuesta acá
function likes(numeroDeLikes) {
    if (numeroDeLikes < 1000) {
        return numeroDeLikes.toString();
    } else if (numeroDeLikes < 10000) {
        return numeroDeLikes.toString().at(0) + "K";
    } else if (numeroDeLikes < 100000) {
        return numeroDeLikes.toString().slice(0, 2) + "K";
    } else if (numeroDeLikes < 1000000) {
        return numeroDeLikes.toString().slice(0, 3) + "K";
    } else if (numeroDeLikes < 10000000) {
        return numeroDeLikes.toString().at(0) + "M";
    } else if (numeroDeLikes < 100000000) {
        return numeroDeLikes.toString().slice(0, 2) + "M";
    }
}
// código de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(1000000)) // "1M"
console.log(likes(25222444)) // "25M"