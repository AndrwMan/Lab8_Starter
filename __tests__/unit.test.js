// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('(123)-456-7890 is a phone #', () => {
    expect( functions.isPhoneNumber('(123)-456-7890') ).toBe(true);
});

test('(789)-456-0123 is a phone #', () => {
    expect( functions.isPhoneNumber('(789)-456-0123') ).toBe(true);
});

test('9 digits is not a phone #', () => {
    expect( functions.isPhoneNumber('123456789') ).toBe(false);
});

test('13 digits is not a phone #', () => {
    expect( functions.isPhoneNumber('1234567891011') ).toBe(false);
});

test('check gmail domain name', () => {
    expect( functions.isEmail('testing@gmail.com') ).toBe(true);
});

test('check yahoo domain', () => {
    expect( functions.isEmail('testing@yahoo.com') ).toBe(true);
});

test('missing @ is invalid', () => {
    expect( functions.isEmail('testinggmail.com') ).toBe(false);
});

test('no domain is invalid', () => {
    expect( functions.isEmail('testing@') ).toBe(false);
});

test('num and letters is valid', () => {
    expect( functions.isStrongPassword('abcdef123') ).toBe(true);
});

test('num,letters, underscores is valid', () => {
    expect( functions.isStrongPassword('abcdef_123') ).toBe(true);
});

test('! is invalid', () => {
    expect( functions.isStrongPassword('abcdef!123') ).toBe(false);
});

test('less than 4 chars is invalid', () => {
    expect( functions.isStrongPassword('abc') ).toBe(false);
});

test('first 2 single digit entries is valid', () => {
    expect( functions.isDate('1/1/0000') ).toBe(true);
});

test('first 2 double digit entries is valid', () => {
    expect( functions.isDate('12/30/9999') ).toBe(true);
});

test('all 2 digit entries is invalid', () => {
    expect( functions.isDate('11/20/22') ).toBe(false);
});

test('32th day is invalid', () => {
    expect( functions.isDate('11/32/22') ).toBe(false);
});

//only need 20 tests
/*
test('no delimiter is invalid', () => {
    expect( functions.isDate('112022') ).toBe(false);
});
*/

test('all numbers hexcode is valid', () => {
    expect( functions.isHexColor('#808080') ).toBe(true);
});

test('mixed numbers-chars hexcode is valid', () => {
    expect( functions.isHexColor('FF0000') ).toBe(true);
});

test('8 digit hexcode is invalid', () => {
    expect( functions.isHexColor('#80808080') ).toBe(false);
});

test('char H is not part of hexcode', () => {
    expect( functions.isHexColor('HHHHHH') ).toBe(false);
});







