/*
function a(){
  console.log('A');
}
*/

// 자바스크립트에서는 함수가 값이다. 해당 함수는 익명함수
var a = function(){
  console.log('A');
}

// a(); : 변수 a에 담긴 함수 호출

// 예를 들어, 시간이 오래걸리는 slowfunc 함수가 있다고 가정하자
// slowfunc함수를 처리하고 난 후 다른 함수를 처리하기 위해 slowfunc함수에 callback 파라미터를 넣자
// slowfunc함수 내에 callback();을 작성해 해당 함수 실행 시 콜백이 되도록 하자
// slowfunc함수 파라미터에 변수 a를 넣으면 callback 인자에 a가 대입된다
// 실행 시 slowfunc함수가 먼저 처리되고 callback();을 통해 변수 a의 값이 출력된다
function slowfunc(callback){
  callback();
}

slowfunc(a);
