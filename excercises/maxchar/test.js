const maxChar = require('./index');

test('maxChar function is defined', () => {
    expect(maxChar).toBeDefined();
});

test('Finds the most used char', () => {
    expect(maxChar('a')).toEqual('a');
    expect(maxChar('abdakauada')).toEqual('a');
});

test('Works with number with character', () => {
    expect(maxChar('a1d1f4g1h1')).toEqual('1');
});