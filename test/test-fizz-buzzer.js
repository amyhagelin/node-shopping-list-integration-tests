const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer.js');


describe('fizzBuzzer', function() {

  // test the normal case
  it('should return fizz, buzz, or fizz-buzz depending on number', function() {
    // range of normal inputs, including
    const normalCases = [
      {a: 3, expected: 'fizz'},
      {a: 5, expected: 'buzz'},
      {a: 15, expected: 'fizz-buzz'}
    ];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      ['1'],
      ['!']
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input[0])
      }).should.throw(Error);
    });
  });
});