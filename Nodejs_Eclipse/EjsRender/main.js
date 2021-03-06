var express = require("express");
var app = express();
var ejs = require("ejs");

// ejs파일이 존재할 폴더 지정
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);

var router = require("./router/controller")(app);

var server = app.listen(3000, function() {
	console.log("서버가동");
});