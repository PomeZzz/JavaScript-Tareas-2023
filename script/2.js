let numero1 = 15;
let numero2 = 10;

const incrementoNum1 = numero1++;
const incrementoNum2 = numero2++;
const decrementoNum1 = numero1--;
const decrementoNum2 = numero2--;

const operaciones = {
  suma: numero1 + numero2,
  resta: numero1 - numero2,
  mutliplicacion: numero1 * numero2,
  division: numero1 / numero2,
  modulo: numero1 % numero2,
  potencia: numero1**2,
  potencia2: numero2**2,
  incremento: incrementoNum1,
  incremento2: incrementoNum2,
  decremento: decrementoNum1,
  decremento2: decrementoNum2
};

for (const operacion in operaciones) {
  console.log(
    `La operación "${operacion}" entre ${numero1} y ${numero2} tiene el siguiente resultado: ${operaciones[operacion]}`
  );
}