import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { postUser, cleanMessage, authGoogle } from '../../Redux/user'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useHistory } from 'react-router';
import { useAlert } from "react-alert";
import { loadAuth2 } from "gapi-script";


const NuevaCuenta = ({ history }) => {
    const historia = useHistory()
    const usuario = useSelector(store => store.user.user);
    const error = useSelector(store => store.user.error)
    const dispatch = useDispatch()
    // console.log(usuario)
    const [err, setError] = useState(false)
    const [passworderr, setPassword] = useState(false)
    const [access, accessPassword] = useState(false)

    
    useEffect(() => {
        if (usuario.token) {
          history.push('/')
        }
        setError(false)
        setPassword(false)
        return () => dispatch(cleanMessage())
    
      }, [usuario])


      const alert = useAlert();

    // State para iniciar sesión
    const [user, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // extraer de usuario
    const { nombre, email, password, confirmar } = user;

    const onChange = e => {
        guardarUsuario({
            ...user,
            [e.target.name]: e.target.value
        })
        setError(false)
        setPassword(false)
        dispatch(cleanMessage())
    }


    const onSubmit = (e) =>{
        e.preventDefault()
        if(!email || !password || !confirmar)
        return setError(true)
        if(password !== confirmar)
        return setPassword(true)
    }

    // Cuando el usuario quiere iniciar sesión

    const handleCreate = () => {
        const info = {
            name: user.nombre,
            email: user.email,
            password: user.password
        }
        if(user.nombre && user.email && user.password === user.confirmar){
            dispatch(postUser(info))
        }
        accessPassword(true)
      }



      const attachSignin = (element, auth2) => {
        auth2.attachClickHandler(element, {},
          (googleUser) => {
            dispatch(authGoogle(googleUser));
    
          }, (error) => {
            console.log(JSON.stringify(error))
          });
      }
    
    
    
      useEffect(() => {
        const getApiGoogle = async () => {
          const CLIENT_GOOGLE = '880118948373-ael4igsvhmjssb6qflr341rdgt45ct2f.apps.googleusercontent.com'
          let auth2 = await loadAuth2(CLIENT_GOOGLE, '');
          attachSignin(document.querySelector('#btn-google'), auth2);
        }
    
        getApiGoogle();
      }, [])
    


    return (
        <div className="form-usuario"  >
            <div className="contenedor-form sombra-dark">
                <h1 style= {{textAlign:"center"}}>Crear una cuenta</h1>
                <br/> 

                <form
                 onSubmit={(e)=>onSubmit(e)} 
                >
             <div>
        <button onClick={(e) => e.preventDefault()} id='btn-google' style={{border: "0", backgroundColor: "white", borderRadius: "50%", marginLeft: "180px"}} > <img style={{width: "30px", height: "45px"}} src='https://www.flaticon.es/svg/static/icons/svg/60/60786.svg' /></button>
           </div>
           <br/><br/>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar contraseña</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu Password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <button type="submit" className=" btn btn-primario btn-block" onClick={(e) => handleCreate(e)} >Crear usuario</button>
                    </div>
                </form>
                {
             error && <div className='mx-auto text-center'><span className='text-center text-danger mb-1'>{error}</span></div>
              }
                {err && <div className='mx-auto text-center'><span className='text-center text-danger mb-1'>Los campos son obligatorios</span></div>}
                {!error && access && <div className='mx-auto text-center'><span className='text-center text-access mb-1' style={{paddingTop:"10px", fontSize: "20px", color: "green"}} >Usuario creado</span></div>}
                {passworderr && <div className='mx-auto text-center' ><span className='text-center text-danger mb-1'>Las contraseñas no coinciden</span></div>}
                <Link to={'/login'} className="enlace-cuenta">
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}

export default NuevaCuenta;