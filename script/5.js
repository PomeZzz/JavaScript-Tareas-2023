var texto1 = prompt("Ingresa una cadena de texto: ");
var largo = texto1.length;
console.log("Tamano de la cadena: " + largo);

var texto2 = prompt("Ingrese otra cadena de texto: ");
var textoMayus = texto2.toUpperCase();
console.log("Texto en mayusculas" + textoMayus);

var texto3 = prompt("Ingrese otra cadena: ");
var textoMinusculas = texto3.toLowerCase();
console.log("Texto en minusculas" + textoMinusculas);

var texto4 = prompt("Ingresa una cadena de texto con espacios:");
var sinEspacios = inputText4.replace(/\s/g, "");
console.log("Texto sin espacios en blanco: " + sinEspacios);

var texto5 = prompt("Ingresa una cadena de texto:");
var subCadena = inputText5.split(" ");
console.log("Array de subcadenas: ");
console.log(subCadena);

var texto6 = prompt("Ingresa la primera cadena:");
var texto7 = prompt("Ingresa la segunda cadena:");
var cadenasConectadas = texto6 + texto7;
console.log("Cadenas concatenadas: " + cadenasConectadas);
