// http 모듈 : 웹 애플리케이션을 개발할 수 있도록 제공되는 모듈
// 일반적인 웹서버와 동일하게 동작하며 웹 서버의 기능을 할 수 있는 모듈
// 클라이언트가 전달하는 파라미터는 url 모듈을 이용하면 코드로 받아내기 가능

var http = require("http");
var url = require("url");

// 1. createServer : 웹 서버객체를 만든다.
// req : 사용자의 요청 정보를 가지고 있음(링크를 누르거나, 주소를 입력하거나 ..)
// res : 응답에 대한 정보를 가지고 있음
var server = http.createServer(function(req, res) {

	// writeHead : 헤더 정보 셋팅
	res.writeHead(200, {
		"content-type" : "text/html"
	});

	var q = url.parse(req.url, true);

	res.write("<!Doctype html>");
	res.write("<html>");
	res.write("<head>");
	res.write("<meta charset='utf-8'/>");
	res.write("</head>");
	res.write("<body>");

	switch (q.pathname) {
	case "/":
		res.write("<h1>root 입니다.</h1>");
		res.write("<a href='test1?data1=111'>test1</a><br>");
		res.write("<a href='test2?data2=222'>test2</a><br>");
		break;
	case "/test1":
		res.write("<h1>test1 입니다.</h1>");
		// query : 파라미터 데이터가 query 객체에 담김
		res.write("<h1>data1 : " + q.query.data1 + "<br/>");
		break;
	case "/test2":
		res.write("<h1>test2 입니다.</h1>");
		// query : 파라미터 데이터가 query 객체에 담김
		res.write("<h1>data2 : " + q.query.data2 + "<br/>");
		break;
	}

	// write : 브라우저로 응답 결과를 전달
	res.write("</body>");
	res.write("</html>");

	// end : 응답 결과를 클라이언트로 보낼 수 있음
	res.end();
});

// 2. listen : 웹 서버를 동작시킨다.
server.listen(3000);
console.log("서버가동");