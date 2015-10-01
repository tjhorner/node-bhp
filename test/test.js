var BHP = require('../'),
    bhp = new BHP(process.env.BIGHISTORY_COOKIE),
    assert = require('assert');

describe('BigHistoryProject', function(){
  describe('#getSyllabus()', function(){
    it('should return the Big History Project syllabus', function(done){
      bhp.getSyllabus(function(syllabus){
        assert.equal(syllabus[0].Title, "What Is Big History?");
        done();
      });
    });
  });

  describe('#getUnitById()', function(){
    it('should return a unit by its GUID', function(done){
      bhp.getUnitById("{F7141A18-D6CF-4893-98B0-14C5D16BA350}", function(unit){
        assert.equal(unit.ID, "{F7141A18-D6CF-4893-98B0-14C5D16BA350}");
        done();
      });
    });
  });
});
