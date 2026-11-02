export function fibonacci(n) {
    if (!Number.isInteger(n) || n < 0 || n > 78) {
        throw new RangeError("solo números enteros entre 0 y 78");
    }

    if (n === 0) {
        return 0;
    }

    let anterior = 0;
    let actual = 1;

    for (let i = 2; i <= n; i++) {
        let siguiente = anterior + actual;
        anterior = actual;
        actual = siguiente;
    }

    return actual;
}