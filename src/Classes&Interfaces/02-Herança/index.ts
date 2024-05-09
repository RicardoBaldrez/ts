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
  getFullName(): string {
    return `Nome vindo da classe Student: ${this.name} ${this.lastName}`;
  }
}

const studentOne = new Student('Ricardo', 'Baldrez', 33, '386.495.238-70');
console.log(studentOne.getFullName());
