var http = require('http');
http.createServer(function(request, response) {
	response.writeHead(200, {
		"Content-Type": "text/plain;charset=UTF-8", //application/json 可以返回json
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers": "Content-Type, Accept",
		"Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
		"Access-Control-Max-Age": "1728000"
	});

	//request.method可以判断是GET还是POST
	var pathname = request.url.slice(1);
	var result='';
	switch (pathname) {
		case ''||'/':
			break;
		case "test":
			result = JSON.stringify({test: 'asdf'});
			break;
		case "testPost":
			if (request.method=='POST') {
				result = JSON.stringify({test: 'asdf'});
			}
			break;	
		default:
			result = "none";
			break;
	}
	response.end(result);
}).listen(8124);
console.log('Server running at http://127.0.0.1:8124/');
//说明：
//cmd 进入本js目录，执行：node myNode.js
//请求：http://127.0.0.1:8124/test