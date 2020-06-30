var express = require("express");
var app = express();
var ejs = require("ejs");
var cookieParser = require("cookie-parser");
var session = require("express-session");

// 렌더링 셋팅
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);

// 쿠키 셋팅
app.use(cookieParser());

// 세션 셋팅
app.use(session({
	// 정의한 문자열로 세션 암호화작업
	// 해당 문자열은 아무거나 사용가능
	secret : "abcdefg",
	// 세션 정보 재정의 여부
	resave : false,
	// saveUninitialized : 초기화 값 저장하지 않을 것인지 물어보는 것
	saveUninitialized : true
}));

// 컨트롤러 셋팅
var router = require("./router/controller")(app);

// 서버 셋팅
var server = app.listen(3000, function() {
	console.log("서버 가동");
});