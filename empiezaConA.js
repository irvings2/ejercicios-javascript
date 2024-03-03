// escribe tu función acá
function empiezanConA(arreglo) {
    if (arreglo.length == 0) {
        return [];
    }
    var arregloDeA = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i][0] == 'a' || arreglo[i][0] == "A") {
            arregloDeA.push(arreglo[i]);
        }
    }
    return arregloDeA;
}
// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["Arduino", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []