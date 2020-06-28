var express = require("express");
var app = express();
var controller1 = require("./router/controller1")(app);
var controller2 = require("./router/controller2")(app);

// 유지 보수 어려운 예
// app.get("/", function(req, res) {
// res.send("ROOT");
// });
//
// app.get("/test1", function(req, res) {
// res.send("TEST1");
// });
//
// app.get("/test2", function(req, res) {
// res.send("TEST2");
// });
//
// app.get("/test3", function(req, res) {
// res.send("TEST3");
// });

var server = app.listen(3000, function() {
	console.log("서버 가동");
});