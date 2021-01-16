const server = require('express').Router();
const { Product, Category } = require('../db.js');
const { Sequelize:{Op}} = require('sequelize');
const { Sequelize } = require('sequelize')

server.get('/', (req, res, next) => {
	Product.findAll({
		include: Category
	})
		.then(products => {
			res.send(products);
		})
		.catch(next);
});

server.post('/create', (req,res)=>{

	const {name, description, price, stock, image} = req.body
		Product.findOrCreate({where:{
			name, description, price, stock, image
		}})
	.then((obj) =>{
			res.status(200).json(obj)
		  })
	.catch(err=>{
			  console.log()
			  res.status(400).json(err)
	})
})


server.post('/:idProduct/category/:idCategory', (req, res) => {
    const {idProduct, idCategory} = req.params;

    Product.findByPk(idProduct)
        .then((product) => {
            product.addCategories(idCategory)
            .then((newCategory) => {
                res.status(201).json({message: 'Se agregó categoría', newCategory})
            })
        })
        .catch((err) => {
            throw new Error(err)
        });
});

server.delete('/:idProduct/category/:idCategory', (req, res)=>{

	const {idProduct, idCategory} = req.params;
	Product.findByPk(idProduct)
	.then((product)=>{a
		product.removeCategories(idCategory)
		.then((newCategory)=> {
			res.status(201).json({message: "Se elimino correctamente la categoria", newCategory})
		})
	})
	.catch((err)=>{
		throw new Error(err)
	})

})


server.put('/:id', (req,res)=>{// Es un put a /products/update/:id
  const id = req.params.id	
  const {name, description, price, stock, image, category} = req.body
  Product.update({
   name, description, price, stock, image, category
},{where: {id}})
.then((product)=>{
	res.status(200).send('Modificado correctamente')
	// console.log(product)
 })
.catch((err)=>{
	res.status(400).json(err)
	console.log(err)
 }) 
})


server.get('/:id', (req, res)=>{
   const id = req.params.id

   Product.findOne({where: {id}, include: Category})
   .then(product => {
	   res.status(201).json(product)
   })
   .catch(err =>{
	   console.log(err)
	   res.status(404).json(err)
   })
})


server.get('/find/search',(req,res) => {
	Product.findAll({
		where: {
			[Op.or]: {
			  name: {
				[Op.like]: `%${req.query.name}%`,
			  },
			  description: {
				[Op.substring]: `${req.query.name}`,
			  }
			}
		  }
	}).then(products => {
	return res.status(200).json({
		busqueda: products,
		search: req.query.name})}
	).catch(error =>{ 
	return res.status(404).json(error)
	})
})


//CREAR RUTA PARA ELIMINAR PRODUCTO
server.delete("/:id", (req, res) => { //modifiqué /:id, el products está en el index 
    const id = req.params.id;
	Product.destroy({
		where: { id: id }
	}).then((id) => {
		res.status(200).send("Producto" + id + "eliminado")//  Agregué status//REVISAR CONSOLOGUEO, NO ACTUALIZA ID
	}).catch(function (err) {
		console.log("delete failed with error: " + err);
		// handle error;
	});
    
});


server.get('/categoria/:nombreCat', (req, res)=>{
	const {nombreCat} = req.params
	Product.findAll({include: {
		model: Category, where: {
			id: nombreCat 
		}
	}})
	.then((products)=>{
		res.status(201).json(products)
	})
	.catch((err)=>{
		res.status(400).send(err)
	})
	
})


server.put('/increment/:productId', (req, res)=>{
    const {productId} = req.params

    Product.update({ stock: Sequelize.literal('stock + 1')},{where:{
    id: productId
    }})
    .then(product=>{
        res.status(201).send(product)
    })
    .catch(err=>{
        console.log(err)
        res.status(400).send(err)
    })

})

server.put('/decrement/:productId', (req, res)=>{
    const {productId} = req.params

    Product.update({ stock: Sequelize.literal('stock - 1')},{where:{
    id: productId
    }})
    .then(product=>{
        res.status(201).send(product)
    })
    .catch(err=>{
        console.log(err)
        res.status(400).send(err)
    })

})


module.exports = server;




// {
//     "name": "hola",
//     "description": "holaaa",
//     "price": 999,
//     "stock": 324,
//     "image": "sadas",
//     "category": [1,2,3,5]
// }