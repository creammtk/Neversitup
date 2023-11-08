const countSmile = require('../solutions/countSmile')

test('it should handle empty array', () => { 
    expect(countSmile([])).toBe(0); 
})

test('it should return the count of valid smiley face', () =>{
    expect(countSmile([':)', ';(', ';}', ':-D'])).toBe(2);
    expect(countSmile([';D', ':-(', ':-)', ';~)'])).toBe(3);
    expect(countSmile([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
})