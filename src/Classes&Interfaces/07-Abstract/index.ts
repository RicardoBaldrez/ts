// Abstract class diz que não podemos instânciar diretamente ela, e sim extendê-la

export abstract class Personagem {
  protected abstract iconPersonagem: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordaoDeAtaque();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(
      `${this.iconPersonagem} - ${this.nome} agora tem ${this.vida} de vida`,
    );
  }

  abstract bordaoDeAtaque(): void;
}

export class Guerreira extends Personagem {
  protected iconPersonagem = '\u{1F9DD}';

  bordaoDeAtaque(): void {
    console.log(this.iconPersonagem + ' Guerreira ao ATAQUEEEE!');
  }
}

export class Monstro extends Personagem {
  protected iconPersonagem = '\u{1F9DF}';

  bordaoDeAtaque(): void {
    console.log(this.iconPersonagem + ' Monstro AUUUUUUU em ATAQUEEEE!');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 800);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);

monstro.atacar(guerreira);
