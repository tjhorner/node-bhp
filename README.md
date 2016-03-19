# node-bhp

Node module to interact with the Big History Project API.

## Authenticated Methods

`getUnitById()` and some other methods will require authentication. This requires you to login with your Big History Project credentials like so:

```javascript
bhp.login("sickemail", "lamepassword", function(user){
  // user object will be exposed here, cookies are saved automatically and you're ready to go!
});
```

You can also manually send a cookie with the initialization like this:

```javascript
var BHP = require('bhp');

var ChangeOverTimeDisciplinesThresholdsClaimTesters = new BHP("some cookie");
```

But cookies do expire, so you'll probably want to do the login method.

**Protip:** You can sign up for a dummy teacher account if you don't feel like using your student account.

### MORE DOCUMENTATION COMING SOON! YAY!
