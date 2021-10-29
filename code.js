//variables declaracion e inicializacion

var nombre = "Pepe";
var apellido = "Gomez";
const ESPACIO = " ";
let edad; //declaracion
edad = 45; //inicializacion

let edad2 = 31; //todo junto

//operaciones matematicas con numeros
let suma = edad + edad2; //resultado 76
let resta = edad - edad2; //14
let multiplicacion = edad * edad2; //1395
let division = edad / 5; //9

//concatenacion
let nombreCompleto = nombre + ESPACIO + apellido; //Pepe Gomez

//salida de datos
console.log(nombreCompleto);
console.log(suma);
console.log("El resultado de la resta es " + resta);

//alert("Hola people!!");
//alert("Hola" + nombre);
//alert("La edad de"+nombre+"es:"+edad);

//entrada de datos con prompt
let equipoFutbol = prompt("Ingrese su equipo de futbol favorito");
console.log("El equipo favorito del usuario es : " + equipoFutbol);

let anioNacimiento = parseInt(prompt("Ingrese el año de su nacimiento"));
//recibe del año y lo convierte a numero entero para poder operar matematicamente 
console.log("El usuario nacio en " + anioNacimiento);
let edadUsuario=2021 - anioNacimiento;
let suma2= anioNacimiento + 1;
console.log("La suma da:" + suma2);
//console.log("La edad del usuario es " + edadUsuario);

let precio=parseFloat(prompt("Ingrese el precio del producto:"));
let precioConAumento = precio + 20;
console.log("El precio con la inflacion es: $" + precioConAumento);
