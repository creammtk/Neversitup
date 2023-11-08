const findOdd = require('../solutions/findOdd')

test('it should return the one that appears an odd number of times', () => { 
    expect(findOdd([7])).toBe(7);
    expect(findOdd([0])).toBe(0);
    expect(findOdd([1,1,2])).toBe(2);
    expect(findOdd([0,1,0,1,0])).toBe(0);
    expect(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])).toBe(4);
})

test('it should handle negative', () => { 
    expect(findOdd([-7,-7,0,-4,-4,-4,0])).toBe(-4);
    expect(findOdd([-7,1,2,1,2,0,-4,-4,0])).toBe(-7); 
})

test('it should handle empty array', () => { 
    expect(findOdd([])).toBe(undefined); 
})
