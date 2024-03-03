// escribe tu función acá
function palabrasANumero(arreglo) {
    var arregloNumeros = []
    for (let i = 0; i < arreglo.length; i++) {
        switch (arreglo[i]) {
            case "cero":
                arregloNumeros.push(0);
                break;
            case "uno":
                arregloNumeros.push(1);
                break;
            case "dos":
                arregloNumeros.push(2);
                break;
            case "tres":
                arregloNumeros.push(3);
                break;
            case "cuatro":
                arregloNumeros.push(4);
                break;
            case "cinco":
                arregloNumeros.push(5);
                break;
            case "seis":
                arregloNumeros.push(6);
                break;
            case "siete":
                arregloNumeros.push(7);
                break;
            case "ocho":
                arregloNumeros.push(8);
                break;
            case "nueve":
                arregloNumeros.push(9);
                break;
            default:
                arregloNumeros.push(-1);
                break;
        }
    }
    return arregloNumeros;
}
// código de prueba
console.log(palabrasANumero(["cero", "uno", "dos", "tres", "what?", "cuatro"])) // [0, 1, 2, 3, -1, 4]
console.log(palabrasANumero(["cinco", "seis", "siete", "ocho", "nueve"])) // [5, 6, 7, 8, 9]