// 모듈화한 파일을 모든 곳에서 사용할 수 있도록 함
// 첫 번째 방법 : 변수명을 module.exports으로 바꿔서 사용
module.exports = {
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },list:function(filelist){
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length){
      list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  }
}

// 모듈화한 파일을 모든 곳에서 사용할 수 있도록 함
// 두 번째 방법
// module.exports = template;
