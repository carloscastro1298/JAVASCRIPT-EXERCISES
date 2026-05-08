let nota1 = Number(prompt("Ingresa la primera nota:"));
let nota2 = Number(prompt("Ingresa la segunda nota:"));
let nota3 = Number(prompt("Ingresa la tercera nota:"));


let promedio = (nota1 + nota2 + nota3) / 3;


if (promedio >= 3.0) {
    alert("Aprueba");
} else {
    alert("Reprueba");
}