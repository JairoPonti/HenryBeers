const server = require("express").Router();
const { Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const { User, Carrito, Product, Orden, Ordencompra } = require("../db.js");

const mailgunLoader = require('mailgun-js')

let mailgun = mailgunLoader({
  apiKey: '449040c3c5d90be79e408881926be11a-9b1bf5d3-6dcb9631',
  domain: 'sandboxdaf8c8f62a9b47ffb8439c447170266e.mailgun.org'
})

const sendEmail = (to, from, subject) =>{
 let data = {
   to,
   from,
   subject,
   template: 'forgot-password'
  }
 return mailgun.messages().send(data)
}

// CART

server.post("/:userId/carrito", (req, res) => {
  const id = req.params.userId;
  const productId = req.params.productId;

  Carrito.findOrCreate({ where: { userId: id, status: "carrito" } }) // Se setea por default el estado "carrito(está en 0)"

    .then((product) => {
      res.status(201).send(product);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

server.post("/guest/carrito", (req, res) => {
  Carrito.findOrCreate({ where: { status: "carrito" } }) // Se setea por default el estado "carrito(está en 0)"

    .then((product) => {
      res.status(201).send(product);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

server.delete("/:userId/deletecart/:carritoId", (req, res) => {
  //Elimina el carrito completo
  const id = req.params.userId;
  const carritoId = req.params.carritoId;

  Carrito.destroy({ where: { userId: id, id: carritoId } })

    .then((product) => {
      res.sendStatus(201); // El destroy no permite enviar json, por eso solo enviamos sendStatus
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400); // El destroy no permite enviar json, por eso solo enviamos sendStatus
    });
});

server.put("/product/:productId/increment/:carritoId", (req, res) => {
  const { productId, carritoId } = req.params;

  Orden.update(
    { quantity: Sequelize.literal("quantity + 1") },
    {
      where: {
        productId,
        carritoId,
      },
    }
  )
    .then((order) => {
      res.status(201).send(order);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

server.delete("/product/:productId/delete/:carritoId", (req, res) => {
  //Elimina un producto de un determinado carrito
  const { productId, carritoId } = req.params;
  Carrito.findByPk(carritoId)
    .then((carrito) => {
      carrito.removeProducts(productId).then((newOrden) => {
        res.status(201).send({ message: "Se eliminó el producto", newOrden });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

server.put("/product/:productId/decrement/:carritoId", (req, res) => {
  const { productId, carritoId } = req.params;

  Orden.update(
    { quantity: Sequelize.literal("quantity - 1") },
    {
      where: {
        productId,
        carritoId,
      },
    }
  )
    .then((order) => {
      res.status(201).send(order);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

//Model.update({ field: sequelize.literal('field + 2') }, { where: { id: model_id } });

server.post("/:productId/orden/:carritoId", (req, res) => {
  //Las tablas intermedias pueden tener: GET, SET, ADD y REMOVE
  const { productId, carritoId } = req.params;

  Carrito.findByPk(carritoId)
    .then((carrito) => {
      carrito.addProducts(productId).then((newOrden) => {
        res.status(201).send({ message: "se agrego la orden", newOrden });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

server.get("/get", (req, res) => {
  //TRAE TODOS LOS CAMisCaI
  Carrito.findAll(
    {
      include: Product, //Con el include, uno tablas
    },
    {
      include: Orden,
    }
  )
    .then((carrito) => {
      res.status(201).send(carrito);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
server.get("/orden/:id", (req, res) => {
  //para traer una sola orden
  const Id = req.params.id;
  Carrito.findOne(
    {
      where: {
        id: Id,
      },
      include: Product,
    },

   
  {
    include: Orden,
  })
  .then(carrito=>{
      res.status(201).send(carrito)
  })
  .catch(err=>{
    console.log(err)
      res.status(400).send(err)
  })
})
// http://localhost:4000/users/18/orden/50 

server.get('/:idUser/orden/:id', (req, res)=>{ //para traer una sola orden de un determinado usuario
  const Id = req.params.id
  const idUser=req.params.idUser
  Carrito.findOne({
    where:{
      userId:idUser,
      id:Id,  
    },
    include: Product
  },{
    include: Orden
  })
  .then(carrito=>{
      res.status(201).send(carrito)
  })
  .catch(err=>{
    console.log(err)
      res.status(400).send(err)
  })
})



server.put("/procesando/:carritoId", (req, res) => {
  const carritoId = req.params.carritoId;

  Carrito.update(
    { status: "procesando" },
    {
      where: {
        id: carritoId,
      },
    }
  )
    .then((carrito) => {
      res.status(201).send(carrito);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

server.put("/cancelada/:carritoId", (req, res) => {
  const carritoId = req.params.carritoId;

  Carrito.update(
    { status: "cancelada" },
    {
      where: {
        id: carritoId,
      },
    }
  )
    .then((carrito) => {
      res.status(201).send(carrito);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});
server.put("/creada/:carritoId", (req, res) => {
  const carritoId = req.params.carritoId;

  Carrito.update(
    { status: "creada" },
    {
      where: {
        id: carritoId,
      },
    }
  )
    .then((carrito) => {
      res.status(201).send(carrito);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

server.put("/completada/:carritoId", (req, res) => {
  const carritoId = req.params.carritoId;

  Carrito.update(
    { status: "completa" },
    {
      where: {
        id: carritoId,
      },
    }
  )
    .then((carrito) => {
      res.status(201).send(carrito);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});



server.get("/:userId/carritos", (req, res) => {
  const { userId } = req.params;

  Carrito.findOne(
    {
      where: {
        userId,
        status: "carrito",
      },
      include: Product,
    },
    {
      include: Orden,
    }
  )

    .then((carrito) => {
      res.status(201).send(carrito);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

server.get("/carrito/:id", (req, res) => {
  // Trae todos los carritos de un usuario, Get a /users/carrito/:id
  const id = req.params.id;

  Carrito.findAll({
    where: {
      userId: id,
    }
  },{
    include: Ordencompra
  })
    .then((carrito) => {
      res.status(201).send(carrito);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send(error);
    });
});






//------------------------------------------------> rutas para filtrar 

server.get('/get', (req, res)=>{ //TRAE TODOS LOS CARRITOS
  Carrito.findAll({
      include: Product  //Con el include, uno tablas
  },{ 
      include: Orden
  })
  .then(carrito=>{
      res.status(201).send(carrito)
  })
  .catch(err=>{
      res.status(400).send(err)
  })
})
 //http://localhost:4000/users/getCread

server.get('/getCread', (req, res)=>{ //TRAE TODOS LOS CARRITOS con status creada
  Carrito.findAll({ where:{ status: "creada"},
      include: Product  //Con el include, uno tablas
  }, { 
      include: Orden
  })
  .then(carritoCread=>{
      res.status(201).send(carritoCread)
  })
  .catch(err=>{
      res.status(400).send(err)
  })
})


//http://localhost:4000/users/getCanc

server.get('/getCanc', (req, res)=>{ //TRAE TODOS LOS CARRITOS con status cancelada
  Carrito.findAll({ where:{ status: "cancelada"},
      include: Product  //Con el include, uno tablas
  }, {                                                                 
      include: Orden
  })
  .then(carritoCanc=>{
      res.status(201).send(carritoCanc)
  })
  .catch(err=>{
      res.status(400).send(err)
  })
})

//http://localhost:4000/users/getCarri  ruta para postman

server.get('/getCarri', (req, res)=>{ //TRAE TODOS LOS CARRITOS con status carrito
  Carrito.findAll({ where:{ status: "carrito"},
      include: Product  //Con el include, uno tablas
  }, { 
      include: Orden
  })
  .then(carrito=>{
      res.status(201).send(carrito)
  })
  .catch(err=>{
      res.status(400).send(err)
  })
})

//http://localhost:4000/users/getProce  ruta para postman

server.get('/getProce', (req, res)=>{ //TRAE TODOS LOS CARRITOS con status procesando
  Carrito.findAll({ where:{ status: "procesando"},
      include: Product  //Con el include, uno tablas
  }, { 
      include: Orden
  })
  .then(carritoProce=>{
      res.status(201).send(carritoProce)
  })
  .catch(err=>{
      res.status(400).send(err)
  })
})
//http://localhost:4000/users/getcomple
server.get('/getcomple', (req, res)=>{ //TRAE TODOS LOS CARRITOS con status completada
  Carrito.findAll({ where:{ status: "completa"},
      include: Product  //Con el include, uno tablas
  }, { 
      include: Orden
  })
  .then(carritocomple=>{
      res.status(201).send(carritocomple)
  })
  .catch(err=>{
      res.status(400).send(err)
  })
})







//This will add methods getUsers, setUsers, addUsers to Project, and getProjects
//, setProjects and addProject to User.

//Register (creación de usuario) ---> funcionando
server.post("/", (req, res) => {

  const { email, password, name } = req.body;
  User.create({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
  })
    .then((user) => {      
      let data = {
        to: user.email,
        from:'henrybeers@gmail.com',
        subject:`Hola!`,
        template: 'new-users',
        'h:X-Mailgun-Variables': JSON.stringify({
          'nombre': `${user.name}`
        })
      }

      mailgun.messages().send(data, (error, body) => {

        if (error) {
          return res.status(500).json({
            error: error.message
          });
        }

        // Correo enviado al email del user
        return res.status(200).json({
          message: 'Creado correctamente'
        });

      });

    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
    });
});

//Delete user ---->funcionando
server.delete("/:id", (req, res) => {
  //DELETE a /users/:id
  const id = req.params.id;
  User.destroy({
    where: { id: id },
  })
    .then((id) => {
      res.status(200).send("Usuario " + id + " eliminado"); //  Agregué status//REVISAR CONSOLOGUEO, NO ACTUALIZA ID
    })
    .catch(function (err) {
      console.log("delete failed with error: " + err);
      // handle error;
    });
});

//para traer todos los usuarios  ---->funcionando
server.get("/usuarios", (req, res, next) => {
  // GET a /users/usuarios
  User.findAll()
    .then((users) => {
      res.status(201).send(users);
    })
    .catch(next);
});

server.get("/usuario/:id", (req, res) => {
  // GET a /users/usuario/:id (TRAE 1 SOLO USUARIO)
  // TRAEMOS 1 USUARIO, PARA LUEGO UPDATEARLO
  const { id } = req.params;

  User.findOne({
    where: {
      id,
    },
  })
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//Update user
//PUT /users/:id//update ---->funcionando
server.put("/:id", async (req, res) => {
  const userId = req.params.id;
  const user = await User.findByPk(userId);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    const updatedUser = await user.save();
    res.send({
      name: updatedUser.name,
      username: updatedUser.username,
      email: updatedUser.email,
      password: updatedUser.password,
      isAdmin: updatedUser.isAdmin,
    });
    // console.log("Usuario actualizado");
    alert("Usuario actualizado");
  } else {
    res.status(404).send({ message: "El usuario no se pudo actualizar" });
  }
});

//logeo sign up
server.post("/signin", async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (signinUser) {
    res.send({
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
    });
  } else {
    res.status(401).send({ message: "Invalid Email or Password." });
  }
});

// crear admin

server.post('/createadmin', async (req, res) => {
    try {
      const user = new User({
        name: 'admin',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('admin', 10),
        isAdmin: true,
      }); 
      const newUser = await user.save();
      res.send(newUser);   
    } catch (error) {
      res.send({ message: error.message });
    }
  });
  
  
  //checkout compra http://localhost:4000/users/:userId/carrito/:id

server.post("/:userId/carrito/:id", (req, res) => {
  const { userId, id } = req.params;
  const { pais, ciudad, direccion_envio, codigo_postal, numero_telefono} = req.body;
  User.findByPk(userId)
  .then((user)=>{
    user.addCarritos(id)
    .then((jairo)=>{
      Ordencompra.update({pais, ciudad, direccion_envio, codigo_postal, numero_telefono},{
        where:{userId:userId, carritoId:id}})
        .then(rev=>{
          res.status(201).json(rev)
    })
    .catch((err) => {
      console.log(err)
      res.status(400).send(err)
       })
  })
  .catch((err) => {
     console.log(err, "sss=>")
     res.status(400).send(err)
      })
  });
  
});
 


module.exports = server;

