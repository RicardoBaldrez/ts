// Declaration merging -> funciona somente com interface
/**
 * Criando duas interfaces com o mesmo nome, acontece uma mescla entre ambas
 */

export interface Person {
  name: string;
}

export interface Person {
  lastname: string;
}

// readonly address: Dizendo que não podemos atribuir nada ao address
// Somente leitura, mas no array podemos atribuir
// Para ser somente de leitura mesmo, adicionamos um readonly no tipo também
export interface Person {
  readonly address: readonly string[];
}

const person: Person = {
  name: 'Ricardo',
  lastname: 'Baldrez',
  address: ['Av. Cipriano Rodrigues'],
};

console.log(person);
