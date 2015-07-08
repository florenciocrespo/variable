var models = require('../models/models.js');


exports.show = function(req,res){
	models.Variable.findAll().then(function (_variables){
		    res.render('db/index', {variables: _variables,	                      	                      errors: []
		    });
		
	});
};