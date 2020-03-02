module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index.html');
	});

	app.get('/about', function(req, res) {
		res.render('about.html');
	});

	app.get('/user/:id', function(req, res, next) {
		console.log(req.query);
		next();
	});
};
