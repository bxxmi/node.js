// path 모듈 : 경로에 관련된 기능을 제공, 경로에 대한 여러 작업이 필요할 경우 사용

var path = require("path");

// basename : 파일 이름 가져옴
// window 경로
var basename1 = path.basename("c:\\abc\\abc.txt");
console.log("basename1 :", basename1);

// Linux, mac .. 경로
var basename2 = path.basename("c:/abc/abc.txt");
console.log("basename2 :", basename2);

var dirname1 = path.dirname("c:/abc/abc.txt");
console.log("dirname1 :", dirname1);

var dirname2 = path.dirname("abc.txt");
console.log("dirname2 :", dirname2);

// extname : 파일의 확장자명을 가져옴
var extname1 = path.extname("c:/abc/abc.txt");
console.log("extname1 :", extname1);

// isAbsolute : 절대 경로인지 아닌지
var isAbsoulte1 = path.isAbsolute("c:/abc/abc.txt");
var isAbsoulte2 = path.isAbsolute("abc.txt");
var isAbsoulte3 = path.isAbsolute("c:\\abc\\abc.txt");
console.log("isAbsoulte1 :", isAbsoulte1);
console.log("isAbsoulte2 :", isAbsoulte2);
console.log("isAbsoulte3 :", isAbsoulte3);

// join : 주어진 문자를 합쳐서 하나의 경로를 생성
var join = path.join("aaa", "bbb", "ccc.txt");
console.log("join :", join);

// normalize : 하나의 경로를 정리
var normalize = path.normalize("c:\\aaa\\..\\bbb\\ccc.txt");
console.log(normalize);