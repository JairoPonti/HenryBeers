require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;
 

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/development`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename); 

const modelDefiners = [];


// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Product } = sequelize.models;
const { Category } = sequelize.models
const { User } = sequelize.models
const { Carrito } = sequelize.models 
const { Orden } = sequelize.models
const { Review } = sequelize.models
const { Ordencompra } = sequelize.models 
     
Product.belongsToMany(Category, {through: "category_products"})
Category.belongsToMany(Product, {through: "category_products"})
Carrito.belongsToMany(Product, {through: Orden}) //Carrito se relaciona con muchos productos, a través de "Orden"
Product.belongsToMany(Carrito, {through: Orden})//Producto se relaciona con muchos Carritos, a través de "Orden"
User.hasMany(Carrito, {as: "user"}); // Con esto le damos el id de Usuario al carrito
User.belongsToMany(Product, {through: Review}) //TE da el product id
Product.belongsToMany(User, {through: Review}) // Te da el user id        EL producto tiene reviews de muchos usuarios
//Product.hasMany(User, {as: "product"});
User.belongsToMany(Carrito, {through: Ordencompra})//La orden de compra contiene carritos de un usuario
Carrito.belongsToMany(User, {through: Ordencompra})// toma los datos de carrito y user y crea la tabla intermedia Orden de compra
  
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');

}; 
 
