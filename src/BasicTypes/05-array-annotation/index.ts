export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acc, total) => (total *= acc), 1);
}

const resultMultiply = multiplyArgs(1, 2, 3, 4, 5);
console.log(resultMultiply);

export function concatStrings(...args: string[]): string {
  return args.reduce((acc, total) => acc + total);
}

const resultConcat = concatStrings('Ricardo', 'Barbosa');
console.log(resultConcat);

export function toUpperCaseStrings(...args: string[]): string[] {
  return args.map((arg) => arg.toUpperCase());
}

const upperStrings = toUpperCaseStrings('corinthians', 'detroit red wings');
console.log(upperStrings);
