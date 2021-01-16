 const { DataTypes } = require('sequelize');

 module.exports = (sequelize) => {
  sequelize.define('user', {
    name: {
       type: DataTypes.STRING, 
       required: true ,
       allowNull: true
      },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
      isEmail:true,
       }
     },
     password: {
        type: DataTypes.STRING,
         required: true 
      },
  
     isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
         required: true,
         default: false 
        },
     resetLink: { //token
          type: DataTypes.STRING,
          allowNull: true
        },
     google: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },    
  }); 
 };

//  user {
//    name: "",
//    username: "",
//    email: "",
//    password:"",
//    isAdmin: false

//  }