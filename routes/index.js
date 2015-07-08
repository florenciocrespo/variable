var express = require('express');
var router = express.Router();

var variableController = require('../controllers/variable_controller');
var dbController	= require('../controllers/db_controller');
//var eeccController 	= require('../controllers/eecc_controller');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CAT MOVISTAR' });
});

//Autoload de comandos con :variableId
router.param('variableId',                 variableController.load);
router.get('/calcular',                    variableController.new);
router.post('/calcular',                   variableController.create); // crear sesión


// Definición de rutas de /variables
router.get('/variables',                          variableController.index);
//router.get('/variables/show',                     variableController.show);
router.get('/variables/:variableId(\\d+)/edit',   variableController.edit);
router.put('/variables/:variableId(\\d+)',        variableController.update);


//router.get('/variables/eeccs/new'	,  eeccController.new);
//router.post('/variables/eeccs'	,      eeccController.create);
//router.get('/variables/eeccs/:eeccId(\\d+)/publish',	 eeccController.publish);



//ver BD
router.get('/db' , 								  dbController.show);


module.exports = router;
