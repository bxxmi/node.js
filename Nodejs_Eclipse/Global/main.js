// Global 모듈 : node.js에서 모듈을 생성하지 않고 사용할 수 있는 것들을 내장하고 있는 객체

// 1. __dirname : 현재 실행 중인 파일의 경로
// console.log("__dirname :", __dirname);

// 2. __filename : 현재 실행 중인 파일의 경로와 파일명
// console.log("__filename :", __filename);

// 3. setImmediate : 하나의 사건처리가 끝나면 동작할 코드를 등록
// console.log("node.js 코드입니다.");
// setImmediate(function() {
// console.log("Immediate 동작1");
// });
//
// console.log("node.js 코드입니다.");
// var a1 = setImmediate(function() {
// console.log("Immediate 동작2");
// });
//
// console.log("node.js 코드입니다.");

// 4. clearImmediate : 등록된 Immediate 제거
// clearImmediate(a1);

console.log("작업이 모두 완료되었습니다.");

// 5. setInterval : 주어진 함수를 주어진 시간마다 계속 호출
var a1 = 0;

var a2 = setInterval(function() {
	console.log("인터벌 동작");
	a1++;
	console.log("a1 :", a1);

	if (a1 >= 5) {
		// 6. clearInterval : 등록된 Interval 제거
		clearInterval(a2);
	}
}, 1000);

// 7. setTimeout : 주어진 함수를 주어진 시간 후에 한번 호출
var a1 = setTimeout(function() {
	console.log("타임아웃 동작");
}, 1000);

// 8. clearTimeout : 등록된 Timeout 제거
clearTimeout(a1);

// 9. console : 화면 출력을 위한 객체
// 10. exports : 개발자가 모듈을 만들 때 사용하는 객체
// 11. require : 모듈 객체를 만드는 함수

