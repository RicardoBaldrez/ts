import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  it('should return certinly values', () => {
    const sut = createSut('Mouse', 49.9);

    expect(sut).toHaveProperty('name');
    expect(sut).toHaveProperty('price');

    expect(sut.name).toBe('Mouse');
    expect(sut.price).toBeCloseTo(49.9);

    expect(typeof sut.name).toEqual('string');
    expect(typeof sut.price).toEqual('number');
  });
});
