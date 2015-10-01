var jsdom = require('node-jsdom'),
    jQuery = require('jquery');

function BigHistoryProject(cookie){
  var Client = require('node-rest-client').Client,
      client = new Client(),
      BHP_API_BASE = "https://school.bighistoryproject.com/userservices/";

  function apiRoute(route){
    return BHP_API_BASE + route;
  }

  if(cookie){
    BHP_SESSION = { "Cookie": cookie };
  }

  this.getSyllabus = function(callback){
    client.get(apiRoute("syllabus/"), function(data, response){
      callback(JSON.parse(data));
    });
  };

  this.getUnitById = function(unitId, callback){
    client.get(apiRoute("unit/" + unitId), { headers: BHP_SESSION }, function(data, response){
      callback(JSON.parse(data));
    });
  };

  return this;
};

module.exports = BigHistoryProject;
