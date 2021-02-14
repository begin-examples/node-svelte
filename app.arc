@app
begin-app

@http
/api
  method get
  src api

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
