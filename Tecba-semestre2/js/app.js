//let alacena variables
//var no se usa
//const almecena variables unicas

//let nombre = "mel"

//let nombre = `Mel`;
//console.log('Hola Mundo', nombre);

//let numero = 10;
//let bandera = false;
//let texto = "Hola Mundo";

//console.log(texto.toUpperCase());

//if (numero == 10) {
    //console.log("fleicidades");
//}else{
    //console.log("Intentalo de nuevo");
//}

//EJERCICO 1: NUMERO PARA O IMPAR
//let numero = 45

//if (numero%2 == 0) {
    //console.log("El numero es par");
//}else{
    //console.log("El numero es impar");
//}


//EJERCICIO 2: NUMERO EN UN RANGO DE 10 A 15

//let numero = 12

//if (numero >= 10 & numero <= 15) {
    //console.log("El numero esta en el rango");
//}else{
    //console.log("El numero no esta en el ranngo");
//}

//INGRESAR UN NUMERO Y VERIFICAR SI ES MULTIPLO DE 3 O 5 

//let numero = prompt("Ingrese un numero: ");
//if (numero % 3 == 0) {
    //console.log("El numero es multiplo de 3");
//}if(numero % 5 == 0){
    //console.log("El numero es multiplo de 5");
//}if(numero % 3 == 0 & numero % 5 == 0){
    //console.log("El numero es multiplo de 3 y 5");
//}else if (numero % 3 > 0 & numero % 5 > 0 ){
    //console.log("No son multiplos de 3 o 5");
//}

//SISTEMA DE INVITACION DE FIESTA

let nombre = prompt("Ingrese su nombre: ");
let edad = prompt("Ingrese su edad: ");
let genero = prompt("Ingrese su genero Ej. Femenino F, Masculino M");

if (genero == "F" & edad >= 18){
    console.log(nombre + " Ingrese a la zona VIP");
} else if (genero == "M" & edad >= 18 & edad < 35){
    console.log(nombre + " Ingrese a la zona X");
} else if (genero == "M" & edad == 35){
    console.log(nombre + " Ingrese a la zona VIP");
} else{
    console.log(nombre + " No puede ingresar");
}


//SISTEMA DE AREAS DEL CLUB
let nombre = prompt("Ingrese su nombe: ");
let edad = prompt("Ingrese su edad: ");
let membresia = prompt("Ingrese su mebresia (Basica, Premium o VIP) ")

if (edad >= 18 & membresia == "VIP"){
    console.log(nombre + " tiene acceso total a todas las areas del club");   
}else if (edad >= 18 & membresia == "Premium"){
    console.log(nombre + " tinen acceso a la pscina y gimnasio");
}else if (edad >= 18 & membresia == "Basica"){
    console.log(nombre + (" tiene acceso solo al area de descanso"));    
}else{
    console.log(nombre + " tiene acceso restringido por edad.");
}

