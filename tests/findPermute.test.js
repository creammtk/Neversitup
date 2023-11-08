const findPermute = require('../solutions/findPermute')

test('it should return an array with an input "a"', () => {
    expect(findPermute('a')).toEqual(['a']);
  });

  test('it should return correct permutations for input "ab"', () => {
    expect(findPermute('ab')).toEqual(['ab', 'ba']);
  });

  test('should return correct permutations for input "abc"', () => {
    expect(findPermute('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
  });

  test('should return correct permutations for input "aabb"', () => {
    expect(findPermute('aabb')).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
  });
