const reverse = require('./index');

test('Reverse function exist', ()=>{
    expect(reverse).toBeDefined();
});

test('Reverse a string', ()=>{
    expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', ()=>{
    expect(reverse('  abcd')).toEqual('dcba  ');
});
