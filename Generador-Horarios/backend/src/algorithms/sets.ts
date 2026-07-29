// Crear un conjunto
export const crearConjunto = <T>(elementos: T[]): Set<T> => {
    return new Set(elementos);
};

// Cardinalidad
export const cardinalidad = <T>(conjunto: Set<T>): number => {
    return conjunto.size;
};

// Pertenencia
export const perteneceAlConjunto = <T>(elemento: T, conjunto: Set<T>): boolean => {
    return conjunto.has(elemento);
};

// Unión
export const union = <T>(conjuntoA: Set<T>, conjuntoB: Set<T>): Set<T> => {
    return new Set([
        ...conjuntoA,
        ...conjuntoB
    ]);
};

// Intersección
export const interseccion = <T>(conjuntoA: Set<T>, conjuntoB: Set<T>): Set<T> => {

    return new Set(
        [...conjuntoA].filter(elemento => conjuntoB.has(elemento))
    );

};

// Diferencia
export const diferencia = <T>(conjuntoA: Set<T>, conjuntoB: Set<T>): Set<T> => {

    return new Set(
        [...conjuntoA].filter(elemento => !conjuntoB.has(elemento))
    );

};

// Subconjunto
export const esSubconjunto = <T>(subconjunto: Set<T>, conjuntoPrincipal: Set<T>): boolean => {

    return [...subconjunto].every(
        elemento => conjuntoPrincipal.has(elemento)
    );

};