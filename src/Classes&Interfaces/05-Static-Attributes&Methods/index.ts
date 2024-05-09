export class Person {
  static defaultAge = 0;
  static defaultCpf = '000.000.000-00';

  constructor(
    public name: string,
    public lastname: string,
    public age: number,
    public cpf: string,
  ) {}

  // Método que pode ser usado mesmo sem instanciar a classe
  static createPerson(name: string, lastname: string): Person {
    return new Person(name, lastname, Person.defaultAge, Person.defaultCpf);
  }
}

const personOne = new Person('Ricardo', 'Barbosa', 33, '386.495.238-70');
console.log(personOne);

// Exemplo da chamada do método estático
const person2 = Person.createPerson('Nathalia', 'Oliveira');
console.log(person2);
