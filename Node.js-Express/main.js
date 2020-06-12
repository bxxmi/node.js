var express = require('express')
var app = express()
var fs = require('fs');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var qs = require('querystring');
var bodyParser = require('body-parser');
var compression = require('compression');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
// 압축
app.use(compression());

// 파일 목록 불러오는 미들웨어 만들어보기
// get방식으로 요청이 들어오는 경우 전체 파일 목록 출력해라 (효율성 증가)
app.get('*',function(request, response, next){
  fs.readdir('./data', function(error, filelist){
    request.list = filelist;
    next();
  });
});

//route, routing
//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function(request, response) {
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(request.list);
    var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}
      <img src="/images/hello.jpg" style="width:300px; display:block; margin-top:10px;">
      `,
      `<a href="/create">create</a>`,
    );
    response.send(html);
});

// 페이지 상세보기
app.get('/topic/:pageId', function(request, response, next) {
  var filteredId = path.parse(request.params.pageId).base;
  fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
    if(err){
      next(err);
    } else {
      var title = request.params.pageId;
      var sanitizedTitle = sanitizeHtml(title);
      var sanitizedDescription = sanitizeHtml(description, {
        allowedTags:['h1']
      });
      var list = template.list(request.list);
      var html = template.HTML(sanitizedTitle, list,
        `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
        ` <a href="/create">create</a>
          <a href="/update/${sanitizedTitle}">update</a>
          <form action="/delete_process" method="post">
            <input type="hidden" name="id" value="${sanitizedTitle}">
            <input type="submit" value="delete">
          </form>`
      );
      response.send(html);
    }
  });
});

// 페이지 생성하기
app.get('/create', function(request,response){
          var title = 'WEB - create';
          var list = template.list(request.list);
          var html = template.HTML(title, list, `
            <form action="/create_process" method="post">
              <p><input type="text" name="title" placeholder="title"></p>
              <p>
                <textarea name="description" placeholder="description"></textarea>
              </p>
              <p>
                <input type="submit">
              </p>
            </form>
          `, '');
          response.send(html);
});

// 페이지 생성요청 처리
// 이때, 위에서 post방식으로 요청을 처리했으니 post로 응답해야하므로 app.post로 시작한다
// 만약 get방식이라면 app.get
app.post('/create_process', function(request, response){
        var post = request.body;
        var title = post.title;
        var description = post.description;
        fs.writeFile(`data/${title}`, description, 'utf8', function(err){
        response.redirect(`/?id=${title}`);
    });
});

// 페이지 수정요청
app.get('/update/:pageId', function(request, response){
          var filteredId = path.parse(request.params.pageId).base;
          fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
            var title = request.params.pageId;
            var list = template.list(request.list);
            var html = template.HTML(title, list,
              `
              <form action="/update_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <p><input type="text" name="title" placeholder="title" value="${title}"></p>
                <p>
                  <textarea name="description" placeholder="description">${description}</textarea>
                </p>
                <p>
                  <input type="submit">
                </p>
              </form>
              `,
              `<a href="/create">create</a> <a href="/update/${title}">update</a>`
            );
            response.send(html)
          });
});

// 페이지 수정요청 처리
app.post('/update_process', function(request, response){
           var post = request.body;
           var id = post.id;
           var title = post.title;
           var description = post.description;
           fs.rename(`data/${id}`, `data/${title}`, function(error){
             fs.writeFile(`data/${title}`, description, 'utf8', function(err){
               response.redirect(`/?id=${title}`);
           });
       });
});

// 페이지 삭제
app.post('/delete_process', function(request, response){
            var post = request.body;
            var id = post.id;
            var filteredId = path.parse(id).base;
            fs.unlink(`data/${filteredId}`, function(error){
              response.redirect('/');
        });
});

// 404
app.use(function(req, res, next){
   res.status(404).send('Sorry cannot find that!');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});
