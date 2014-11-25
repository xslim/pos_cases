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

});
