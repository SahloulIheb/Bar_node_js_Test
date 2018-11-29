var express = require('express');
var fs = require('fs');

var app = express();

var path = require('path');
var appDir = path.dirname(require.main.filename);
app.use(express.static(appDir + '/files/'));



app.get('/',function (req,res) {
    var rawdata = fs.readFileSync("Pense_bete.json");
    var student = JSON.parse(rawdata);
    //console.log(student.bars);
    res.render('todo.ejs', {bars: student.bars});

}).listen(8080);
