import { Persistency } from './persistency';
describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  // System under test
  const sut = new Persistency();

  it('should return undefined', () => {
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console log once', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console log  with "Order saved successfully"', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Order saved successfully');
  });
});
