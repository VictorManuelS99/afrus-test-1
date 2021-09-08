//Problema 1: Se debe crear una solución que dado 2 números X y Y
//cuales quiera, se obtenga la multiplicación de los mismos SIN usar
//el operador de multiplicación *.

function multiplicar(x, y) {
  let i = 0;

  for (let index = 0; index < y; index++) {
    i += x;
  }

  console.log(i);
}

multiplicar(2, 5);
