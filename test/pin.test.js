import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/pin.js';

describe('Pruebas para la función esPinValido(pin)', () => {

    it('debe aceptar PIN válidos de 4 y 6 dígitos', () => {
        expect(esPinValido('1234')).toBe(true);
        expect(esPinValido('123456')).toBe(true);
    });

    it('debe aceptar PIN con ceros al principio', () => {
        expect(esPinValido('0123')).toBe(true);
        expect(esPinValido('001234')).toBe(true);
    });

    it('debe rechazar PIN con todos los dígitos iguales', () => {
        expect(esPinValido('1111')).toBe(false);
        expect(esPinValido('000000')).toBe(false);
    });

    it('debe rechazar PIN con una longitud distinta de 4 o 6', () => {
        expect(esPinValido('123')).toBe(false);
        expect(esPinValido('12345')).toBe(false);
        expect(esPinValido('1234567')).toBe(false);
    });

    it('debe rechazar PIN que contengan caracteres no numéricos', () => {
        expect(esPinValido('12a4')).toBe(false);
        expect(esPinValido('12 4')).toBe(false);
        expect(esPinValido('-123')).toBe(false);
        expect(esPinValido('12.4')).toBe(false);
    });

    it('debe rechazar valores que no sean cadenas', () => {
        expect(esPinValido(1234)).toBe(false);
        expect(esPinValido(null)).toBe(false);
        expect(esPinValido(undefined)).toBe(false);
        expect(esPinValido([])).toBe(false);
    });

});