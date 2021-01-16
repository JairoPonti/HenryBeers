import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import Orden from '../Orden/orden';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown ,DropdownItem , DropdownMenu, DropdownToggle } from 'reactstrap';
import {getOrdenes, getOrdenesCread,getOrdenesCanc, getOrdenesCarri,getOrdenesProc, getOrdenesComp }  from "../../Redux/Carrito"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Ordenes = () => {
  const [buttonclick, setButtonclick] = useState(false)
  const [dropdown, setDropdown] = useState(false) //estado para filtrar datos de la tabla
  const classes = useStyles();
  const ordenes = useSelector((store) => store.carrito.ordenes); //Accedo al estado del carrito 
  const dispatch = useDispatch();
   

   
  useEffect(() => {

  }, [ordenes]);

  // console.log(ordenes);

   const abrirCerrarDropdown = ()=> {
      setDropdown(!dropdown)
   }

   //funcionalidades para poder listar segun el filtro //


  
   const handleOrdens = () => {
     dispatch(getOrdenes())
    }

   const handleCompletada = async () =>{
      dispatch(getOrdenesComp())
    }

   
   

  const handleCanceladas= async () =>{ 
    dispatch(getOrdenesCanc())
  }

  const handleCreada = async() =>{
    dispatch(getOrdenesCread())
  }

  const handleProcesadas = async() => {
  dispatch(getOrdenesProc())
  } 

  const handleCarritos = async() => {
    dispatch(getOrdenesCarri())
  }

   const handleButton = ()=>{
    setButtonclick(false)
    
   } 

  return (
    <div style={{marginTop: "50px"}} >
       <Dropdown isOpen = {dropdown} toggle={abrirCerrarDropdown}>
          <DropdownToggle caret >
            FILTRAR POR STATUS
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick= {()=> handleOrdens()}> Todas las Ordenes </DropdownItem>
            <DropdownItem onClick= {()=> handleCreada()}> Ordenes Creadas </DropdownItem>
            <DropdownItem onClick= {()=>handleCarritos()}> Carritos</DropdownItem>
            <DropdownItem onClick= {()=>handleCompletada()}> Ordenes  Completas</DropdownItem>
            <DropdownItem onClick= {()=>handleProcesadas()}> Ordenes Procesadas</DropdownItem>
            <DropdownItem onClick= {()=>handleCanceladas()}>Ordenes Canceladas</DropdownItem>
          </DropdownMenu>
       </Dropdown>
       <br>
       </br>

      {ordenes && ordenes[0] && (
        <div>
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Fecha de creacion</th>
                <th scope="col">ID de orden</th>
                <th scope="col">ID de user</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
            
              {ordenes && 
                ordenes.map((e) => (
                  <tr>
                    <td>{e.createdAt.slice(0,10)}</td>
                    <td>{e.id}</td>
                    <td>{e.userId}</td>
                    <td>{e.status}</td>
                    <td scope="col">
                       <Link to ={`/orden/${e.id}`} > 
                        <Button variant="contained" color="secondary" onClick={()=> handleButton() } >
                          Ver orden
                        </Button>
                      </Link>
                      {buttonclick ? <Orden datas={e.id, e.product}/> : null} 
                    </td>
                  </tr>
                 ))}
              </tbody>
          </table>

        </div>
      )}
         {ordenes && !ordenes[0] && <div className="divcarritovacio">
            <h2>¡No hay órdenes para visualizar!</h2>
          </div>}
    </div>
  );
};

export default Ordenes;