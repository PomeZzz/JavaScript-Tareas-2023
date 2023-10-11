import { Persona } from "./clase-personas.js";

let jugadores = [];
const numJugadores = parseInt(prompt("¿Cuántos jugadores van a jugar?"));

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 100) + 1;
}

function jugar(persona) {
  console.log(`¡Bienvenido/a, ${persona.nombre}!`);
  const numeroSecreto = generarNumeroSecreto();
  let intentos = 0;
  let maxIntentos = 10;   

  while (intentos < maxIntentos) {
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

  persona.intentos = intentos; 
  jugadores.push(persona); 
}

for (let i = 1; i <= numJugadores; i++) {
  const nombre = prompt(`Nombre del jugador ${i}:`);
  const jugador = new Persona(nombre, 0); 
  jugar(jugador);
}

let nombresDeJugadores = jugadores.map((jugador) => jugador.nombre);

jugadores.forEach((jugador) => (jugador.medalla = "si"));

console.log(jugadores);
console.log(nombresDeJugadores);

let puntajeMaximo = 0;
let ganador

jugadores.forEach((jugador) => 
  {
    if(jugador.intentos > puntajeMaximo){
      puntajeMaximo == jugador.intentos
      ganador=jugador.nombre
    } 
  }
);

