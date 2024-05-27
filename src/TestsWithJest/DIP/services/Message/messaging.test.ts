import { Messaging } from './messaging';

const createSut = () => new Messaging();

describe('Messaging', () => {
  beforeEach(() => jest.clearAllMocks());

  const sut = createSut();

  it('should return undefined', () =>
    expect(sut.sendMessage('New message')).toBeUndefined());

  it('should call console log', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('New message');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should return "Send message:, msg"', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('New message');
    expect(consoleSpy).toHaveBeenCalledWith('Send message:', 'New message');
  });
});
