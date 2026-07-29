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