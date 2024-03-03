// escribe tu función acá
function terminanConS(arreglo) {
    if (arreglo.length == 0) {
        return [];
    }
    var terminanConS = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i][arreglo[i].length-1] == "s" || arreglo[i][arreglo[i].length-1] == "S") {
            terminanConS.push(arreglo[i]);
        }
    }
    return terminanConS;
}
// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["pruebas", "arroz", "árboles", "tokens"])) // ["pruebas", "arboles", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []