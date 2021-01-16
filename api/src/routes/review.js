const server = require('express').Router();
const { Sequelize } = require('sequelize');
const { User, Product, Review } = require('../db.js');


//////////ruta para agregar una review

// ruta completa ---> localhost:4000/review/product/idProd/user/iduser
server.post('/product/:idProd/user/:idUser', (req, res) => {
  const {idProd, idUser} = req.params
  const {commentary , calification} = req.body

 Product.findByPk(idProd)
 .then((product) => {
    product.addUsers(idUser)
   .then((newRew)=>{ 
     Review.update({commentary,calification},{
      where:{userId:idUser,productId:idProd}})
     .then(rev=>{
       res.status(201).json(rev)
     })
    })
     .catch((err) => {
       console.log(err)
       res.status(400).send(err)
        })
    //  res.status(201).send({message: 'se agrego la review', nrev})
      })
   .catch((err) => {
     console.log(err, "sss=>")
     res.status(400).send(err)
      })
})

        //////ruta para modificar una review

server.put('/product/:idProd/user/:idUser', (req, res) => {
       const {idProd, idUser} = req.params
       const {commentary, calification} = req.body

       Review.update({calification, commentary}, {
            where: {
                productId: idProd, 
                userId: idUser
            }
       })   .then((reviewMod)=>{
        res.status(201).send(reviewMod)
      })
      .catch((err)=> {
        console.log(err)
        res.status(400).send(err)
      })
   


})

///////ruta para traer todas las reviews
//localhost:4000/review/product/... --->Funciona ok
server.get('/product/:idProd', (req, res)=>{ 
 
  const idProd = req.params.idProd

 Product.findAll({ 
   where: {
     id: idProd,
 },
     include: User 
 }, { 
     include: Review
 })
 .then((products)=>{
     res.status(201).send(products)
 })
 .catch((err)=>{
  console.log(err)
    res.status(400).json(err)
}) 

})
 
//::::::: Eliminar una review :::::::::::

// server.delete('/product/:idProd/:idReview', async (req, res)=>{ // DELETE a /review/product/:id/:idReview (distinto a task-borré review)
  
//   const {idProd, idReview} = req.params;
  
// 	try {
// 		const review = await Reviews.findOne({where: {id: idReview, idProd}});

// 		if (!review) return res.status(404).send('No encontramos la review');
	

// 		await review.destroy();

// 		return res.send('Review eliminada');
// 	} catch (error) {
// 		return res.status(400).send(error.message);
// 	}
// });



server.delete('/product/:idProd/delete/:idUser', (req, res)=>{ // DELETE a /review/product/:id/:idReview (distinto a task-borré review)
  
  const {idProd, idUser} = req.params;

  Product.findByPk (idProd)

    .then (product => {

     product.destroy({where:{userId:idUser}}) 

     })//Es una tabla intermedia: //Las tablas intermedias pueden tener: GET, SET, ADD y REMOVE
		.then(()=> {
			res.status(201).send({message:'se elimino la review'})
		})
     .catch((err)=>{
       console.log(err)
		 res.status(400).send(err)
  })
})






module.exports = server;