export class Person {
  constructor(
    private name: string,
    private lastname: string,
    private age: number,
    private _cpf: string,
  ) {}

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    // /\D/g = Tirando tudo que não seja número de da string
    return this._cpf.replace(/\D/g, '');
  }
}

const personOne = new Person('Ricardo', 'Barbosa', 33, '386.495.238-70');
personOne.cpf = '222.222.222-11';
console.log(personOne.cpf);
