var util = require('util');
var assert = require("assert");

var pos_cases = require('../pos_cases');

describe('Helper functions', function(){

  before(function(){
    assert(pos_cases)
  });

  it('Checks Final state',function() {
    assert(pos_cases.isFinalState('CANCELLED') === true)
  });

  it('Checks Error state',function() {
    assert(pos_cases.isErrorState('DECLINED') === true)
    assert(pos_cases.isErrorState('ACCEPTED') === false)
  });

  it('Parses state with value',function() {
    var state = "PIN_DIGIT_ENTERED 1";
    var parsed = pos_cases.parseState(state);

    assert.equal(parsed.state, 'PIN_DIGIT_ENTERED')
    assert.equal(parsed.value, '1')
  });

  it('Parses state with values',function() {
    var state = "APPLICATION_SELECTED 1 MC_NL";
    var parsed = pos_cases.parseState(state);

    assert.equal(parsed.state, 'APPLICATION_SELECTED')
    assert.equal(parsed.value, '1')
    assert.equal(parsed.values[0], '1')
    assert.equal(parsed.values[1], 'MC_NL')
  });

});
