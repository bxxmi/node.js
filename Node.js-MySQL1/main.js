var http = require('http');
var url = require('url');
var topic = require('./lib/topic.js');
var author = require('./lib/author.js');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){
          topic.home(request,response);
        // 글 상세보기 시작
      } else {
          topic.page(request,response);
      }
      // 글 생성 시작
    } else if(pathname === '/create'){
          topic.create(request,response);

      // 글 생성 요청 처리 시작
    } else if(pathname === '/create_process'){
         topic.create_process(request,response);

      // 글 업데이트 시작
    } else if(pathname === '/update'){
         topic.update(request,response);

      // 글 업데이트 요청 처리 시작
    } else if(pathname === '/update_process'){
         topic.update_process(request,response);

     // 글 삭제 처리 시작
    } else if(pathname === '/delete_process'){
         topic.delete_process(request, response);

     // 저자 목록 조회
    } else if(pathname === '/author'){
         author.home(request,response);

     // 저자 생성 요청 처리
    } else if(pathname === '/author_create_process'){
         author.author_create_process(request,response);

    // 저자 업데이트
   } else if(pathname === '/author_update'){
         author.author_update(request,response);

    // 저자 업데이트 오청 처리
   } else if(pathname === '/author_update_process'){
         author.author_update_process(request,response);

    // 저자 삭제
   } else if(pathname === '/author_delete_process'){
         author.author_delete_process(request,response);
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);
