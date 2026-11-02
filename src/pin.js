// src/pin.js
export function esPinValido(pin) {
  // 1. Validar tipo string y longitudes permitidas (4 o 6)
  if (typeof pin !== 'string') {
    return false;
  }
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }

  // 2. Validar que todos los caracteres sean dígitos ASCII del '0' al '9'
  for (let i = 0; i < pin.length; i++) {
    const char = pin[i];
    if (char < '0' || char > '9') {
      return false;
    }
  }

  // 3. Validar que no sean todos los dígitos iguales
  const primerDigito = pin[0];
  let todosIguales = true;
  for (let i = 1; i < pin.length; i++) {
    if (pin[i] !== primerDigito) {
      todosIguales = false;
      break;
    }
  }

  if (todosIguales) {
    return false;
  }

  return true;
}