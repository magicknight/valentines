/**
 * Created by zhihua on 2/13/17.
 */
var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/valentines.js',function(req,res){
  res.sendFile(path.join(__dirname+'/valentines.js'));
  //__dirname : It will resolve to your project folder.
});


app.use('/lib', express.static(path.join(__dirname, 'lib')))

app.use('/', express.static(path.join(__dirname, '/')))


app.listen(8080);

console.log("Running at Port 8080");
