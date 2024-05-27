import { IndividualCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have properties firstName, lastName, cpf', () => {
    const sut = createIndividualCustomer(
      'Ricardo',
      'Barbosa',
      '386.495.238-70',
    );

    expect(sut).toHaveProperty('firstName', 'Ricardo');
    expect(sut).toHaveProperty('lastName', 'Barbosa');
    expect(sut).toHaveProperty('cpf', '386.495.238-70');
  });

  it('should call method getName() to get complete name', () => {
    const sut = createIndividualCustomer(
      'Ricardo',
      'Barbosa',
      '386.495.238-70',
    );

    expect(sut.getName()).toBe('Client name is: Ricardo Barbosa');
  });

  it('should call method getIDN() to get the cpf', () => {
    const sut = createIndividualCustomer(
      'Ricardo',
      'Barbosa',
      '386.495.238-70',
    );

    expect(sut.getIDN()).toBe('386.495.238-70');
  });
});
