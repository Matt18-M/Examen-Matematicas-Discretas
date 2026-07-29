// Calcular factorial
export const factorial = (n: number): number => {
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
};

// Calcular C(n, r)
export const calcularNumeroCombinaciones = (n: number, r: number): number => {

    if (r < 0 || r > n) {
        return 0;
    }

    return factorial(n) / (factorial(r) * factorial(n - r));

};

// Generar todas las combinaciones
export const generarCombinaciones = <T>(items: T[], size: number): T[][] => {

    if (size === 0) {
        return [[]];
    }

    if (items.length < size) {
        return [];
    }

    const combinaciones: T[][] = [];

    items.forEach((item, index) => {

        const restantes = items.slice(index + 1);

        const subCombinaciones = generarCombinaciones(
            restantes,
            size - 1
        );

        subCombinaciones.forEach(subCombinacion => {
            combinaciones.push([
                item,
                ...subCombinacion
            ]);
        });

    });

    return combinaciones;

};