const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    test('test valid GET input to /api/convert',function(done){
        chai.request(server)
            .get('/api/convert')
            .query({input:'10L'})
            .end(function(err,res){
                assert.equal(res.body.initNum,10)
                done();
            })
    })

    test('test invalid GET input to /api/convert',function(done){
        chai.request(server)
            .get('/api/convert')
            .query({input:'32g'})
            .end(function(err,res){
                
                assert.equal(res.text,'invalid unit')
                done();
            })
    })

    test('test invalid GET input numbers to /api/convert',function(done){
        chai.request(server)
            .get('/api/convert')
            .query({input:'3/7.2/4kg'})
            .end(function(err,res){
                
                assert.equal(res.text,'invalid number')
                done();
            })
    })

    test('test invalid GET input numbers AND input to /api/convert',function(done){
        chai.request(server)
            .get('/api/convert')
            .query({input:'3/7.2/4kilomegagram'})
            .end(function(err,res){
                
                assert.equal(res.text,'invalid number and unit')
                done();
            })
    })

    test('test no numbers to /api/convert',function(done){
        chai.request(server)
            .get('/api/convert')
            .query({input:'kg'})
            .end(function(err,res){
                
                assert.equal(res.body.initNum,1)
                done();
            })
    })

});
