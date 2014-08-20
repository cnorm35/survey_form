module.exports = function Route(app){
	app.get('/', function(req, res){
		res.render('client', {title: 'Survey Page'});
	});

	

	app.post('/process', function(req, res){
		console.log(req.body);
		res.render('result', {
			title: 'Submitted Information',
			name: req.body.name,
			location: req.body.location,
			language: req.body.language,
			comment: req.body.comment
		});
	})




}