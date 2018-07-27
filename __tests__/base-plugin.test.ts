/// <reference types="jest" />
import { DummyPlugin } from './mocking/dummy-plugin';

const plugin = new DummyPlugin();

test('Instance should exist', () => {
  expect(plugin).not.toBe(undefined);
  expect(plugin).not.toBe(null);
});

test('Validate DummyPlugin implementation', () => {
  expect(plugin.name).toBe('DummyPlugin');
  expect(plugin.version).toBe('1.0.0');
  expect(plugin.mainPage).toContain('index.html');
});
