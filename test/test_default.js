var util = require('util');
var assert = require("assert");

var pos_cases = require('../pos_cases');

describe('Loading default case', function(){

  beforeEach(function(){
    assert(pos_cases)
    pos_cases.unloadAll();
  });

  it('Can load on loadCase',function() {
    pos_cases.loadCase('0');

    assert(Object.keys(pos_cases.cases).length == 1)

    var case0 = pos_cases.cases['0']
    assert(case0)
    assert(case0.case == '0')
    assert(case0.name == 'Default implementation')
  });

  it('Can load on loadAll',function() {
    pos_cases.loadAll();

    assert(Object.keys(pos_cases.cases).length > 0)

    var case0 = pos_cases.cases['0']
    assert(case0)
    assert(case0.case == '0')
    assert(case0.name == 'Default implementation')
  });

});
