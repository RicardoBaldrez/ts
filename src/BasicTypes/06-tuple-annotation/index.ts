// type com tamanho fixo, mas com a possibilidade de ter vários tipos firmados
const clientsData: [number, string] = [1, 'Ricardo'];
// clientsData[0] = '100'; Dá erro pois o tipo do valor passado para a posição 0 não é igual o tipo que se esepra
clientsData[0] = 100;
console.log(clientsData);

// -------------------------------------------------------------------------

const clientsDataExemploReadonly: readonly [number, string] = [1, 'Ricardo'];
console.log(clientsDataExemploReadonly);

// -------------------------------------------------------------------------

const clientsDataExemploReadonly2: ReadonlyArray<string | number> = [
  1,
  'Ricardo',
];
console.log(clientsDataExemploReadonly2);

// -------------------------------------------------------------------------

const clientsData1: [number, string, number?] = [1, 'Ricardo'];
console.log(clientsData1);

// -------------------------------------------------------------------------

const clientsData2: [number, string, ...number[]] = [1, 'Ricardo', 182, 21, 13];
console.log(clientsData2);
