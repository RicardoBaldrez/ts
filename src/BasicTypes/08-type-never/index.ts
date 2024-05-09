// Tipo que mostra que nada nunca será retornado
// No caso abaixo essa função percebe um erro e quebrará a aplicação, caso não seja tratada, então somente lança um erro
export function createrError(): never {
  throw new Error('Error Lançado');
}

createrError();
