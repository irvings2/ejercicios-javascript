// escribe tu función acá
function numerosAPalabras(arreglo) {
    var arregloPalabras = [];
    for (let i = 0; i < arreglo.length; i++) {
        switch (arreglo[i]) {
            case 0:
                arregloPalabras.push("cero");
                break;
            case 1:
                arregloPalabras.push("uno");
                break;
            case 2:
                arregloPalabras.push("dos");
                break;
            case 3:
                arregloPalabras.push("tres");
                break;
            case 4:
                arregloPalabras.push("cuatro");
                break;
            case 5:
                arregloPalabras.push("cinco");
                break;
            case 6:
                arregloPalabras.push("seis");
                break;
            case 7:
                arregloPalabras.push("siete");
                break;
            case 8:
                arregloPalabras.push("ocho");
                break;
            case 9:
                arregloPalabras.push("nueve");
                break;
            default:
                break;
        }
    }
    return arregloPalabras;
}
// código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]