// Record -> é um Generic Padrão para precisa especificar o tipo da chave e valor
const person: Record<string, string | number> = {
  name: 'Ricardo',
  lastname: 'barbosa',
  age: 33,
};

console.log(person);

type ProtocolPerson = {
  name?: string;
  lastname?: string;
  age?: number;
};

// Required -> Transforma tudo em required e não opcional
type RequiredPerson = Required<ProtocolPerson>;

const person1: RequiredPerson = {
  name: 'Ricardo',
  lastname: 'barbosa',
  age: 33,
};

console.log(person1);

// Partial -> Transforma tudo que era required emopcional
type PartialPerson = Partial<RequiredPerson>;

const person2: PartialPerson = {
  name: 'Ricardo',
  lastname: 'barbosa',
  age: 33,
};
console.log(person2);

// Readonly -> Transforma tudo em readonly
type ReadonlyPerson = Readonly<RequiredPerson>;
const person3: ReadonlyPerson = {
  name: 'Ricardo',
  lastname: 'barbosa',
  age: 33,
};
console.log(person3);

// Pick -> Decide quais propriedades pegar
type PersonPick = Pick<RequiredPerson, 'name' | 'lastname'>;
const person4: PersonPick = {
  name: 'Ricardo',
  lastname: 'barbosa',
};
console.log(person4);

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
// Exclude -> Computa todos os tipos que estão em ABC e que não existem em CDE
type ExcludeType = Exclude<ABC, CDE>;
// Extract -> Computa os tipos que estão no ABC e podem ser atribuidos no CDE
type ExtractType = Extract<ABC, CDE>;

// Module mode
export default 1;
