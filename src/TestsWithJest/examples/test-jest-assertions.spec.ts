describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();
    expect(null).not.toBeTruthy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(12);

    expect(number).toBeCloseTo(10.01, 1);
    expect(number).toBeCloseTo(9.996);

    // expect(number).toBeNull();
    expect(number).not.toBeNull();

    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Ricardo', age: 30 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);

    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 30);
    // expect(person).not.toHaveProperty('age');
    expect(person).not.toHaveProperty('lastName');
    // expect(person.name).toBe('Luiz');
    expect(person.name).toBe('Ricardo');
  });
});
