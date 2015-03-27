/* GET home page. */
exports.index = function (req, res, next) {
	res.render('index', {title: "Quibdojs"});
	next();//ejecuta la siguiente funcion si se especifica en la ruta
};

exports.indexLogs = function(req, res) {
	//testing funcion as middlewares with routes
	console.log(req.url);
	var i = [1,2,3,4,5,6];
	for(var number in i){
		console.log(number);
	}
};

/* GET home page. */
exports.charla = function (req, res) {
	res.render('charla',
		{
			speaker: "Jhonatan Cordoba",
			title: "Iniciando con Javascript y HTML5",
			place: "Camara de comercio del Choco, auditorio segundo piso",
			hour: "6:00 pm",
			speakerInfo: {
				twitter: "@cordoba",
				github: ""
			}
		}
	);
}