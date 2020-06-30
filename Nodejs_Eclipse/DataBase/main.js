// 데이터베이스 모듈 생성
var mysql = require("mysql");

// 데이터베이스 접속 정보 객체 생성
var conn_info = {
	host : "localhost",
	port : 3306,
	user : "root",
	password : "6638",
	database : "TestDB"
};

// 데이터베이스 접속할 수 있는 객체 생성
var conn = mysql.createConnection(conn_info);

conn.connect(function(error) {
	if (error) {
		console.log("접속 오류");
	} else {
		console.log("접속 성공");

		// [INSERT]
        // var sql = "insert into TestTable (int_data, str_data) values (?,?)";

		// 배열형태로 데이터 삽입
		// var input_data1 = [ 100, "문자열1" ];

		// 쿼리 실행
		// conn.query(sql, input_data1, function(error) {
		// console.log("저장완료1");
		// });

		// var input_data2 = [ 200, "문자열2" ];
		// conn.query(sql, input_data2, function(error) {
		// console.log("저장완료2");
		// });

		// var input_data3 = [ 200, "문자열3" ];
		// conn.query(sql, input_data3, function(error) {
		// console.log("저장완료3");
		// });
		
		// [UPDATE]
		var sql2 = "update TestTable set str_data=? where int_data=?";
		
		var update_data = ["문자열100", 100];
		conn.query(sql2, update_data, function(error){
			console.log("수정완료");
		});
		
		// [DELETE]
		var sql3 = "delete from TestTable where int_data=?";
		var delete_data = [100];
		conn.query(sql3, delete_data, function(error){
			console.log("삭제완료");
		});

		// [SELECT]
		var sql = "select * from TestTable";

		// rows : 셀렉트 되어 들어온 정보들을 한줄씩 담기위한 매개변수
		conn.query(sql, function(error, rows) {
           for(var obj of rows){
        	   console.log("int_data :", obj.int_data);
        	   console.log("str_data :", obj.str_data);
           }
		});
		
		// 접속해제
		conn.end();
	}
});