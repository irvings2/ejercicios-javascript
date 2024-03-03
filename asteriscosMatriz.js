// escribe tu función acá
function numAsteriscos(matriz) {
    var contador = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (matriz[i][j] == "*") {
                contador ++;
            }
        }
    }
    return contador;
}
// código de prueba
console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
  ]))
  // 5