export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return +(price - price * this.discount).toFixed(2);
  }
}

export class NoDiscount extends Discount {}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}
