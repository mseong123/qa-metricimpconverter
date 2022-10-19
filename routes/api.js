'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.get('/api/convert',function(req,res,next) {
    let input=req.query.input;
    let initNum=convertHandler.getNum(input)
    let initUnit=convertHandler.getUnit(input)
    
    res.send(
      {initNum:initNum,
        initUnit:initUnit,
        returnNum:convertHandler.convert(initNum,initUnit),
        returnUnit:convertHandler.getReturnUnit(initUnit),
        string:convertHandler.getString(initNum,initUnit,convertHandler.convert(initNum,initUnit),convertHandler.getReturnUnit(initUnit))
        }
      
    )
    })
  };
