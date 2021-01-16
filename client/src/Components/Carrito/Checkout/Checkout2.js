import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import {getcarrito} from '../../../Redux/Carrito'
import axios from 'axios';


 const FormularioDatosEnvio = ({history}) => {

  const dispatch = useDispatch()
  const ordenes = useSelector((store) => store.carrito.carrito);
  // console.log(ordenes.id)
  const user = useSelector((store) => store.user.user)
  const [form, actualizarForm] = useState({
    pais: "",
    ciudad: "",
    direccion_envio: "",
    codigo_postal: "",
    numero_telefono: "",
  });

  const onChange = (e) => {
    actualizarForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };



  const {
    pais,
    ciudad,
    direccion_envio,
    codigo_postal,
    numero_telefono,
  } = form;
 

  var suma = 0

  const sumar = async() => {

    for(let i = 0; i < ordenes.products.length; i++){
      suma += ordenes.products[i].price * ordenes.products[i].orden.quantity
    }

    const info = {
      email: user.email,
      total: suma
    }

    const {data} = await axios.post(`http://localhost:4000/auth/checkout/user`, info)

    return suma

  }

   /* onst handleCreate = () => {
    const form = {
        pais: form.pais,
        ciudad: form.ciudad,
        direccion_envio: form.direccion_envio,
        codigo_postal: form.codigo_postal,
        numero_telefono:form.numero_telefono
    }
    if(form.pais && form.ciudad && form.direccion_envio && form.codigo_postal && form.numero_telefono ){
        dispatch(postCheckout(form))
    }
    console.log(form)
  } */
  
  // console.log(ordenes)

 const onSubmit= e =>{
   e.preventDefault()
   actualizarForm({
    pais:'',
    ciudad: '',
    direccion_envio: '',
     codigo_postal: '',
    numero_telefono: '',
    
  });
 }

 const postChek = async (userId, ordenId)=>{
  
  const info = {
    pais: form.pais,
    ciudad: form.ciudad,
    direccion_envio: form.direccion_envio,
    codigo_postal: form.codigo_postal,
    numero_telefono:form.numero_telefono
}
if(form.pais && form.ciudad && form.direccion_envio && form.codigo_postal && form.numero_telefono ){
  const {data}= await axios.post(`http://localhost:4000/users/${userId}/carrito/${ordenId}`, info)
  await axios.put(`http://localhost:4000/users/procesando/${ordenId}`) 
  sumar()
  localStorage.removeItem("carrito");
  alert('Compra exitosa')
  history.push('/')
}
 

 }
  

    

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Finalizar Compra</h1>

        <form
         onSubmit={(e)=>onSubmit(e)} 
        >
         
          <div className="campo-form">
            <label htmlFor="pais">Pais</label>
            <input
              type="text"
              id="pais"
              name="pais"
              placeholder="pais"
              value={pais}
               onChange={onChange} 
            />
          </div>
          <div className="campo-form">
            <label htmlFor="ciudad">Ciudad</label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              placeholder="Ciudad"
              value={ciudad}
               onChange={onChange} 
            />
          </div>
          
          <div className="campo-form">
            <label htmlFor="direccion">Direccion</label>
            <input
              type="text"
              id="direccion"
              name="direccion_envio"
              placeholder="calle, numero, dpto..."
              value={direccion_envio}
               onChange={onChange} 
            />
          </div>

          <div className="campo-form">
            <label htmlFor="codigo_postal">Codigo Postal</label>
            <input
              type="text"
              id="codigo_postal"
              name="codigo_postal"
              placeholder="Codigo Postal"
              value={codigo_postal}
               onChange={onChange} 
            />
          </div>
          <div className="campo-form">
            <label htmlFor="Telefono">Telefono</label>
            <input
              type="text"
              id="numero_telefono"
              name="numero_telefono"
              placeholder="0111561111111"
              value={numero_telefono}
               onChange={onChange} 
            />
          </div>

          <div className="campo-form">
            <button
              className=" btn btn-primario btn-block"
              onClick={() => postChek(user.id, ordenes.id)} 
            >
              Comprar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default FormularioDatosEnvio;
