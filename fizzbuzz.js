// escribe tu respuesta acá
function fizzBuzz(num) {
    return num % 3 == 0 && num % 5 == 0 ? "fizzbuzz"
        : num % 3 == 0 ? "fizz"
        : num % 5 == 0 ? "buzz"
        : num;
}
// código de prueba
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8