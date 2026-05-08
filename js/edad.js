let edad = Number(prompt("Ingresa tu edad:"));

if (isNaN(edad)) {
    alert("Debes ingresar un número válido");
} else if (edad >= 18) {
    alert("Bienvenido, puedes ingresar");
} else {
    alert("No puedes ingresar acceso denegado");
}