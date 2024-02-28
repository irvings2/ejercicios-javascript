// escribe tu función acá
function capitalizar(cadena) {
    if (cadena == "") {
        return "";
    }
    var cadenaSinEspacios = cadena.split(" ");
    for (let i = 0; i < cadenaSinEspacios.length; i++) {
        cadenaSinEspacios[i] = cadenaSinEspacios[i][0].toUpperCase() + cadenaSinEspacios[i].substring(1);
    }
    return cadenaSinEspacios.join(" ");
}
// código de prueba
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""