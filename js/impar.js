    function verificar() {
        let numero = document.getElementById("numero").value;
        numero = Number(numero);

        let resultado = document.getElementById("resultado");

        if (isNaN(numero)) {
            resultado.textContent = "Por favor ingresa un número válido";
        } else if (numero % 2 === 0) {
            resultado.textContent = "El número es par";
        } else {
            resultado.textContent = "El número es impar";
        }
    }