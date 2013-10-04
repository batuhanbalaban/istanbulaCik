var express = require('express');
var app = express();
 
app.listen(3000);

app.get('/', function(request, response) {
   response.send("This would be some HTML");
});