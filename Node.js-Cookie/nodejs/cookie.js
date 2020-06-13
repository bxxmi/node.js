var http = require('http');
var cookie = require('cookie');

http.createServer(function(request, response){
  var cookies = {};
  if(request.headers.cookie !== undefined){
     // 객체로 만듬
     cookies = cookie.parse(request.headers.cookie);
  }
  response.writeHead(200, {
    'Set-Cookie':[
      'yummy_cookie=choco',
      'tasty_cookie=strawberry',
      // Max-Age : 쿠키의 기간을 지정한다
      `Permanent=cookies; Max-Age=${60*60*24*30}`,
      'Secure=Secure; Secure',
      // HttpOnly : document.cookie를 이용해서 쿠키에 접속하는 것을 막는 옵션
      'HttpOnly=HttpOnly; HttpOnly',
      // Path : 어떤 경로에서 쿠키를 활성화 시킬 것인지 지정
      'Path=Path; Path=/cookie',
      // Domain : 어떤 도메인(주소값)에서 쿠키를 활성화 시킬 것인지 지정
      // 이때, 지정한 도메인 값이 포함되면 무조건 활성화된다
      'Domain=Domain; Domain=o2.org'
    ]
  });
  response.end('Cookie!!');
}).listen(3000);
