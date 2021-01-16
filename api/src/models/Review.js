const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  //npm start
   sequelize.define('review',{
   commentary: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
   calification: {
    type: DataTypes.INTEGER,
    allowNull: true,
   }
  }
  )
};