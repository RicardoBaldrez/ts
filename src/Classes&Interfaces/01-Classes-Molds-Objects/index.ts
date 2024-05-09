export class Colaborator {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
  ) {}
}

export class Company {
  /* informação sem nenhuma palavra chave, assumimos que é public
     readonly name: string;
  */
  public readonly name: string;
  protected readonly cnpj: string;
  private readonly colaborators: Colaborator[] = [];

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addColaborator(colaborator: Colaborator): void {
    this.colaborators.push(colaborator);
  }

  showColaborators(): void {
    this.colaborators.map((colaborator) => {
      console.log(colaborator);
    });
  }
}

const companyOne = new Company('Google', '11.111.11/0001-11');
// console.log(companyOne);

const colaboratorOne = new Colaborator('Ricardo', 'Baldrez');
const colaboratorTwo = new Colaborator('Maria', 'Baldrez');
const colaboratorThree = new Colaborator('Vandelcir', 'Baldrez');
// console.log(colaboratorOne);
// console.log(colaboratorTwo);
// console.log(colaboratorThree);

companyOne.addColaborator(colaboratorOne);
companyOne.addColaborator(colaboratorTwo);
companyOne.addColaborator(colaboratorThree);
companyOne.showColaborators();
// console.log(companyOne);
