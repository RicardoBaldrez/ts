import { ProductItem } from './product-item';

export interface ShoppingCartProtocol {
  products(): Readonly<ProductItem[]>;
  addProduct(product: ProductItem): void;
  removeProduct(index: number): void;
  total(): number;
  totalWithDiscount(): number;
  clear(): void;
  isEmpty(): boolean;
}
