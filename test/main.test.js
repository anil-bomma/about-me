QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST vowelCount function', assert => {
    assert.equal(vowelCount(""), 0, 'when no input is passed then count is 0');
    assert.equal(vowelCount("zzz"), 0, 'when input passed without vowel then count is 0');
    assert.equal(vowelCount("hello"), 2, 'when input passed with vowel then count is 2');
    assert.equal(vowelCount("aeiou"), 5, 'when input passed with all vowels in string, 5');
    assert.equal(vowelCount("12345"), 0, 'when number input is passed then return 0');
    assert.equal(vowelCount("!@#$%^&"), 0, 'when special charater input is passed then return 0');
    assert.equal(vowelCount(null), 'error', 'it will return error since passing null value');
})
