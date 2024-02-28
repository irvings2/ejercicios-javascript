// escribe tu función acá
function password(cadena) {
    if (cadena == "") {
        return "";
    }
    var cadenaAux = cadena.split(" ");
    cadenaAux = cadenaAux.join("");
    var cadenaFinal = cadenaAux.split("");
    for (let i = 0; i < cadenaFinal.length; i++) {
        switch (cadenaFinal[i]) {
            case "a":
            case "A":
                cadenaFinal[i] = "4";
                break;
            case "e":
            case "E":
                cadenaFinal[i] = "3";
                break;
            case "i":
            case "I":
                cadenaFinal[i] = "1";
                break;
            case "o":
            case "O":
                cadenaFinal[i] = "0";
                break;
            default:
                cadenaFinal[i].toLowerCase();
                break;
        }
    }
    return cadenaFinal.join("");
}
// código de prueba
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""