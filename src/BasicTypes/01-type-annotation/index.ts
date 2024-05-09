const name: string = 'Ricardo';
const age: number = 33;
const adult: boolean = true;
const symbol: symbol = Symbol('symbol');

// Arrays
const numberArray: Array<number> = [1, 2, 3];
const numberArray1: number[] = [1, 2, 3];

const stringArray: Array<string> = ['1', '2', '3'];
const stringArray1: string[] = ['1', '2', '3'];

// Objects
const person: {
  name: string;
  age: number;
  adult?: boolean; // ? = optional
} = {
  name: 'Ricardo',
  age: 33,
  adult: true,
};

// Functions
function sum(x: number, y: number): number {
  return x + y;
}
const sum1: (x: number, y: number) => number = (x, y): number => x + y;

export default {
  name,
  age,
  adult,
  symbol,
  numberArray,
  numberArray1,
  stringArray,
  stringArray1,
  person,
  sum,
  sum1,
};
