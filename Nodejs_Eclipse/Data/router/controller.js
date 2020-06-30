// post 방식은 body-parser 모듈 설치 필요
var bodyParser = require("body-parser");
// post 방식으로 넘어온 파라미터가 urlencodedParser에 담김
var urlencodedParser = bodyParser.urlencoded({
	extended : false
});

module.exports = function(app) {
	app.get("/", function(req, res) {
		res.render("index.ejs");
	});

	app.get("/parameter", function(req, res) {
		var render_data = {
			// req.query.data1에 파라미터값(사용자가 요청한 값)이 담긴다
			data1 : req.query.data1,
			data2 : req.query.data2
		};
		res.render("parameter.ejs", render_data);
	});

	app.post("/parameter", urlencodedParser, function(req, res) {
		var render_data = {
			data1 : req.body.data1,
			data2 : req.body.data2
		};
		res.render("parameter.ejs", render_data);
	});

	// 쿠키는 무조건 문자열만 저장가능
	app.get("/save_cookie", function(req, res) {
		var op = {
			// 쿠키 수명
			maxAge : 365 * 24 * 60 * 60
		};
		// 쿠키 저장하는 부분으로 res.cookie("쿠키이름", "저장할쿠키데이터", "옵션");
		res.cookie("cookie1", "aaaaa", op);
		res.render("save_cookie.ejs");
	});

	app.get("/load_cookie", function(req, res) {
		var render_data = {
			cookie1 : req.cookies.cookie1
		};
		res.render("load_cookie.ejs", render_data);
	});

	// 세션은 자바스크립트에서 이용가능한 모든 데이터 가능
	app.get("/save_session", function(req, res) {
		req.session.session1 = 100;
		req.session.session2 = "안녕하세요";

		res.render("save_session.ejs");
	});

	app.get("/load_session", function(req, res) {
		var render_data = {
			session1 : req.session.session1,
			session2 : req.session.session2
		};
		res.render("load_session.ejs", render_data);
	});
};