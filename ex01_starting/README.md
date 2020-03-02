## Node.js Application 만들기

- 1. 필요한 모듈 import
- 2. 서버 생성
- 3. 서버 테스트

### 1. 필요한 모듈 import

어플리케이션에 필요한 모듈을 불러올 떈 require 명령을 사용함

```javascript
var http = require('http');
```

### 2. 서버 생성

http인스턴스를 사용해서 http.createServer()메소드를 실행함. 그리고 listen메소드를 사용하여 포 트 8081로 bind해줌.

http.createServer()의 매개변수로 request, response를 매개변수로 가지고있는 함수를 넣어줌.

```javascript
http
	.createServer(function(request, response) {
		/* 
        HTTP 헤더 전송
        HTTP Status: 200 : OK
        Content Type: text/plain
    */
		response.writeHead(200, { 'Content-Type': 'text/plain' });

		/*
        Response Body 를 "Hello World" 로 설정
    */
		response.end('Hello World\n');
	})
	.listen(8081);
```

### 3. 서버 테스트

```javascript
var http = require('http');

http
	.createServer(function(request, response) {
		/* 
        HTTP 헤더 전송
        HTTP Status: 200 : OK
        Content Type: text/plain
    */
		response.writeHead(200, { 'Content-Type': 'text/plain' });

		/*
        Response Body 를 "Hello World" 로 설정
    */
		response.end('Hello World\n');
	})
	.listen(8081);

console.log('Server running at http://127.0.0.1:8081');
```

```
node main.js
```
