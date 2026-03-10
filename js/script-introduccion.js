let nombre = prompt("Bienvenido, ¿cómo te llamas?");
alert("Hola " + nombre + ", vamos a hacer unas pruebas.");

let x = 5;
let y = 6;
let resultadoSuma = x + y;
alert("La suma de 5 + 6 es: " + resultadoSuma);

let edad = prompt("¿Qué edad tienes?");

if (edad < 18) {
  alert("Eres menor de edad. No deberías estar aquí.");
  console.log("Acceso denegado por edad.");
} else {
  alert("Eres mayor de edad. ¡Bienvenido!");
  console.log("Acceso permitido.");
}
