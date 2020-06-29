var express = require("express");
var app = express();
var ejs = require("ejs");
var controller = require("./router/controller")(app);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);

// html 파일에서 다른 파일을 이용할 경우에 public 폴더에 있는 것들을 사용하겠다고 지정
app.use(express.static("public"));

var server = app.listen(3000, function() {
	console.log("서버구동");
});