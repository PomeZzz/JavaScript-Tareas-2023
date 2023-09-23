// // Definición del objeto
const objeto = {}; //objeto vacio
const objeto2 = new Object();//


const persona = {
    nombre: "juan", //propiedades string
    edad: 30, //propiedad int
    hobby: ["cantar","bailar","programar"] //propiedad array
};

// //mostrar informacion del objeto

console.log(persona.nombre) //notación con puntos
console.log(persona["nombre"]) //notación con corchetes

// //añadir propiedades

persona.apellido= "perez"
persona["apellido"]= "perez"

// //mostar todo el objeto
console.log(persona)

// //metodos de un objeto

const estudiante = {
    nombre: "jose",
    edad: 17,
    estudiar () { return "estoy estudiando";},
    saludar (){console.log(`Hola mi nombre es ${this.nombre}`)}
}

console.log(estudiante.estudiar())

// //desestructurar objetos
// //dividir un objeto en 
const {nombre, edad } = estudiante;

//renombrar y valor por defecto
const {nombre:apodo , edad: anios = 18}  = estudiante;


const jugador = {
    name: "Cristian",
    role: "Profe",
    life: '31%'
  }
  
console.log(jugador)

//nuevo objeto a partir de otro
const superjugador = {
    ...jugador,
    power: 25,
    life: 50
  }
console.log(superjugador)


  //...structuredClone

//CLASES

// // const jose = new personas();

// // //clases
class pesonas {

    //propiedades
    nombre;
    apellido;
    edad;
    altura;
    #peso; //privada
    fec_nac = "14/10/1991" 
    sexo; 
 
    //constructor con parametros
    constructor (nombre,apellido, edad, altura, peso, fec_nac,sexo){
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.altura = altura;
      this.#peso  = peso;
      this.fec_nac = fec_nac;
      this.sexo = sexo
}

 //     //constructor vacio
// //     constructor (){

// //     }

// //     //metodos
salur (nombre){
    return `hola ${this.nombre}, ¿como estas?`
    }
}


//importar clases externas
import {animal} from './clases/persona.js'

const perro = new animal()


// // MAS 
// https://lenguajejs.com/javascript/oop/clases/
// https://lenguajejs.com/javascript/oop/propiedades-clase/
// https://lenguajejs.com/javascript/oop/metodos-clase/
// https://lenguajejs.com/javascript/oop/herencia-clases/