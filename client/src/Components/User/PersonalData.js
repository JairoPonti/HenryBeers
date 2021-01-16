import React from 'react'
import {Link} from 'react-router-dom';
import { useSelector} from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";


const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

function PersonalData(){
    
    const classes = useStyles();
    const usuario = useSelector(store => store.user.user); //Accedo al estado del carrito

    // console.log(usuario)
    return (

      <div>
        
          <h1>Mis datos</h1>
      <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">NOMBRE</th>
          <th scope="col">EMAIL</th>
          <th scope="col">ID USUARIO</th>
          <th scope="col">CONTRASEÑA</th>
        </tr>
      </thead>
   
      <tbody>
      <tr>
                    <td>{usuario.name}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.id}</td>
                    <td>{usuario.password ? "**" : null}</td>
                    <td scope="col">
             </td>
             </tr>
            </tbody>
          
        {/* {<a href="javascript:history.back(3)" className='btn1' style={{marginTop: "10px"}} > */}
        <div>
        <Link to={`/resetPass/${usuario.token}`} className="enlace-cuenta">

<Button variant="contained" color="secondary" style={{marginTop: "10px"}}  >
          Cambiar contraseña
        </Button>
        </Link>

        </div>
       
 
 {/* <div className="card" style={{width: "700px", height: "100%", marginLeft: "30%"}}>
<div className="card-body">
<h1 className="card-title">  NOMBRE: {usuario.name}</h1>
<h1 className="card-title">  EMAIL: {usuario.email}</h1>
<h2 className="card-subtitle mb-2 text-muted"> ID USUARIO: {usuario.id}</h2> */}


        


          </table>
       </div>

    )
}

export default PersonalData