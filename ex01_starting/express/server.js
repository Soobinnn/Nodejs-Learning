const express = require('express');
const app = express();
const port = 3000;
const router = require('./router/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));

app.listen(port, () => {
	console.log(`Express server has started on port ${port}`);
});
