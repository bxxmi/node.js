// 컨트롤러는 데이터를 구해서 렌더링할 때 보내주는 역할
module.exports = function(app) {
	app.get("/", function(req, res) {
		var date = new Date();

		// index.ejs 로 전달할 데이터 객체 선언
		var render_data = {
			// str, number, date : 자유자재로 변경가능
			// ejs 파일에서 사용할 때 동일한 이름으로 사용해야한다
			str : "문자열입니다",
			number : 100,
			date : date
		}
		res.render("index.ejs", render_data);
	});

	app.get("/test", function(req, res) {
		res.render("test.ejs");
	});
};