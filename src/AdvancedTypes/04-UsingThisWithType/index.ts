export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this;
  }

  sub(n: number): this {
    this.numero -= n;
    return this;
  }

  div(n: number): this {
    this.numero /= n;
    return this;
  }

  mult(n: number): this {
    this.numero *= n;
    return this;
  }
}

// Podemos fazer a chamada em cadeia por usar o this
const calculadora = new Calculadora(10);
calculadora.add(5).mult(2);
console.log(calculadora);

// Builder -> Setando partes dos objetos aos poucos
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setUrl('http://www.google.com').setMethod('get').send();
