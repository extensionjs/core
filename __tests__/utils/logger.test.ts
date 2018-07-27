import { logger, createLogger } from '../../src/utils';

test('Instance should exist', () => {
  logger.info('Test message');
  expect(logger).not.toBe(undefined);
  expect(logger).not.toBe(null);
});

test('Logger with custom prefix', () => {
  const customLogger = createLogger('CustomLogger');
  customLogger.info('Test message with custom prefix!');
  expect(customLogger).not.toBe(undefined);
  expect(customLogger).not.toBe(null);
});
