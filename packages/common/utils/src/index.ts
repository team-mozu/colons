export function add(a: number, b: number): number {
  return a + b;
}

export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function uniqueArray<T>(array: T[]): T[] {
  return [...new Set(array)];
}

export function isEven(num: number): boolean {
  return num % 2 === 0;
}
