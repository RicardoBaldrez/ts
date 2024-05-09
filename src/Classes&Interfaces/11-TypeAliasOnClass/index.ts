type PersonType = {
  name: string;
  lastName: string;
  fullName(): string;
};

export class Person implements PersonType {
  constructor(
    public name: string,
    public lastName: string,
  ) {}

  fullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const person = new Person('Ricardo', 'Barbosa');
console.log(person.fullName());
