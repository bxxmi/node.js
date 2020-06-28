// Assert(assert) 모듈 : 프로그램에서 사용할 값이나 수식을 검사할 수 있는 모듈이다. 
var assert = require("assert");

var a = 10;
var b = 10;
var c = 30;
var d = '10';

assert(a < c);
console.log("a가 c보다 작습니다");

// 거짓이기 때문에 오류 발생
// assert(a == c);
// console.log("a와 c는 같습니다");

assert(a == b);
console.log("a와 b는 같습니다");

// 1. equal : (타입 무시)주어진 두 변수나 수식의 결과 값이 다를 경우 오류 발생
assert.equal(a, b);
console.log("a와 b는 같습니다");

// 거짓이기 때문에 오류 발생
// assert.equal(a, c);
// console.log("a와 c는 같습니다");

assert.equal(a, d);
console.log("a와 d는 같습니다");

// 2. trictEqual : (타입 판별)주어진 두 변수나 수식의 결과 값이 다를 경우 오류 발생
// 거짓이기 때문에 오류 발생
// assert.strictEqual(a, d);
// console.log("a와 d는 같습니다");

// 3. notEqual : (타입 무시)주어진 두 변수나 수식의 결과 값이 같을 경우 오류 발생
// a와 b의 값이 같기 때문에 오류 발생
// assert.notEqual(a, b);
// console.log("a와 b는 다릅니다");

// 4. notStrictEqual : (타입 판별)주어진 두 변수나 수식의 결과 값이 같을 경우 오류 발생
assert.notStrictEqual(a, d);
console.log("a와 d는 다릅니다");

// ============================================================//
var obj1 = {
	a1 : 10,
	a2 : 20
};

var obj2 = {
	a1 : 10,
	a2 : 20
};

var obj3 = {
	a1 : 10,
	a2 : 30
};

var obj4 = {
	a1 : 10,
	a2 : '20'
};

// 5. deepEqual : (타입 무시)두 객체의 멤버가 동일하지 않을 경우 오류 발생
assert.deepEqual(obj1, obj2);
console.log("obj1과 obj2는 같습니다");

assert.deepEqual(obj1, obj4);
console.log("obj1과 obj4는 같습니다");

// 6. deepStrictEqual : (타입 판별)두 객체의 멤버가 동일하지 않을 경우 오류 발생
// 오류 발생
// assert.deepStrictEqual(obj1, obj4);
// console.log("obj1과 obj4는 같습니다");

// 7. notDeepEqual : (타입 무시)두 객체의 멤버가 동일할 경우 오류 발생
// 오류 발생
// assert.notDeepEqual(obj1, obj2);
// console.log("obj1과 obj2는 다릅니다");

assert.notDeepEqual(obj1, obj3);
console.log("obj1과 obj3은 다릅니다");

// 8. notDeepStrictEqual : (타입 판별)두 객체의 멤버가 동일할 경우 오류 발생
assert.notDeepStrictEqual(obj1, obj4);
console.log("obj1과 obj4는 다릅니다");
