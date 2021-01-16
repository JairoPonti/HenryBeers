require("dotenv").config();
const server = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {verifyToken} = require('../middleware/authentication')
const { SIGNATURE, CLIENT_ID, RESET_PASSWORD_KEY } = process.env;
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('880118948373-ael4igsvhmjssb6qflr341rdgt45ct2f.apps.googleusercontent.com');

const mailgunLoader = require('mailgun-js')

let mailgun = mailgunLoader({
  apiKey: '449040c3c5d90be79e408881926be11a-9b1bf5d3-6dcb9631',
  domain: 'sandboxdaf8c8f62a9b47ffb8439c447170266e.mailgun.org'
})

const sendEmail = (to, total) =>{
  let data = {
    to: to,
    from:'henrybeers@gmail.com',
    subject:`Hola!, gracias por tu compra!`,
    template: 'forgot-pass',
    'h:X-Mailgun-Variables': JSON.stringify({
      'total': `${total}`
    })
  }
 return mailgun.messages().send(data)
}


server.post('/checkout/user', async(req, res) => {
  try {
    await sendEmail(req.body.email,req.body.total )
    res.send('Email send')
  } catch (error) {
    console.log(error) 
    res.status(500)
  }
})

// Modelo user
const { User } = require("../db");

 

server.get('/me', verifyToken, (request, response) => {

  const { userID } = request.user;

  User.findOne({
    where: {
      id: userID
    }
  })
    .then(user => {
      return response.json({
        user
      });
    })
    .catch(error => {
      return response.status(400).json({
        error: error.message
      });
    })

});

server.put('/update/password', verifyToken ,(req,res) =>{
  const {actualPassword , newPassword} = req.body;
  const {id_user} = req.user;

  User.findOne({
    where: {
      id: id_user
    }
  })
    .then(user => {

      if (!bcrypt.compareSync(actualPassword, user.password)) {
        return res.status(400).json({
          error: 'Password dont match.'
        });
      }

      // Contraseña coincide, actualizar user
      User.update({
        password: bcrypt.hashSync(newPassword, 10)
      }, {
        where: { id: user.id}
      })
        .then(userUpdated => {
          return res.status(200).json({
            message: 'Your password was changed.'
          })
        })
        .catch(error => {
          return res.status(500).json({
            error: error.message
          })
        })

    })
    .catch(error => {
      return res.status(500).json({
        error: error.message
      })
    })

})


// Forgot Password
server.put('/forgot-password', (req, res) => {

  const { email } = req.body;

  // Buscar usuario en la BD
  User.findOne({
    where: {
      email
    }
  })
    .then(user => {

      // Validar que el usuario existe en la BD
      if (!user) {
        return res.status(400).json({
          error: `No existe un usuario con el mail: ${email}`
        });
      }

      // Usuario verificado, generar el token
      const token = jwt.sign({
        id: user.id
      }, RESET_PASSWORD_KEY, { expiresIn: '40m' });

      // Generar mensaje

      let data = {
        to: email,
        from:'henrybeers@gmail.com',
        subject:`Hola!, olvidaste tu contraseña?`,
        template: 'forgot-password',
        'h:X-Mailgun-Variables': JSON.stringify({
          'token': `${token}`
        })
      }


      // Actualizar usuario y agregar token dentro del campo 'resetLink'
      User.update({
        resetLink: token
      }, {
        where: {
          id: user.id
        }
      })
        .then(userUpdated => {

          // Verificar que se actualice el usuario
          if (!userUpdated[0]) {
            return res.status(400).json({
              error: 'No se guardo token para resetear password del usuario.'
            });
          } else {

            // Token guardado (User actualizado) , enviar correo al email
            mailgun.messages().send(data, (error, body) => {

              if (error) {
                return res.status(500).json({
                  error: error.message
                });
              }

              // Correo enviado al email del user
              return res.status(200).json({
                message: `El email fue enviado al mail del usuario: ${user.name}`
              });

            });

          }

        })
        .catch(error => {
          return res.status(500).json({
            error: error.message
          });
        })

    })
    .catch(error => {
      return res.status(500).json({
        error: error.message
      });
    })

});


// Reset password
server.put('/reset-password', (req, res) => {

  const { resetLink, newPassword } = req.body;

  // Verificar que el token exista en el body
  if (resetLink) {

    // Verificar token
    jwt.verify(resetLink, RESET_PASSWORD_KEY, (error, payload) => {

      if (error) {
        return res.status(401).json({
          error: 'Token no válido o expirado.'
        });
      }

      // Verificar que el usuario exista con el 'token' (resetLink) en la BD 
      User.findOne({
        where: {
          resetLink
        }
      })
        .then(user => {

          if (!user) {
            return res.status(400).json({
              error: 'No existe un usuario con este token.'
            });
          }

          // El usuario existe , cambiar contraseña y eliminar token
          User.update({
            password: bcrypt.hashSync(newPassword, 10),
            resetLink: ''
          }, {
            where: {
              id: payload.id
            }
          })
            .then(userUpdated => {

              if (!userUpdated[0]) {
                return res.status(400).json({
                  error: 'Error al cambiar tu password.'
                });
              }

              // Se actualizo la password del usuario  
              return res.status(200).json({
                message: `El usuario: ${user.name} ,ha cambiado correactamente la contraseña!`
              });

            })
            .catch(error => {
              return res.status(500).json({
                error: error.message
              });
            })

        })
        .catch(error => {
          return res.status(500).json({
            error: error.message
          });
        })
      })
    }
})


