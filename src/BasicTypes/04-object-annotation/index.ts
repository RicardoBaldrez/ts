export const person: {
  name: string;
  lastName: string;
  readonly age?: number;
} = {
  name: 'Ricardo',
  lastName: 'Baldrez',
  age: 33,
};
// person.age = 33; Não se pode agregar/modificar o valor por ser readonly

type Person2 = {
  name: string;
  lastName: string;
  readonly age?: number;
};

const fernando: Person2 = {
  name: 'Fernando',
  lastName: 'Barbosa',
};

console.log(fernando);
