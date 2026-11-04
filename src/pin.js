// src/pin.js (Refactorizado)
export function esPinValido(pin) {
  if (typeof pin !== 'string') return false;
  
  // Expresión regular: exactamente 4 o 6 dígitos ASCII
  const formatoValido = /^(\d{4}|\d{6})$/.test(pin);
  if (!formatoValido) return false;

  // Comprobar que no sean todos los dígitos iguales
  const todosIguales = pin.split('').every(char => char === pin[0]);
  
  return !todosIguales;
}