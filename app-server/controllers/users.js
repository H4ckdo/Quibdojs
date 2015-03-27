/* GET user profile */
exports.profile = function(req, res, next) {
	res.render('user',
		{
			title: "Perfil de usuario",
			parrafo: 'Este es un parrafo de express para probar el perfil de usuario'
		}
	);
}