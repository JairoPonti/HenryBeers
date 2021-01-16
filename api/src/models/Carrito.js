const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 sequelize.define('carrito', {
   status: {
     type: DataTypes.ENUM(["carrito", "procesando", "creada", "completa", "cancelada"]),
     allowNull: false
   }
 }); 
};