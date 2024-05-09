// UNDEFINED
let x;
console.log(x); // Valor undefined, já que não tem um valor definido

// Factory Function
export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

// NULL
export function squareOf(x: unknown) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfNumber = squareOf(2);
const squareOfString = squareOf('2');

console.log(squareOfNumber);
console.log(squareOfString);

if (squareOfNumber === null) {
  console.log('Não foi passado um número');
} else {
  console.log(squareOfNumber);
}
