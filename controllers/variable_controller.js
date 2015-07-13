var models = require('../models/models.js');

// Autoload - factoriza el código si ruta incluye :quizId
exports.load = function(req, res, next, variableId) {
  models.Variable.find({
    where: {
      id: Number(variableId)
    }
  }).then(function(variable) {
    if (variable) {
      req.variable = variable;
    next();
    }else{
      next(new Error('No existe quizId=' + variableId))}
    }
  ).catch(function(error){next(error)});
};

//GET  /variables
exports.index = function(req, res) {
  if(typeof(req.query.search) != 'undefined'){
    models.Variable.findAll({
        where: [
          "indicador like ?", '%'+req.query.search+'%']
         // , order: 'indicador ASC'
      }
    ).then(function(variables) {
        if(typeof(variables != 'undefined')){
          res.render('variables/index', { variables: variables, errors: []});
        }
      }
    ).catch(function(error) { next(error);}
    )
  }else{
    models.Variable.findAll({
        order : 'id ASC'
      }
    ).then(
      function(variables) {
        res.render('variables/index', { variables: variables, errors: []});
      }
    ).catch(function(error) { next(error);})
  }
};




//get edit
exports.edit = function(req, res){
  var variable = req.variable;

  res.render('variables/edit', {variable: variable, errors: []});
};

exports.update = function(req, res) {
 req.variable.peso = req.body.variable.peso;
 req.variable._0   = req.body.variable._0;
 req.variable._30  = req.body.variable._30;
 req.variable._50  = req.body.variable._50;
 req.variable._60  = req.body.variable._60;
 req.variable._80  = req.body.variable._80;
 req.variable._100  = req.body.variable._100;
 req.variable._120  = req.body.variable._120;
 req.variable._150  = req.body.variable._150;

 req.variable.validate()
 .then(
   function(err){
    if (err) {
      res.render('variables/edit', {variable: req.variable, errors: err.errors});
    } else {
     req.variable// save: guarda campos  en DB
     .save( {fields: ["peso", "_0", "_30", "_50", "_60", "_80", "_100", "_120", "_150"]})
     .then( function(){ res.redirect('/variables');});
     } // Redirección HTTP a lista de preguntas (URL relativo)
  }
 );
};


//Get /calcular -- Formulario de calcular
exports.new = function(req,res) {
  var variable = req.variable;
  res.render('variables/new', {variable: variable, errors: []});
};
// Post /calcular -- Crear calcular
exports.create = function(req,res){
   
  var calidad = req.body.calidad,
      insatisfechos = req.body.insatisfechos,
      NDA = req.body.NDA,
      NDS = req.body.NDS,
      FCR = req.body.FCR,
      AV = req.body.AV,
      calidadI = req.body.calidadI,
      insatisfechosI = req.body.insatisfechosI,
      NDAI = req.body.NDAI,
      NDSI = req.body.NDSI,
      FCRI = req.body.FCRI,
      AVI = req.body.AVI;
  // Quick example
   models.Variable.findAll().then(
      function(variables) {
        res.render('variables/calcular', { variables: variables,
          calidad: calidad,
          insatisfechos: insatisfechos,
          NDA: NDA,
          NDS: NDS,
          FCR: FCR,
          AV: AV,
          calidadI: calidadI,
          insatisfechosI: insatisfechosI,
          NDAI: NDAI,
          NDSI: NDSI,
          FCRI: FCRI,
          AVI: AVI,
          errors: []});
      }
    ).catch(function(error) { next(error);})



  // console.log(JSON.stringify(req.body));

   

  
};

