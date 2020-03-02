# Express

Node.js로 웹서버에 필요한 기능을 하나하나 다 작성하면, 귀찮다.

Node.js의 웹 프레임워크를 사용하면 간편하게 웹서버를 구축할 수 있다.

## 디렉터리 구조

```
express
|______package.json
|______public
|       |______css
|       |______style.css
|______router
|       |______main.js
|______server.js
|______views
|       |______about.html
|       |______index.html
```

## 시작하기

```
npm install express-generator -g
```

```javascript
const express = require('express');
const app = express();
const port = 3000;

// 라우터 모듈인 main.js 를 불러와서 app 에 전달
const router = require('./router/main')(app);

// 서버가 읽을 수 있도록 HTML 의 위치를 정의
app.set('views', __dirname + '/views');

서버가 HTML 렌더링을 할 때, EJS 엔진을 사용하도록 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//서버에서 정적파일을 다루기 위해, express.static() 메소드 사용
app.use(express.static('public'));

app.listen(port, () => {
	console.log(`Express server has started on port ${port}`);
});

```


### 