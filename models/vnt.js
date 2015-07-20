// Definicion del modelo de Variable con validaciones

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
  	'Vnt',
            { indicador:  {
            	   type: DataTypes.STRING,
                 validate: { notEmpty: {msg: "-> Falta Pregunta"}}
            },
              peso: {
              	 type: DataTypes.REAL,
                 validate: { notEmpty: {msg: "-> Falta Respuesta"}}
            },
              _0: {
                type: DataTypes.REAL,
                //defaultValue: "otros",
                validate: { notEmpty: {msg: "-> Falta Tematica"}}
             },
              _30: {
                type: DataTypes.REAL,
                //defaultValue: "otros",
                validate: { notEmpty: {msg: "-> Falta Tematica"}}
             },
              _50: {
                type: DataTypes.REAL,
                //defaultValue: "otros",
                validate: { notEmpty: {msg: "-> Falta Tematica"}}
              },
              _60: {
                type: DataTypes.REAL,
                //defaultValue: "otros",
                validate: { notEmpty: {msg: "-> Falta Tematica"}}
             },
              _80: {
                type: DataTypes.REAL,
                //defaultValue: "otros",
                validate: { notEmpty: {msg: "-> Falta Tematica"}}
              },
              _100: {
                type: DataTypes.REAL,
                //defaultValue: "otros",
                validate: { notEmpty: {msg: "-> Falta Tematica"}}
              },
              _120: {
                type: DataTypes.REAL,
                //defaultValue: "otros",
                validate: { notEmpty: {msg: "-> Falta Tematica"}}
              },
              _150: {
                type: DataTypes.REAL,
                //defaultValue: "otros",
                validate: { notEmpty: {msg: "-> Falta Tematica"}}
              }
            });
}
