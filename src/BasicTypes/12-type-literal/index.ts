let x = 10; // eslint-disable-line
x = 200;
// x = 'Ricardo';
// x foi inferido pelo type number já que iniciou com 10, por ser um let podemos redeclarar outros valores, mas somente com o mesmo tipo

const y = 10; // Tipo literal pois o tipo de y é 10, criamos com const e não poderá ser modificado

const person = {
  name: 'Ricardo' as const,
  lastname: 'Barbosa',
};

// person.name = 'AAA'; Não é possível por termos definido que é uma const
person.lastname = 'Baldrez';
console.log(person);

// Module mode
export default { x, y };