server.put('/promote/:id', (req, res)=> {
  const id = req.params.id

  User.update({isAdmin:true}, {
  where:{
    id: req.params.id
  }
})
 User.findByPk(id) 
 .then(adminNuevo=>{
 return res.status(201).send({message:"nuevo admin"+id, adminNuevo});
  })
  .catch(error=> {
    console.log(error);
 res.status(400).send(error);
  })
})

server.put('/change/:id', (req, res)=> {
  const id = req.params.id

  User.update({isAdmin:false}, {
  where:{
    id: req.params.id
  }
})
 User.findByPk(id) 
 .then(noEsAdmin=>{
 return res.status(201).send({message:"se quito el permiso con exito"+id, noEsAdmin});
  })
  .catch(error=> {
    console.log(error);
 res.status(400).send(error);
  })
})





// Login: Normal
server.post("/login", (request, response) => {
  const { email, password } = request.body;

  // Buscar usuario
  User.findOne({
    where: {
      email,
    },
  })
    .then((user) => {
      // Verifico que el usuario existe y comparo las contraseñas
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return response.status(400).json({
          error: "Usuario o contraseña incorrectos.",
        });
      }

      //Genero el token
      const token = jwt.sign(
        {
          user: {
            userID: user.id,
            mail: user.email,
            username: user.username,
            admin: user.isAdmin,
            password: user.password,
          },
        },
        SIGNATURE,
        { expiresIn: 60 * 60 * 24 }
      );

      // Devolver el token
      return response.status(200).json({
        email: user.email,
        id: user.id,
        isAdmin: user.isAdmin,
        mensaje: "Token generado",
        token,
      });
    })
    .catch((error) => {
      // Se rompio el servidor
      return response.status(500).json({
        error: error.message,
      });
    });
});



server.get('/me/google', verifyToken, (request, response) => {
  console.log(request.user)
   const { id_user } = request.user;

   User.findOne({
     where: {
       id: id_user
     }
   })
     .then(user => {
       return response.json({
         user
       });
     })
     .catch(error => {
       return response.status(400).json({
         error: error.message
       });
     })

 });

 // Validar token de google
async function verify(token) {

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID
  });

  const payload = ticket.getPayload();

  // Nuevo user
  return {
    name: payload.email.split('@')[0],
    email: payload.email,
    image: payload.picture,
    google: true
  }

}




// Login with Google
server.post('/google', async (req, res) => {

  const token = req.body.token;

  const googleUser = await verify(token)
    .catch(error => {
      return res.status(403).json({
        error: error.message
      });
    })


  User.findOne({
    where: {
      email: googleUser.email
    }
  })
    .then(user => {

      // Verificar que el usuario existe en la BD.
      if (user) {

        // Si el user se autentico con Login normal
        if (!user.google) {

          return res.status(400).json({
            message: 'Debes usar su autenticacion normal.'
          });

        } else {
          // Generar el token
          const token = jwt.sign({
            user: {
              id_user: user.id,
              mail: user.email,
              name: user.name,
              admin: user.isAdmin,
              google: user.google
            }
          }, SIGNATURE, { expiresIn: 60 * 60 * 24 * 30 })

          // usuario logueado con google, retornar token
          return res.status(200).json({
            user: user,
            token
          });

        }

      } else {

        // Si el usuario no existe en la BD agregarlo y devolver token
        User.create({
          name: googleUser.name,
          email: googleUser.email,
          image: googleUser.image,
          google: true,
          password: 'random-password'
        })
          .then(userCreated => {

            // Generar token del userGoogle
            const token = jwt.sign({
              user: {
                id_user: userCreated.id,
                mail: userCreated.email,
                name: userCreated.name,
                admin: userCreated.isAdmin,
                google: userCreated.google
              }
            }, SIGNATURE, { expiresIn: 60 * 60 * 24 * 30 });

            let data = {
              to: userCreated.email,
              from:'henrybeers@gmail.com',
              subject:`Hola!`,
              template: 'new-users',
              'h:X-Mailgun-Variables': JSON.stringify({
                'nombre': `${userCreated.name}`
              })
            }

           mailgun.messages().send(data)

            // Usuario registrado 
            return res.status(201).json({
              user: userCreated,
              token
            });

          })
          .catch(error => {
            return res.status(500).json({
              error: error.message
            });
          })

      }

    })
    .catch(error => {
      return res.status(500).json({
        error: error.message
      });
    })

})




module.exports = server;
