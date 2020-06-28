// fs 모듈 : node.js에서 파일에 데이터를 쓰고 읽어 올 수 있는 기능을 제공하는 모듈
var fs = require("fs");

// 1. writeFile : 비 동기식으로 파일에 데이터를 작성한다.
// 파일이 없으면 새롭게 만들며 파일이 있으면 기존 데이터를 삭제하고 쓴다.
fs.writeFile("data1.txt", "Hello", function(error) {
	console.log("비동기식 저장1");
});

fs.writeFile("data2.txt", "Hello", function(error) {
	console.log("비동기식 저장2");
});

// 2. appendFile : 비 동기식으로 파일에 데이터를 작성한다.
// 파일이 없으면 새롭게 만들며 파일이 있으면 기존 데이터 뒤에 추가로 쓴다.
fs.appendFile("data1.txt", "YAHO", function(error) {
	console.log("비동기식 추가1");
});

fs.appendFile("data2.txt", "YAYA", function(error) {
	console.log("비동기식 추가2");
});

// 3. readFile : 비 동기식으로 파일의 데이터를 읽어온다.
fs.readFile("data1.txt", function(error, data) {
	console.log("data1 :", data.toString());
});

fs.readFile("data2.txt", function(error, data) {
	console.log("data2 :", data.toString());
});

// 4. writeFileSync : 동기식으로 파일에 데이터를 쓴다.
// 파일이 없으면 새롭게 만들며 파일이 있으면 기존 데이터를 삭제하고 쓴다.
// 콜백 함수 작성 X : 파일 쓰는 작업이 끝날 때 까지 대기하기 때문에 필요없음
fs.writeFileSync("data3.txt", "Hello Node.js");
console.log("동기식 저장1");

fs.writeFileSync("data4.txt", "Hello Node.js");
console.log("동기식 저장2");

// 5. appendFileSync : 동기식으로 파일에 데이터를 쓴다.
// 파일이 없으면 새롭게 만들며 파일이 있으면 기존 데이터 뒤에 추가로 쓴다.
fs.appendFileSync("data3.txt", "안녕하세요");
console.log("파일 내용 추가 1");

fs.appendFileSync("data4.txt", "반갑습니다");
console.log("파일 내용 추가 2");

// 6. readFileSync : 동기식으로 파일을 읽어온다.
var data3 = fs.readFileSync("data3.txt");
console.log("data3 :", data3.toString());

var data4 = fs.readFileSync("data4.txt");
console.log("data4 :", data4.toString());
