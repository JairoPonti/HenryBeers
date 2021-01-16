require('dotenv').config();
const jwt = require('jsonwebtoken');
const { SIGNATURE } = process.env;

// Verifcar token
const verifyToken = (request, response, next) => {

  // Obtener cabeceras del objeto request.
  let token = request.get('Authorization');

  // Comprobar que el token es valido
  if (token) {

    // Eliminar el 'Bearer' del tokenbearer
    token = token.slice(7, token.length);

    jwt.verify(token, SIGNATURE, (error, payload) => {

      // Si el token fue modificado o expiró
      if (error) {
        return response.status(401).json({
          error: 'Token no valido o expirado.'
        });
      }

      request.user = payload.user;
      next();

    });

  }
}

module.exports = { verifyToken }; 