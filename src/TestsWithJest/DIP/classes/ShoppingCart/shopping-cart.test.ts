import { Discount } from '../Discount/discount';
import { ShoppingCart } from './shopping-cart';
import { ProductItem } from './../interfaces/product-item';

afterEach(() => jest.clearAllMocks());

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createProductMock = (name: string, price: number) => {
  class ProductMock implements ProductItem {
    constructor(
      public name: string,
      public price: number,
    ) {}
  }

  return new ProductMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();

  const camiseta = createProductMock('Camiseta', 40);
  const caneta = createProductMock('Caneta', 15);

  sut.addProduct(camiseta);
  sut.addProduct(caneta);

  return { sut, discountMock };
};

describe('ShoppingCart', () => {
  it('should be an empty cart when no product is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 products added on cart', () => {
    const { sut } = createSutWithProducts();

    expect(sut.products().length).toBe(2);
    expect(sut.isEmpty()).toBe(false);
  });

  it('shoul test total and totalWith', () => {
    const { sut } = createSutWithProducts();

    expect(sut.total()).toBe(55);
    expect(sut.totalWithDiscount()).toBe(55);
  });

  it('should add products and clear cart', () => {
    const { sut } = createSutWithProducts();

    expect(sut.products().length).toBe(2);
    sut.clear();
    expect(sut.products().length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove product', () => {
    const { sut } = createSutWithProducts();

    expect(sut.products().length).toBe(2);
    sut.removeProduct(1);
    expect(sut.products().length).toBe(1);
    sut.removeProduct(0);
    expect(sut.products().length).toBe(0);
  });

  it('should call discount.calculate once when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should call discount.calculate with total price when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledWith(sut.totalWithDiscount());
  });
});
