import React, { useEffect, useState } from "react";
import axios from "axios";

import { getcarrito, getOrdenes, getPedido } from "../../Redux/Carrito";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import Orden from '../Orden/orden'


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const MisCarritos = () => {
  const user = useSelector(store => store.user.user)
  const [buttonclick, setButtonclick] = useState(false)
//   const classes = useStyles();
  const ordenes = useSelector((store) => store.carrito.ordenes); //Accedo al estado del carrito
  const dispatch = useDispatch();
  const orden = useSelector((store)=> store.carrito.orden);



  // console.log(user)
  // console.log(ordenes);
  // console.log(orden); //me lo trae vacio//


  useEffect((id) => {
 dispatch(getPedido(id))
}, [orden]);

  // recibo la info de ruta que me trae una sola orden 'users/orden/:id'gusrdo la info en el redux luego dispacho// 
   const handleButton = ()=>{
     
      setButtonclick(false)
    } 

    const cancelada = (id) =>{
      const {data} = axios.put(`http://localhost:4000/users/cancelada/${id}`)
      alert( "se cancelo la compra")
    }



  return (
    <div>
        <h1>{`¡Bienvenid@ ${user.name}!`}</h1>
        
       <br />
      {ordenes && ordenes[0] && (
        <div>
        
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Fecha de creacion</th>
                <th scope="col">ID de orden</th>
                {/* <th scope="col">ID de user</th> */}
                <th scope="col">Status</th>
              </tr>
            </thead>
         
            <tbody>
           
             {ordenes && ordenes.map((e)=>(
                  user.id === e.userId ? 
                  <tr>
                    <td>{e.createdAt.slice(0,10)}</td>
                    <td>{e.id}</td>
                    {/* <td>{e.userId}</td> */}
                    <td>{e.status}</td>
                    <td scope="col">
                       <Link to ={`/carrito/${e.id}`}  > {/*q lo mande a otro componente */}
                            <Button variant="contained" color="secondary" style={{marginRight: "20px"}}  > {/*tiene q traer de la ruta del back la info de un carrito especifico */}
                              Ver Detalle 
                            </Button> 
                       </Link>
                      
                       {e.status === "procesando" ?    
                        
                       <Button variant="contained" color="secondary" onClick={()=>cancelada(e.id)} >
                         Cancelar
                       </Button>
                       
                       
                           : null}
                          
                      
                      
                      {buttonclick ? <Orden datas={e.id, e.product}/> : null} 
                      
                    </td>

                  </tr>
            
             :null ))} 
            
        </tbody>
          </table>

          {ordenes && !ordenes[0]&&<div className="divcarritovacio">
            <h2>¡No hay órdenes para visualizar!</h2>
          </div>}
        </div>
      )}
      
    



    </div>
  );
};

export default MisCarritos;