// escribe tu función acá
function capitalizar(cadena) {
    if (cadena == "") {
        return "";
    }
    return cadena[0].toUpperCase() + cadena.substring(1);
}
// código de prueba
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""