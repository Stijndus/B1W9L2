var number1 = 0;
var number2 = 1;
var storage = 0;

fibonacci(prompt('Tot hoe ver wil je de Fibonacci reeks uitrekenen'));

function fibonacci(qty) {
    for (i = 0; i < qty; i++) {
        document.write(storage + '<br>');
        storage = number1 + number2;
        number1 = number2;
        number2 = storage;
    }
}