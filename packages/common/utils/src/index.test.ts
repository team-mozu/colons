import { describe, it, expect } from 'vitest';
import { add, capitalize, uniqueArray, isEven } from './index';

describe('add function', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should add negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it('should add zero', () => {
    expect(add(5, 0)).toBe(5);
  });

  it('should handle decimal numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe('capitalize function', () => {
  it('should capitalize first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('should handle empty string', () => {
    expect(capitalize('')).toBe('');
  });

  it('should handle single character', () => {
    expect(capitalize('a')).toBe('A');
  });

  it('should lowercase other letters', () => {
    expect(capitalize('hELLO')).toBe('Hello');
  });

  it('should handle already capitalized string', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });
});

describe('uniqueArray function', () => {
  it('should remove duplicates from number array', () => {
    expect(uniqueArray([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should remove duplicates from string array', () => {
    expect(uniqueArray(['a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  });

  it('should handle empty array', () => {
    expect(uniqueArray([])).toEqual([]);
  });

  it('should handle array with no duplicates', () => {
    expect(uniqueArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle array with all same elements', () => {
    expect(uniqueArray([1, 1, 1, 1])).toEqual([1]);
  });
});

describe('isEven function', () => {
  it('should return true for even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
    expect(isEven(0)).toBe(true);
  });

  it('should return false for odd numbers', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(3)).toBe(false);
    expect(isEven(5)).toBe(false);
  });

  it('should handle negative numbers', () => {
    expect(isEven(-2)).toBe(true);
    expect(isEven(-1)).toBe(false);
  });
});