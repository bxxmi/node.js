// express 모듈 : express 모듈에서 제공하는 기능을 사용할 수 있는 객체를 반환하는 함수

var express = require("express");

// express에서 제공하는 객체를 사용할 수 있게 하는 app 객체 생성
var app = express();

// 주소만 작성하고 처음 들어왔을때 이벤트 처리
app.get("/", function(req, res) {
	// send : 클라이언트 브라우저에게 작성한 문자를 보내겠다
	res.send("ROOT");
});

// url 주소가 test일때 이벤트 처리
app.get("/test", function(req, res) {
	res.send("TEST");
});

var server = app.listen(3000, function() {
	console.log("서버 가동");
});