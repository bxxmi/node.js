/*
var M = {
  v:'v',
  f:function(){
    // this : 이 파일의 v값을 호출해라
    console.log(this.v);
  }
}
*/

// './' : 현재 디렉토리를 기리킴
var part = require('./mpart.js');
part.f();
