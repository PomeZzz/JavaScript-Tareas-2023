let numerosConDecilmal = parseFloat(prompt("Ingrese un numero con 2 decimales: "));

alert("Numero con un decimal: " + numerosConDecilmal.toFixed(1));

let numeroEntero = parseInt(prompt("Ingrese un numero entero: "))

let numeroComoString = numeroEntero.toString();
alert("Numero como String: " + numeroComoString);

let numeroEnBase2 = numeroEntero.toString(2);
alert(numeroEnBase2);
