var M = {
  v:'v',
  f:function(){
    // this : 이 파일의 v값을 호출해라
    console.log(this.v);
  }
}

module.exports = M;
