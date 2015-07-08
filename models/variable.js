// Definicion del modelo de Variable con validaciones

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
  	'Variable',
            { indicador:  {
            	   type: DataTypes.STRING,
                 validate: { notEmpty: {msg: "-> Falta Pregunta"}}
            },
              peso: {
              	 type: DataTypes.INTEGER,
                 validate: { notEmpty: {msg: "-> Falta Respuesta"}}
            },
              _0: {
                type: DataTypes.INTEGER,
                //defaultValue: "otros",
                validate: { notEmpty: {msg: "-> Falta Tematica"}}
             },
              _30: {
                type: DataTypes.INTEGER,
                //defaultValue: "otros",
                validate: { notEmpty: {msg: "-> Falta Tematica"}}
             },
              _50: {
                type: DataTypes.INTEGER,
                //defaultValue: "otros",
                validate: { notEmpty: {msg: "-> Falta Tematica"}}
              },
              _60: {
                type: DataTypes.INTEGER,
                //defaultValue: "otros",
                validate: { notEmpty: {msg: "-> Falta Tematica"}}
             },
              _80: {
                type: DataTypes.INTEGER,
                //defaultValue: "otros",
                validate: { notEmpty: {msg: "-> Falta Tematica"}}
              },
              _100: {
                type: DataTypes.INTEGER,
                //defaultValue: "otros",
                validate: { notEmpty: {msg: "-> Falta Tematica"}}
              },
              _120: {
                type: DataTypes.INTEGER,
                //defaultValue: "otros",
                validate: { notEmpty: {msg: "-> Falta Tematica"}}
              },
              _150: {
                type: DataTypes.INTEGER,
                //defaultValue: "otros",
                validate: { notEmpty: {msg: "-> Falta Tematica"}}
              }
            });
}