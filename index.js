function BigHistoryProject(){
  var Client = require('node-rest-client').Client,
      client = new Client(),
      BHP_API_BASE = "https://school.bighistoryproject.com/userservices/";

  function apiRoute(route){
    return BHP_API_BASE + route;
  }

  this.getSyllabus = function(callback){
    client.get(apiRoute("syllabus/"), function(data, response){
      callback(JSON.parse(data));
    });
  };

  this.getUnitById = function(unitId, callback){
    client.get(apiRoute("unit/" + unitId), function(data, response){
      callback(JSON.parse(data));
    });
  };

  return this;
};

module.exports = BigHistoryProject;
