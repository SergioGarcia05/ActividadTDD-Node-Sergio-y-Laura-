import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

describe('Pruebas para la función fibonacci(n)', () => {
  it('debe devolver 0 para n = 0 y 1 para n = 1 y n = 2', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
  });

  it('debe calcular correctamente valores intermedios (ej. 5 y 10)', () => {
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(10)).toBe(55);
  });

  it('debe calcular correctamente el límite superior permitido (n = 78)', () => {
    expect(fibonacci(78)).toBe(8944394323791464);
  });

  it('debe lanzar RangeError con el mensaje exacto para entradas inválidas', () => {
    const mensajeError = "solo números enteros entre 0 y 78";

    // Números negativos y mayores a 78
    expect(() => fibonacci(-1)).toThrowError(new RangeError(mensajeError));
    expect(() => fibonacci(79)).toThrowError(new RangeError(mensajeError));

    // Decimales
    expect(() => fibonacci(2.5)).toThrowError(new RangeError(mensajeError));

    // NaN e Infinitos
    expect(() => fibonacci(NaN)).toThrowError(new RangeError(mensajeError));
    expect(() => fibonacci(Infinity)).toThrowError(new RangeError(mensajeError));
    expect(() => fibonacci(-Infinity)).toThrowError(new RangeError(mensajeError));

    // Tipos incorrectos (cadenas, null, undefined)
    expect(() => fibonacci("5")).toThrowError(new RangeError(mensajeError));
    expect(() => fibonacci(null)).toThrowError(new RangeError(mensajeError));
    expect(() => fibonacci(undefined)).toThrowError(new RangeError(mensajeError));
  });
});