// Calcular factorial
export const factorial = (n: number): number => {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

// Calcular C(n, r)
export const calculateCombinationCount = (
  n: number,
  r: number
): number => {
  if (r < 0 || r > n) {
    return 0;
  }

  return factorial(n) / (factorial(r) * factorial(n - r));
};

// Generar todas las combinaciones
export const generateCombinations = <T>(
  items: T[],
  size: number
): T[][] => {

  if (size === 0) {
    return [[]];
  }

  if (items.length < size) {
    return [];
  }

  const combinations: T[][] = [];

  items.forEach((item, index) => {

    const remaining = items.slice(index + 1);

    const subCombinations = generateCombinations(
      remaining,
      size - 1
    );

    subCombinations.forEach(subCombination => {
      combinations.push([item, ...subCombination]);
    });

  });

  return combinations;

};