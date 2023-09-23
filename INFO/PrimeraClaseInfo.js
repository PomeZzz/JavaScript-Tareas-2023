//gsapanimation
//VARIABLES
var NombreDeVariable = 14//no recomendable para definir
let NombreDe = "Hola mundo"//Recomendable para definir una variable
const constante = 21 //cuando la creo si o si tiene que tener un valor



NombreDe = 34 //puedo actualizar los valores con var y let
constante = 32 //va a dar error no se puede actualizar como las otras dos


//---------------------------------------------------------------------------------------------------------------------------


//ALERTAS

let saludo = "hola mundo"
alert(saludo) // alerta 


let numero = prompt("escribi un numero")//alerta que guarda valor
prompt("escribi un numero")//alerta sin que guarde el valor


confirm("estas de acuerdo") //variable que me da si o no


let numero1 = Number(prompt("escribi un numero"))//lo toma como numero y no como texto <Number>
let numero2 = prompt("escribi un numero")
alert(numero1+numero2)

let numeroint = Number.parseInt(numero2)//con esta forma lo que hago es convertir al String de numero2 en en una varibale como numerica con <NUMBER>

console.log(x)

//---------------------------------------------------------------------------------------------------------------------------------

// Definición de la clase Persona
class Persona {
    constructor(nombre) {
      this.nombre = nombre;
    }
  }
  
  // Función para generar un número aleatorio entre 1 y 100
  function generarNumeroSecreto() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  // Función para jugar
  function jugar(persona) {
    console.log(`¡Bienvenido/a, ${persona.nombre}!`);
    const numeroSecreto = generarNumeroSecreto();
    let intentos = 0;
  
    while (true) {
      const conjetura = parseInt(prompt("Adivina el número secreto (entre 1 y 100):"));
  
      if (isNaN(conjetura) || conjetura < 1 || conjetura > 100) {
        alert("Por favor, ingresa un número válido entre 1 y 100.");
        continue;
      }
  
      intentos++;
  
      if (conjetura < numeroSecreto) {
        alert("El número secreto es mayor. Intenta de nuevo.");
      } else if (conjetura > numeroSecreto) {
        alert("El número secreto es menor. Intenta de nuevo.");
      } else {
        alert(`¡Felicidades, ${persona.nombre}! Has adivinado el número secreto (${numeroSecreto}) en ${intentos} intentos.`);
        break;
      }
    }
  }
  
  // Preguntar cuántos jugadores hay
  const numJugadores = parseInt(prompt("¿Cuántos jugadores van a jugar?"));
  
  for (let i = 1; i <= numJugadores; i++) {
    const nombre = prompt(`Nombre del jugador ${i}:`);
    const jugador = new Persona(nombre);
    jugar(jugador);
  }