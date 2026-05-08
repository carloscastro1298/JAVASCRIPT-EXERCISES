let valorCompra = parseFloat(prompt("Ingrese el valor de la compra:"));
if (valorCompra > 100000) {
    valorCompra = valorCompra * 0.9;
}
alert("El valor final a pagar es: $" + valorCompra.toFixed(2));