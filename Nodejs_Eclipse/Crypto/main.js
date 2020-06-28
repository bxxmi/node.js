// Crypto 모듈 : 데이터 암호화 작업

var crypto = require('crypto');

// 1. getCiphers : 지원하는 암호화 알고리즘 이름들을 반환한다.
var ciphers = crypto.getCiphers();
for(var x of ciphers){
	console.log(x);
}


var key = "test key";
var data = "암호화 할 데이터";

// createCipher : 암호화용 객체를 생성한다.
var cipher = crypto.createCipher("aes-256-cbc", key);
// update : 데이터를 암호화 하거나 복호화한다.
var result = cipher.update(data, "utf8", "base64");
// final : 암호화된 데이터에 마지막 종료 블럭을 추가한다.
result += cipher.final("base64");

console.log("암호화 된 문자열 :", result);

// createDecipher : 복호화용 객체를 생성한다.
var decipher = crypto.createDecipher("aes-256-cbc", key);
// update : 데이터를 암호화 하거나 복호화한다.
var result2 = decipher.update(result, "base64", "utf8");
// final : 암호화된 데이터에 마지막 종료 블럭을 추가한다.
result2 += decipher.final("utf8");

console.log("복호화 된 문자열 :", result2);




