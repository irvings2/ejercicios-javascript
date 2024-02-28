// escribe tu función acá
function transcribir(cadena) {
    const arr = cadena.split('');
    for (let i = 0; i < cadena.length; i++) {
        switch (arr[i]) {
            case 'A':
                arr[i]='U';
                break;
            case 'T':
                arr[i]='A';
                break;
            case 'G':
                arr[i]='C';
                break;
            case 'C':
                arr[i]='G';
                break;
            default:
                break;
        }
    }
    return arr.join('');
}
// código de prueba
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"