var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({
	extended : false
});

var mysql = require("mysql");

var conn_info = {
	host : "localhost",
	port : 3306,
	user : "root",
	password : "6638",
	database : "GuestBookDB"
};

module.exports = function(app) {
	app.get("/", function(req, res) {
		res.render("index.ejs");
	});

	app.post("/login", urlencodedParser, function(req, res) {
		// req.body.user_name에서 user_name은 인덱스에서 받은 input 태그의 name이다.
		var user_name = req.body.user_name;

		// 세션 저장
		req.session.user_name = user_name;

		res.redirect("main");
	});

	app.get("/main", function(req, res) {
		var conn = mysql.createConnection(conn_info);
		var sql = "select * from GuestBookTable order by guestbook_idx desc";
		
		conn.query(sql, function(error, rows){
			var render_data = {
				// rows라는 이름으로 rows에 저장된 sql 결과값을 저장
				"rows" : rows	
			};
			res.render("main.ejs", render_data);
		});
	});

	app.post("/save_guestbook", urlencodedParser, function(req, res) {
		var user_name = req.session.user_name;
		var content = req.body.content;
		
		// DB접속
		var conn = mysql.createConnection(conn_info);
		
		var sql = "insert into GuestBookTable (guestbook_name, guestbook_content) values (?,?)";
		var input_data = [user_name, content];

		conn.query(sql, input_data, function(error){
			// 오류확인
			// console.log(error)
			conn.end();
			res.redirect("main");
		});
	});
};