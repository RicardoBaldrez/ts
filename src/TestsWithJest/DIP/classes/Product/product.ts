import { ProductItem } from '../interfaces/product-item';

export class Product implements ProductItem {
  constructor(
    public name: string,
    public price: number,
  ) {}
}
