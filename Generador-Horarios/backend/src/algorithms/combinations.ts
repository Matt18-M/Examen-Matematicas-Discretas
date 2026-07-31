import type { Course } from "../../generated/prisma/client.js";

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

// Generar todas las combinaciones (se mantiene igual)
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

// Agrupar las materias por nombre
export const agruparMateriasPorNombre = (
    materias: Course[]
): Course[][] => {

    const grupos = new Map<string, Course[]>();

    materias.forEach(materia => {

        const grupo = grupos.get(materia.name);

        if (grupo) {
            grupo.push(materia);
        } else {
            grupos.set(materia.name, [materia]);
        }

    });

    return [...grupos.values()];

};

// Generar todas las combinaciones posibles de paralelos
export const generarCombinacionesParalelos = (
    grupos: Course[][]
): Course[][] => {

    const resultado: Course[][] = [];

    const backtracking = (
        indice: number,
        horarioActual: Course[]
    ) => {

        if (indice === grupos.length) {

            resultado.push([...horarioActual]);

            return;

        }

        const grupoActual = grupos[indice]!;

        for (const paralelo of grupoActual) {

            horarioActual.push(paralelo);

            backtracking(indice + 1, horarioActual);

            horarioActual.pop();

        }

    };

    backtracking(0, []);

    return resultado;

};