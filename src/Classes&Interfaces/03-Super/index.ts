export class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

export class Student extends Person {
  constructor(
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    public room: string,
  ) {
    super(name, lastName, age, cpf); // Utilizando o construtor da classe super e fazendo o uso de mais uma prop(room) ao criar através do Student
  }

  getFullName(): string {
    const result = super.getFullName();
    return result;
  }
}

const studentOne = new Student(
  'Ricardo',
  'Baldrez',
  33,
  '386.495.238-70',
  '0001',
);
console.log(studentOne.getFullName());
