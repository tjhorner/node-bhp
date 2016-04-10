function BigHistoryProject(cookie){
  var request = require('request'),
      cheerio = require('cheerio'),
      BHP_API_BASE = "https://school.bighistoryproject.com/userservices/",
      BHP_SESSION = { "Cookie": "", "Accept": "application/json" };

  var self = this; // for accessing `this` within functions

  function apiRoute(route){
    return BHP_API_BASE + route;
  }

  function setCookies(setCookieHeaders){

    BHP_SESSION["Cookie"] = "";

    setCookieHeaders.forEach(function(header){
      BHP_SESSION["Cookie"] += header.split(";")[0] + "; ";
    });
  }

  function toJSON(thing){
    return (typeof(thing) === "object" ? thing : JSON.parse(thing));
  }

  if(cookie){
    BHP_SESSION = { "Cookie": cookie, "Accept": "application/json" };
  }

  this.login = function(email, password, callback){
    request.get("https://school.bighistoryproject.com/pages/signin", function(err, res, body){
      // get the authenticity tokens
      var $ = cheerio.load(body);

      var params = {
        "__VIEWSTATE": $("input#__VIEWSTATE").val(),
        "__VIEWSTATEGENERATOR": $("input#__VIEWSTATEGENERATOR").val(),
        "__EVENTVALIDATION": $("input#__EVENTVALIDATION").val(),
        "content_0$txtUserName": email,
        "content_0$txtPassword": password,
        // below two are constant
        "content_0$btnLogin": "Sign In",
        "content_0$hidHashTwo": ""
      };

      request.post("https://school.bighistoryproject.com/pages/signin", { form: params, followRedirect: false }, function(err, res, body){
        setCookies(res.headers["set-cookie"]);
        self.getCurrentUser(function(user){
          callback(user);
        });
      });
    });
  };

  this.getSyllabus = function(callback){
    request.get(apiRoute("syllabus/"), function(err, res, body){
      if(!err) callback(toJSON(body));
    });
  };

  this.getUnitById = function(unitId, callback){
    request.get(apiRoute("unit/" + unitId), { headers: BHP_SESSION }, function(err, res, body){
      if(!err) callback(toJSON(body));
    });
  };

  this.getCurrentUser = function(callback){
    request.get(apiRoute("user"), { headers: BHP_SESSION }, function(err, res, body){
      if(!err) callback(toJSON(body));
    });
  };

  this.getGlossary = function(callback){
    request.get(apiRoute("glossary"), { headers: BHP_SESSION }, function(err, res, body){
      if(!err) callback(toJSON(body));
    });
  };

  return this;
};

module.exports = BigHistoryProject;
