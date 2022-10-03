const http = require('http');
const fs = require('fs');
const app = http.createServer(function (request, response) {

  let _url = request.url;

  //[parseQueryString]
  //- true : url 객체의 query 속성을 객체 형식으로 가져옵니다.
  //- false : url 객체의 query 속성을 문자열 형식으로 가져옵니다.
  let queryData = new URL('http://localhost:3000' + _url).searchParams;
  let title = queryData.get('id');
  // console.log(`queryData : ${queryData.get('id')}`);
  // console.log(`_url : ${_url}`)
  let template = '';
  function content (title) {template = `<!doctype html>
  <html>
  <head>
    <title>${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB - ${title}</a></h1>
    <ol>
      <li><a href="/?id=HTML">HTML</a></li>
      <li><a href="/?id=CSS">CSS</a></li>
      <li><a href="/?id=JavaScript">JavaScript</a></li>
    </ol>`};

  if (_url == '/') {
    title = 'Welcome!';
    response.writeHead(200);
    content(title);
    response.end(template);
  } else {
    response.writeHead(200);
    fs.readFile(`data/${title}`, 'utf-8', function (err, description) {
      template = `<!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ol>
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
      </html>`;
      response.end(template);
    });
  }
  if (_url == '/favicon.ico') {
    response.writeHead(404);
    // response.end();
    // return;
  }
});
app.listen(3000);