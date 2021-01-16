import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetPassword, cleanMessageResetPassword } from '../../Redux/user'


export default function ResetPass({token}) {
  const resetPasswordMessage = useSelector(store => store.user.reset_password)
  const dispatch = useDispatch()

  const [Password, setResetPassword] = useState('');
  
  const [error, setError] = useState(false);
  const [usuario, guardarUsuario] = useState({
    password: '',
    nueva: '',
  });
  
 
  const handleResetPassword = async () => {

    if(usuario.password != usuario.nueva){
      setError(true)
    }

    if (usuario.password == usuario.nueva) {
      setError(false)
      dispatch(resetPassword(usuario.password, token));
    }
  }
  

  // extraer de usuario
  const { email, password, nueva } = usuario;
  
  const handleInput = (e) => {
    // if (error) setError("");
    // if (Password) setResetPassword('');
    guardarUsuario({ ...usuario, [e.target.name]: e.target.value });
    // console.log(nueva);
  };


  const handleSubmit = (e) =>{
    e.preventDefault()
  }


  useEffect(() => {
    return () => dispatch(cleanMessageResetPassword())
  }, [])

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Cambiar Contraseña</h1>

        <form onSubmit={handleSubmit}>
        <hr />

        {
          error ? <div className='mx-auto text-center'><span className='text-danger'> Las contraseñas no coinciden </span></div>: null
        }

          {
            resetPasswordMessage && <div className='mx-auto text-center'><span className={resetPasswordMessage.ok === true ? 'text-success' : 'text-danger'}>{resetPasswordMessage.message}</span></div>
          }
          <div className="campo-form">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={usuario.password}
              onChange={handleInput}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="confirmar">Nueva contraseña</label>
            <input
              type="password"
              id="nueva"
              name="nueva"
              placeholder="Repite tu Password"
              value={usuario.nueva}
              onChange={handleInput}
            />
          </div>

          <div className="campo-form">
            <button
              className=" btn btn-primario btn-block"  onClick={() => handleResetPassword()} 
            >Enviar</button>
          </div>
        </form>
        <span > <Link className="enlace-cuenta" to='/login'>Volver al login</Link>
        </span>
        <div ><Link className="enlace-cuenta" to='/NuevaCuenta'>Crear usuario</Link>
        </div>
      </div>
    </div>
  );
}
