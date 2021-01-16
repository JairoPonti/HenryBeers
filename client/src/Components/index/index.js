import React, {useEffect} from "react";
import Catalogo from "../Catalogo/Catalogo";
import Carrusel from "../Carrusel/carrusel";
import {useSelector, useDispatch} from 'react-redux'
import {getcarrito} from '../../Redux/Carrito'
import axios from 'axios'
import { useHistory } from 'react-router'


const Inicio = () => {
  const history = useHistory()
  const user = useSelector(store => store.user.user)
  const dispatch = useDispatch()
  const carrito = useSelector(store => store.carrito.carrito)



  useEffect(()=>{
    if(user.id){
      dispatch(getcarrito(user.id))
    
      const fetchData =async()=>{
        await axios.post(`http://localhost:4000/users/${user.id}/carrito`)    
      }
      fetchData()
    }

      if(user.id && localStorage.carrito){
        let data = JSON.parse(localStorage.getItem("carrito"));
        // console.log(data.carrito)
        try {
          data.carrito.map(async (e)=>{
            const {data} = await axios.post(`http://localhost:4000/users/${e.productId}/orden/${carrito.id}`)
          })
         
        } catch (error) {
          console.log(error)
        }
    
      }
  },[])



  return (
    <div>
      <div>
        <img
          src="https://images.ctfassets.net/sz2xpiwl6od9/2UuFQgcfoDaQJ6LlcsXXhj/aaa473b7d45afbd4334dfab7d7a2e78f/Elements-of-Beer-CBB37-4-Fewer-Yeasts.jpg?w=1600&fm=jpg"
          style={{
            width: "2000px",
            height: "650px",
            marginTop: "3px",
            display: "flex",
            justifyContent: "center",
          }}
        />
    <h2>Que opinan nuestros clientes</h2>
        <Carrusel />
      </div>
      <h2>Echa un vistazo a nuestros productos estrellas</h2>
      <div>
        <Catalogo />
      </div>
    </div>
  );
};
export default Inicio;
