import React, { useEffect } from "react";
import Header from "./Compo2/Header";
import Footer from "./Compo2/Footer.jsx";
import Product from './Components/Product/Product'
import Catalogo from './Components/Catalogo/Catalogo.js'
import axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getbeers } from './Redux/beer'
import { getCategory } from './Redux/category'
// import Admin from './Components/Admin/Admin';
import Dashboard from './Components/Admin/Dashboard';
import Login from './Components/User/Login'
import NuevaCuenta from './Components/User/NuevaCuenta'
import Carrito from './Components/Carrito/Carrito'
import Orden from './Components/Orden/orden'
import { getOrdenes } from "./Redux/Carrito";
import ResetPass from './Components/User/ResetPass'
import { positions, Provider as ProviderAlert } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import {validation, validationGoogle} from './Redux/user'
import UserActivity from './Components/userActivity/userActivity'
import Home from './Compo2/Home'
import NavBar from './Components/NavBar/NavBar'
import FormularioDatosEnvio from './Components/Carrito/Checkout/Checkout2'
import MisCarritos from './Components/MisCarritos/MisCarritos'
import ForgotPass from './Components/User/ForgotPass'
import Nosotros2 from '../src/Compo2/Nosotros2'
// import Catalogo from './Components/Catalogo/catalogo'


const options = {
  timeout: 5000,
  position: positions.MIDDLE
};

function App2() {

  const dispatch = useDispatch()
  const user = useSelector(store => store.user.user)
  const category = useSelector(store => store.category.categories)
  const products = useSelector(store => store.beer.beers)
  const ordenes = useSelector(store => store.carrito.ordenes);
  const busqueda = useSelector(store => store.beer.busca)

  useEffect(() => { // Similar al componentDidMount
    dispatch(validationGoogle())
    dispatch(validation())
    dispatch(getbeers())
    dispatch(getCategory())
    dispatch(getOrdenes())
  }, []) 

// console.log(busqueda)
// console.log(busqueda.busqueda)
// console.log(busqueda.search)
  return (
    <div >

 <ProviderAlert template={AlertTemplate} {...options}>
      <BrowserRouter>

      <Route path="/"
          component={ Home}
        />

        <Route exact path="/"
          component={Header}
        />
        <Route exact path="/"
          component={Footer}
        />
        <Route exact path="/login"
          component={Login}
        />

         <Route exact path="/forgot"
          component={ForgotPass}
        />
        
        <Route exact path="/nuevacuenta"
          component={NuevaCuenta}
        />

        <Route 
        exact path='/resetpassword/:token'
        render={({match}) => <ResetPass  token={match.params.token}/>}
        />

       <Route exact path='/catalogo'
          component={Catalogo}
        />


        <Route
          exact path="/products/search"
          render={() => <Catalogo products={busqueda.busqueda} search={busqueda.search} />}
        />

        <Route exact path="/catalogo/:id"

          render={({ match })=>
          <div className='product'>
          <Product user={user.id} product={products.filter(p => p.id === Number(match.params.id))}/>
        </div>}
        />
        {/* product={products.filter(p => p.id === Number(match.params.id))} */}

        <Route
          exact path="/products/catalogo/:id"
          render={({ match }) => <Catalogo products={products.filter(p => p.categories.id === match.params.id)} category={match.params.id} />}
        />

        
        <Route exact path='/catalogo'
          component={Home}
        />

        <Route
         exact path='/carrito'
         component={Carrito}
        />

        <Route
         exact path='/carrito'
         component={Home}
        />
        
        <Route
         exact path='/userActivity'
         component={Home}
        />
        
        <Route
         exact path='/userActivity'
         component={UserActivity}
        />


        <Route
          path='/admin'
          component={Dashboard}
        />
        <Route
          path='/FormularioDatosEnvio'
          component={FormularioDatosEnvio}
        />

        <Route
          path='/misCarritos'
          component={MisCarritos}
        />

        <Route exact path='/nosotros'
          component={Nosotros2}
         />
         

      </BrowserRouter>
      </ProviderAlert>
    </div>
  );
}
export default App2;