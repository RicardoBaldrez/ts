export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    produtos.map((produto) => {
      this.produtos.push(produto);
    });
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((total, curr) => (total += curr.preco), 0);
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

const produtoOne = new Produto('Camiseta', 49.9);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produtoOne);
console.log(carrinhoDeCompras);
console.log(carrinhoDeCompras.quantidadeProdutos());
console.log(carrinhoDeCompras.valorTotal());
