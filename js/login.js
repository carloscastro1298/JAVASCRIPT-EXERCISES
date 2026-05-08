let usuario = prompt("Ingrese su usuario:");
let contraseña = prompt("Ingrese su contraseña:");

if (usuario === "admin" && contraseña === "1234") {
    alert("Acceso correcto");
} else {
    alert("Credenciales incorrectas");
}