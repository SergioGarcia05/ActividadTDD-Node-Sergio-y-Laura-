import test from 'node:test';
import assert from 'node:assert/strict';
import { fibonacci } from '../src/fibonacci.js';

test('fibonacci(n) - excepciones y casos base', (t) => {
  // Lanza excepcion si n < 0
  assert.throws(() => fibonacci(-1), RangeError);
  assert.throws(() => fibonacci(-5), {
    name: 'RangeError',
    message: 'solo números enteros >=0'
  });

  // Casos base
  assert.strictEqual(fibonacci(0), 0);
  assert.strictEqual(fibonacci(1), 1);
});

test('fibonacci(n) - valores >= 2', (t) => {
  assert.strictEqual(fibonacci(2), 1);
  assert.strictEqual(fibonacci(3), 2);
  assert.strictEqual(fibonacci(4), 3);
  assert.strictEqual(fibonacci(5), 5);
  assert.strictEqual(fibonacci(6), 8);
});