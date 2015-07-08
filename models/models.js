// Modelos ORM
var path = require('path');

//Postgres DATABASE_URL = postgres://user:/passwd@host:port/database
//SQlite DATABASE_URL = sqlite://:@/
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name = (url[6]||null);
var user    = (url[2]||null);
var pwd     = (url[3]||null);
var protocol = (url[1]||null);
var dialect = (url[1]||null);
var port    = (url[5]||null);
var host    = (url[4]||null);
var storage = process.env.DATABASE_STORAGE;
//console.log(DB_name+" "+user+" "+pwd+" "+protocol+" "+dialect);
//cargar modelo ORM
var Sequelize = require('sequelize');

//Usar BBDD SQlite o Postgres

var sequelize = new Sequelize(DB_name,user,pwd,
                    { dialect: protocol,
                      protocol:protocol,
                      port: port,
                      host: host,
                      storage: storage, //solo SQlite(.env)
                      omitNull: true    //solo Postgress
                  }


                    );



// Importar la definicion de la clase Variable desde quiz.js
var variable_path = path.join(__dirname,'variable');
var Variable = sequelize.import(variable_path);


//exportar tablas
exports.Variable = Variable;


// sequelize.sync() crea las tablas de datos definidas en el modelo
sequelize.sync().then(function() {
  // success(..) ejecuta el manejador una vez creadas las tabas de la DB
  Variable.count().then(function (count){
    if(count === 0) {   // la tabla se inicializa solo si está vacía
     Variable.bulkCreate( 
        [ {indicador: 'Calidad',   peso: '30', _0: '8.2', _30: '8.25', _50: '8.3',_60: '8.4',_80: '8.55',_100:'8.75',_120:'8.9',_150:'9'},
          {indicador: 'Insatisfechos',   peso: '20', _0: '4.7', _30: '4.64', _50: '4.6',_60: '4.56',_80: '4.46',_100:'4.36',_120:'4.26',_150:'4.16'},
          {indicador: 'NDA',   peso: '15', _0: '91', _30: '92', _50: '93',_60: '94',_80: '95',_100:'96',_120:'97',_150:'98'},
          {indicador: 'NDS',   peso: '10', _0: '80', _30: '81', _50: '82',_60: '83',_80: '84',_100:'85',_120:'86',_150:'87'},
          {indicador: 'FCR',   peso: '15', _0: '73', _30: '74', _50: '75',_60: '76',_80: '77',_100:'78',_120:'80',_150:'83'},
          {indicador: 'Av/Boletines',   peso: '10', _0: '27', _30: '25', _50: '23',_60: '20',_80: '17',_100:'14',_120:'11',_150:'8'}
        ]        
      ).then(function(){console.log('Base de datos inicializada .')});
    };
  });
});