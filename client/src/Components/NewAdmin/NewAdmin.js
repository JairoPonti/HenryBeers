import React from 'react'
import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from "react-router-dom"
import axios from 'axios'
import {getUsers, deleteUser} from '../../Redux/user.js'
import Button from "@material-ui/core/Button";
import User from '../User/Login.js'





export default function NewAdmin () {  ///CTRL+K+C COMENTAR Y CTRL+K+U DESCOMENTAR
  
  const dispatch = useDispatch()
  const usersList = useSelector(store => store.user.users)


  useEffect(()=>{
    dispatch(getUsers())
  },[usersList])

  
 const handleUpdate = async(id) =>{

      
  if(window.confirm('¿Esta seguro que quiere asignarlo como ADMINISTRADOR?')) {
        const {data} = await axios.put(`http://localhost:4000/auth/promote/${id}`)
        // console.log(data)
        alert('se ha asignado un nuevo ADMINISTRADOR')
  }

}
    
   const handleChange = async(id) =>{

    if(window.confirm('¿Esta seguro que quiere quitarle los permisos como ADMINISTRADOR?')) {
    const {data} = await axios.put(`http://localhost:4000/auth/change/${id}`)
    // console.log(data)
    alert('Este usuario ya no es administrador')
    }
}
const handleDelete = async(id) =>{


  if(window.confirm('¿Esta seguro que quiere eliminar al usuario?')) {
  const {data} = await axios.delete(`http://localhost:4000/users/${id}`)
  // console.log(data)
  alert('Usuario eliminado')
  }
}
     

    return (
      <div>
        {usersList && usersList[0] && (
          <div>
              <h5>ADMINISTRAR USUARIOS</h5>
            <table class="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">NOMBRE</th>
                  <th scope="col">EMAIL</th>
                  <th scope="col">ROL</th>
                </tr>
              </thead>
              <tbody>
                {usersList &&
                  usersList.map((e) => (
                    <tr>
                      <td>{e.id}</td>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>{usersList && e.isAdmin === true ? "ADMIN" : null }</td>
                      <td scope="col">
                      <td>
                      {e.isAdmin ? <Link to="/admin"></Link> : <Link to = "/"></Link> }
                      {/* {usersList && e.isAdmin === true ? "ADMIN" : null } */}
                      
                       </td> <td>
                      <span>    </span>
                          {!e.isAdmin ?    
                        <Button variant="contained" color="primary" onClick={()=> handleUpdate(e.id) } >
                         ASIGNAR ADMIN
                          
                          </Button> : null}

                        <span>    </span>

                        {e.isAdmin ? 
                        <Button variant="contained" color="dark" onClick={()=> handleChange(e.id) } >
                          ELIMINAR ADMIN
                                
                        </Button> : null}

                        <span>    </span>

                         {e.id ? 
                         <Button variant="contained" color="secondary" onClick={()=> handleDelete(e.id) } >
                          ELIMINAR USUARIO
        
                         </Button> : null}

                      </td>
                      
                      </td>
                    </tr>
                  ))}

              </tbody>
            </table>
           


          </div>
        )}
      </div>
    )
};