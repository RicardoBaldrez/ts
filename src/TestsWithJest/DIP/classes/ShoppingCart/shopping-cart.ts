import { Discount } from '../Discount/discount';
import { ProductItem } from '../interfaces/product-item';
import { ShoppingCartProtocol } from '../interfaces/shopping-cart-protocol';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _products: ProductItem[] = [];

  constructor(private readonly discount: Discount) {}

  products(): Readonly<ProductItem[]> {
    return this._products;
  }

  addProduct(product: ProductItem): void {
    this._products.push(product);
  }

  removeProduct(index: number): void {
    this._products.splice(index, 1);
  }

  total(): number {
    return +this._products
      .reduce((total, current) => (total += current.price), 0)
      .toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  clear(): void {
    console.log('Shopping carts was cleaned...');
    this._products.length = 0;
  }

  isEmpty(): boolean {
    return this._products.length === 0;
  }
}
