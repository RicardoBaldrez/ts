type Product = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _products: Product[] = [];
  private _orderStatus: OrderStatus = 'open';

  get products(): Readonly<Product[]> {
    return this._products;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  addProduct(product: Product): void {
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

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Your cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(
      `Your purchase with total of $${this.total()} was made successfully.`,
    );
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void {
    console.log('Send message:', msg);
  }

  saveOrder(): void {
    console.log('Order saved successfully');
  }

  clear(): void {
    console.log('Shopping carts was cleaned...');
    this._products.length = 0;
  }

  isEmpty(): boolean {
    return this._products.length === 0;
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addProduct({ name: 'Kratos Funko', price: 50.9 });
shoppingCart.addProduct({ name: 'Kratos Shirt', price: 70.9 });
shoppingCart.addProduct({ name: 'Kratos pants', price: 120.9 });
// shoppingCart.clear();

console.log(shoppingCart.products);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
