const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'ordencompra', {
        
      pais: {
        type: DataTypes.STRING,
        allowNull: true,
        
      },

      ciudad: {
        type: DataTypes.STRING,
        allowNull: true,
        
      },

      direccion_envio: {
        type: DataTypes.STRING,
        
      },

      codigo_postal: {
        type: DataTypes.INTEGER,
        allowNull: true,
        
      },

      numero_telefono: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    },
    
  );
};

// {
//   "pais":"Argentina",
//   "ciudad": "rosario",
//   "direccion_envio":"Dorrego 3685",
//   "codigo_postal":2000,
//   "numero_telefono":"3416144151"
// }