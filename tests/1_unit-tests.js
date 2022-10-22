const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('read whole number',function(){
        assert.equal(convertHandler.getNum('1mi'),1)
    })
    test('read decimal number',function(){
        assert.equal(convertHandler.getNum('1.3265mi'),1.3265)
    })
    test('read fractional number',function(){
        assert.equal(convertHandler.getNum('5/2mi'),2.5)
    })
    test('read fractional number with decimal',function(){
        assert.equal(convertHandler.getNum('5.0/2mi'),2.5)
    })
    test('read double fraction and returning null',function(){
        assert.equal(convertHandler.getNum('3/2/3mi'),null)
    })
    test('default to 1 when no numerical input provided',function(){
        assert.equal(convertHandler.getNum('mi'),1)
    })
    test('read each valid unit input',function(){
        assert.equal(convertHandler.getUnit('1mi'),'mi')
    })
    test('return null for invalid input unit',function(){
        assert.equal(convertHandler.getReturnUnit('mil'),null)
    })
    test('return correct unit for each valid input unit',function(){
        assert.equal(convertHandler.getReturnUnit('mi'),'km')
    })
    test('return spelled out unit for each valid input unit',function(){
        assert.equal(convertHandler.spellOutUnit('mi'),'miles')
    })
    test('convert L to gal',function(){
        assert.equal(convertHandler.getReturnUnit('L'),'gal')
    })
    test('convert gal to L',function(){
        assert.equal(convertHandler.getReturnUnit('gal'),'L')
    })
    test('convert mi to km',function(){
        assert.equal(convertHandler.getReturnUnit('mi'),'km')
    })
    test('convert km to mi',function(){
        assert.equal(convertHandler.getReturnUnit('km'),'mi')
    })
    test('convert lbs to kg',function(){
        assert.equal(convertHandler.getReturnUnit('lbs'),'kg')
    })
    test('convert kg to lbs',function(){
        assert.equal(convertHandler.getReturnUnit('kg'),'lbs')
    })
});