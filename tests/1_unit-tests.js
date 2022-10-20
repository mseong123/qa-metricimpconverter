const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('read whole number',function(){
        assert.equal(convertHandler.getNum('1mil'),1)
    })
    test('read decimal number',function(){
        assert.equal(convertHandler.getNum('1.3265mil'),1.3265)
    })
});