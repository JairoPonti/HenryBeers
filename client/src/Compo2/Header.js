import React, { useEffect } from "react";
// import '../index.css';
import { useSelector, useDispatch } from "react-redux";
import { getcarrito } from "../../src/Redux/Carrito";
import axios from "axios";
import { useHistory } from "react-router";
import GlideBanner from './GlideBanner.jsx'
import Categories from './Categories'
import FilterProducts from './FilterProducts'
import Facilities from './Facilites'
import Grid from './Grid'
import AllProducts from './AllProducts'
import Popup from './Popup'
import Home from './Home'
import Catalogo from '../Components/Catalogo/Catalogo'

const Inicio = () => {
  const history = useHistory();
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const carrito = useSelector((store) => store.carrito.carrito);

  useEffect(() => {
    if (user.id) {
      dispatch(getcarrito(user.id));

      const fetchData = async () => {
        await axios.post(`http://localhost:4000/users/${user.id}/carrito`);
      };
      fetchData();
    }

    if (user.id && localStorage.carrito) {
      let data = JSON.parse(localStorage.getItem("carrito"));
      // console.log(data.carrito);
      try {
        data.carrito.map(async (e) => {
          const { data } = await axios.post(
            `http://localhost:4000/users/${e.productId}/orden/${carrito.id}`
          );
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <div >
      <Home />
      <GlideBanner/>
      <Categories />
      {/* <FilterProducts/> */}
      {/* <Grid/> */}
      <AllProducts/>
      <Facilities/>
      <Popup/>
    </div>
    
  );
};
export default Inicio;
