function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    if (Array.isArray(input.match(/\d+[+-/*]*/g))) {
      result=eval(input.match(/\d+[+-/*]*/g).join(''))
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result
    if (Array.isArray(input.match(/[a-zA-Z]+/))) {
      result=input.match(/[a-zA-Z]+/).join()
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    initUnit=initUnit.toLowerCase();
    let result;
    switch (initUnit){
      case 'gal':
        result='L';
        break;
      case 'l':
        result='gal';
        break;
      case 'km':
        result='mi';
        break;
      case 'mi':
        result='km';
        break;
      case 'kg':
        result='lbs';
        break;
      case 'lbs':
        result='kg';
        break;
      default:
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;

    switch (unit){
      case 'lbs':
        result='pounds';
        break;
      case 'kg':
        result='kilograms';
        break;
      case 'gal':
        result='gallons';
        break;
      case 'L':
        result='liters';
        break;
      case 'km':
        result='kilometers';
        break;
      case 'mi':
        result='miles';
        break;
      default:
        break;
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch (initUnit){
      case 'lbs':
        result=initNum*lbsToKg;
        break;
      case 'kg':
        result=initNum/lbsToKg;
        break;
      case 'gal':
        result=initNum*galToL;
        break;
      case 'l':
        result=initNum/galToL;
        break;
      case 'km':
        result=initNum/miToKm;
        break;
      case 'mi':
        result=initNum*miToKm;
        break;
      default:
        break;
    }

    
    return result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    
    let result = initNum+' '+this.spellOutUnit(initUnit)+' converts to '+returnNum+' '+this.spellOutUnit('km')
    
    

    return result;
  };
  
}

module.exports = ConvertHandler;
