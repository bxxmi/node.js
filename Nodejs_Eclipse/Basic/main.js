var second = require("./second.js");

function f1(){
	console.log("함수호출");
}

f1();
second.f2();

console.log("Hello World");

var a = 100;
var b = "문자열";

console.log("a : %d, b : %s", a, b);

console.log("a :", a);

console.log("a:", a, "b:", b);