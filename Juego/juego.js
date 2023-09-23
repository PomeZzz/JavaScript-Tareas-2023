class personas{
    nombre;
    

    constructor(nombre){
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
    const jugador = new personas(nombre);
    jugar(jugador);
  }