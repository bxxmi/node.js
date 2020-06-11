var express = require('express')
var app = express()
var fs = require('fs');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var qs = require('querystring');

//route, routing
//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function(request, response) {
  fs.readdir('./data', function(error, filelist){
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(filelist);
    var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}`,
      `<a href="/create">create</a>`,
    );
    response.send(html);
  });
});

// 페이지 상세보기
app.get('/page/:pageId', function(request, response) {
  fs.readdir('./data', function(error, filelist){
    var filteredId = path.parse(request.params.pageId).base;
    fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
      var title = request.params.pageId;
      var sanitizedTitle = sanitizeHtml(title);
      var sanitizedDescription = sanitizeHtml(description, {
        allowedTags:['h1']
      });
      var list = template.list(filelist);
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
    });
  });
});

// 페이지 생성하기
app.get('/create', function(request,response){
  fs.readdir('./data', function(error, filelist){
          var title = 'WEB - create';
          var list = template.list(filelist);
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
});

// 페이지 생성요청 처리
// 이때, 위에서 post방식으로 요청을 처리했으니 post로 응답해야하므로 app.post로 시작한다
// 만약 get방식이라면 app.get
app.post('/create_process', function(request, response){
  var body = '';
        request.on('data', function(data){
            body = body + data;
        });
        request.on('end', function(){
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;
            fs.writeFile(`data/${title}`, description, 'utf8', function(err){
              response.writeHead(302, {Location: `/?id=${title}`});
              response.end();
            })
        });
});

// 페이지 수정요청
app.get('/update/:pageId', function(request, response){
  fs.readdir('./data', function(error, filelist){
          var filteredId = path.parse(request.params.pageId).base;
          fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
            var title = request.params.pageId;
            var list = template.list(filelist);
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
});

// 페이지 수정요청 처리
app.post('/update_process', function(request, response){
       var body = '';
       request.on('data', function(data){
           body = body + data;
       });
       request.on('end', function(){
           var post = qs.parse(body);
           var id = post.id;
           var title = post.title;
           var description = post.description;
           fs.rename(`data/${id}`, `data/${title}`, function(error){
             fs.writeFile(`data/${title}`, description, 'utf8', function(err){
               response.redirect(`/?id=${title}`);
             })
           });
       });
});

// 페이지 삭제
app.post('/delete_process', function(request, response){
        var body = '';
        request.on('data', function(data){
            body = body + data;
        });
        request.on('end', function(){
            var post = qs.parse(body);
            var id = post.id;
            var filteredId = path.parse(id).base;
            fs.unlink(`data/${filteredId}`, function(error){
              response.redirect('/');
            })
        });
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});
