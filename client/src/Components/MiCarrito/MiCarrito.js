import React,{useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getPedido} from '../../Redux/Carrito';
import Button from "@material-ui/core/Button";

function MiCarrito (data){
    

    const orden = useSelector(store => store.carrito.orden); //Accedo al estado del carrito
    const dispatch = useDispatch();

    console.log(data);

    var suma = 0

    if(orden && orden.products){
      const sumar = async() => {
  
        for(let i = 0; i < orden.products.length; i++){
          suma += orden.products[i].price * orden.products[i].orden.quantity
        }
    
        return suma
    
      }
      sumar()
    }
    useEffect(() => {
        dispatch(getPedido(data.match.params.id))
      //Hago que siempre se actualice la pág. Cuando la pág, encuentra que el cart está en "procesando"
  
    }, [orden]);
    // console.log(orden)
    return (
        <div style={{marginTop: "40px"}} >

<a href="javascript:history.back(1)" className='btn1' style={{marginTop: "10px"}} >
  <div  >
  <Button variant="contained" color="secondary"  >
   Volver
 </Button>
 </div></a>
<div className="card" style={{width: "700px", height: "100%", marginLeft: "30%"}}>
<div className="card-body">
<h1 className="card-title">ID de la orden {orden.id}</h1>
<h2 className="card-subtitle mb-2 text-muted">Status de la orden: {orden.status}</h2>
{orden.products && orden.products.map((e)=>(
                 <div>
                   <h5>Nombre: {e.name}</h5>
                  <h6>Cantidad: {e.orden.quantity}</h6>
                  </div>
                 ))}
                <h1>Total:${suma}</h1> 
  </div>
    </div>
            

        </div>
    )
}

export default MiCarrito