// Union type = Diz que um parâmetro, variável ou uma definição de função pode ter mais de um tipo

export function addOrConcat(
  a: number | string,
  b: number | string,
): string | number {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a} ${b}`;
}

console.log(addOrConcat(10, 35));
console.log(addOrConcat('Corinthians', 'Campeão Mundial de 2012'));
