function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    
    if (Array.isArray(input.match(/\d+[+-/*]*/g))) {
      if (input.match(/[/]/g) && input.match(/[/]/g).length>1) { 
        result=null;
      }
      else
        result=parseFloat(eval(input.match(/\d+[+-/*]*/g).join('')))
    }
    else if (!input.match(/\d+[+-/*]*/g)) {
      result=1;
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result
    if (Array.isArray(input.match(/[a-zA-Z]+/))) {
      if (input.match(/[a-zA-Z]+/).join('')==='l') {
        result='L'
      }
      else if (input.match(/[a-zA-Z]+/).join('')==='L'){
        result='L'
      }
        
      else result=input.match(/[a-zA-Z]+/).join('').toLowerCase();
      }
      
      return result;
    }

  
  this.getReturnUnit = function(initUnit) {
    
    let result;
    switch (initUnit){
      case 'gal':
        result='L';
        break;
      case 'L':
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
        result=null;
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
      case 'L':
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

    
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    
    let result = initNum+' '+this.spellOutUnit(initUnit)+' converts to '+returnNum+' '+this.spellOutUnit(returnUnit)
    
    

    return result;
  };
  
}

module.exports = ConvertHandler;
