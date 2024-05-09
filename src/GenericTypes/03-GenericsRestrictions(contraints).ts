type ObtainKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

const obtainKey: ObtainKeyFn = (object, key) => object[key];

const animal = {
  type: 'Cachorro',
  color: 'Caramelo',
  vaccines: ['Vacina1', 'Vacina2'],
  age: 8,
};

const vaccines = obtainKey(animal, 'vaccines');
const color = obtainKey(animal, 'color');
console.log(vaccines, color);
