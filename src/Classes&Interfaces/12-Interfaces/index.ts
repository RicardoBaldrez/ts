/**
 * Interface
 *
 * É voltado para modelar um objeto
 * E pode-se extender outras interfaces
 *
 * */

/**
 * Type alias
 * Serve também para modelarmos um obj, um tipo simples, uma forma ou qualquer outra coisa
 * E a interface não permite isso!
 *
 * Por exemplo:
 *    type QualquerCoisa = string | number | boolean
 *
 *    type Age = number;
 *    type FullName = string;
 *    type Person = Age & FullName
 */

interface PersonType {
  name: string;
  lastName: string;
  fullName(): string;
}

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
