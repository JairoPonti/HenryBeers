import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { recoverPassword, cleanMessageForgotPassword } from '../../Redux/user'

export default function ForgotPass() {

const forgotPassword = useSelector(store => store.user.forgot_password)

const [input, setInput] = useState({
    email: ""
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({
      email: ''
    })
  }

  const handleRecoverPassword = async () => {
    if (input.email) {
      dispatch(recoverPassword(input));
    }
  }

  const handleInputChange = function (e) {
    setInput({
      email: e.target.value
    });
  }

  useEffect(() => {
    return () => dispatch(cleanMessageForgotPassword())
  }, [])

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Ingrese su email</h1>
        {
        forgotPassword && <div className='mx-auto text-center'><span className={forgotPassword.ok === true ? 'text-success' : 'text-danger'}>{forgotPassword.message}</span></div>
        }
        <form onSubmit={handleSubmit}>
        <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={input.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="campo-form">
            <button
              className=" btn btn-primario btn-block" onClick={() => handleRecoverPassword()}
            >Enviar email</button>
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