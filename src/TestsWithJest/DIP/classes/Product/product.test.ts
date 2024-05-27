import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  it('should return correct type of values', () => {
    const sut = createSut('Mouse', 49.9);

    expect(typeof sut.name).toEqual('string');
    expect(typeof sut.price).toEqual('number');
  });

  it('should have correct values', () => {
    const sut = createSut('Mouse', 49.9);

    expect(sut.name).toBe('Mouse');
    expect(sut.price).toBeCloseTo(49.9);
  });

  it('should contain the name and price properties', () => {
    const sut = createSut('Mouse', 49.9);

    expect(sut).toHaveProperty('name');
    expect(sut).toHaveProperty('price');
  });
});
