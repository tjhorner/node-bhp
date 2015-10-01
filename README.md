# node-bhp

Node module to interact with the Big History Project API.

## Authenticated Methods

`getUnitById()` and some other methods will require authentication. This requires you pass in a login cookie to the BHP object.

You can get your login cookie by logging into bighistoryproject.com then inspect any network request after that. Copy and paste the `ASP.NET_SessionId` and `.ASPXAUTH` cookies and pass them in. It will look something like this:

```
ASP.NET_SessionId=xxxxxxxxxxxxxxxx; .ASPXAUTH=xxxxxxxxxxxxxxx;
```

I know this isn't the best way to authenticate with this, but as Big History Project has no API I can't really think of a better way than this or emulating a DOM and submitting the signin form then getting the cookie. The latter is very insecure.

## Testing

Set the `BIGHISTORY_COOKIE` environment variable to the result of the method described above and run `npm test`.
