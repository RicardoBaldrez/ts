interface ProtocolPerson<T, U> {
  name: T;
  lastName: T;
  age: U;
}

const student: ProtocolPerson<string, number> = {
  name: 'Ricardo',
  lastName: 'Baldrez',
  age: 33,
};

console.log(student);

// Definindo com valores padrão
interface ProtocolPersonDefault<T = string, U = number> {
  name: T;
  lastName: T;
  age: U;
}

const studentDefault1: ProtocolPerson<string, number> = {
  name: 'Ricardo',
  lastName: 'Baldrez',
  age: 33,
};

const studentDefault2: ProtocolPersonDefault<number, boolean> = {
  name: 123,
  lastName: 456,
  age: true,
};

console.log(studentDefault1, studentDefault2);
