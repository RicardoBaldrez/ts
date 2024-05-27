import { EnterpriseCustomer } from './customer';

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('EnterpriseCustomer', () => {
  it('should have properties name, cnpj', () => {
    const sut = createEnterpriseCustomer(
      'GFT TECHNOLOGIES S.A.',
      '07.751.196/0001-03',
    );

    expect(sut).toHaveProperty('name', 'GFT TECHNOLOGIES S.A.');
    expect(sut).toHaveProperty('cnpj', '07.751.196/0001-03');
  });

  it('should call method getName() to get name', () => {
    const sut = createEnterpriseCustomer(
      'GFT TECHNOLOGIES S.A.',
      '07.751.196/0001-03',
    );

    expect(sut.getName()).toBe('Enterprise name is: GFT TECHNOLOGIES S.A.');
  });

  it('should call method getIDN() to get cnpj', () => {
    const sut = createEnterpriseCustomer(
      'GFT TECHNOLOGIES S.A.',
      '07.751.196/0001-03',
    );

    expect(sut.getName()).toBe('Enterprise name is: GFT TECHNOLOGIES S.A.');
  });
});
