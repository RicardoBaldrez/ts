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
