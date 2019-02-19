//======<requirements>===========
var ip = require('ip'),
    express = require('express'),
    request = require('request'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    expressSanitizer = require('express-sanitizer');
//======</requirements>===========

//=======<APP SETUP>========
var app = express();

app.set("view engine", "ejs"); //use  embeded-javascript

app.use(express.static(__dirname + '/public')); //use public directory to server staic files

app.use(bodyParser.urlencoded({
    extended: true
})); // use body parser
app.use(methodOverride("_method")); //override methods of form (put/delete)
app.use(expressSanitizer());

//=======</APP SETUP>========



//any route we havent defined
app.get("*", function (req, res) {
    res.send("yo")
});

//port listener
app.listen('3001', ip.address(), function () {
    console.log("SERVER STARTED!!!");
    var address = ip.address() + ":3000";
    console.log("goto -> " + address);
});