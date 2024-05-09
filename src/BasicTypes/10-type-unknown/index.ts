// Unknown = parecido com any, porém mais seguro
// Forçará você a fazer uma checagem de tipos antes de qualquer operação

let x;

x = 100;
x = 'Luiz';
x = 10;

const y = 800;
// Ele entende que o x tem uma string como valor e não permite a operação
// Então sempre terá que ser checado se o valor corresponde a um valor aritmético

if (typeof x === 'number') console.log(x + y);
