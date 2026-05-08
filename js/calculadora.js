let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let operacion = prompt("Ingresa la operación (+, -, *, /):");

if (isNaN(num1) || isNaN(num2)) {
    alert("Debes ingresar números válidos");
} else if (operacion === "+") {
    alert("Resultado: " + (num1 + num2));
} else if (operacion === "-") {
    alert("Resultado: " + (num1 - num2));
} else if (operacion === "*") {
    alert("Resultado: " + (num1 * num2));
} else if (operacion === "/") {
    if (num2 === 0) {
        alert("No se puede dividir entre 0");
    } else {
        alert("Resultado: " + (num1 / num2));
    }
} else {
    alert("Operación no válida");
}