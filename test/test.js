var config = require('./config'),
    BHP = require('../'),
    bhp = new BHP(),
    assert = require('assert');

describe('BigHistoryProject', function(){
  describe('login(username, password)', function(){
    this.timeout(10000);

    it('should login a user successfully', function(done){
      bhp.login(config.email, config.password, function(user){
        assert(user.FirstName);
        assert(user.Email);
        done();
      });
    });
  });

  describe('getSyllabus()', function(){
    it('should return the Big History Project syllabus', function(done){
      bhp.getSyllabus(function(syllabus){
        assert.equal(syllabus[0].Title, "What Is Big History?");
        done();
      });
    });
  });

  describe('getUnitById(unit)', function(){
    it('should return a unit by its GUID', function(done){
      bhp.getUnitById("{F7141A18-D6CF-4893-98B0-14C5D16BA350}", function(unit){
        assert.equal(unit.ID, "{F7141A18-D6CF-4893-98B0-14C5D16BA350}");
        done();
      });
    });
  });

  describe('getCurrentUser()', function(){
    it('should return the currently logged in user', function(done){
      bhp.getCurrentUser(function(user){
        assert(user.FirstName);
        assert(user.Email);
        done();
      });
    });
  });
});
